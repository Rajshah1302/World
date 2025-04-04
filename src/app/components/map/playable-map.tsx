"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { getPublicClient } from "@wagmi/core";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/app/components/ui/dialog";
import MapComponent from "@/app/components/map/map";

// Icons, UI, Assets
import { X } from "lucide-react";
import NexusLogo from "@/assets/nexusLogo.png";
import { Button } from "@/components/ui/button";

// ABIs and addresses
import { RentalFactoryAbi } from "@/utlis/contractsABI/RentalFactory";
import { ListingAbi } from "@/utlis/contractsABI/Listing";
import { RentalFactoryAddress } from "@/utlis/addresses";
import { config } from "@/utlis/config";

// Define the RentalProperty type based on your contracts
interface RentalProperty {
  address: `0x${string}`;
  propertyName: string;
  propertyLatitude: string;
  propertyLongitude: string;
  propertyDescription: string;
  rentalMode: number; // 0 for monthly, 1 for daily
  offeredPrice: string; // using the returned value from basePrice
}

export default function PlayableMap() {
  const router = useRouter();
  const { address: userAddress } = useAccount();

  const [rentalProperties, setRentalProperties] = useState<RentalProperty[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state for showing a selected property details
  const [selectedProperty, setSelectedProperty] =
    useState<RentalProperty | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Current user location (for the map)
  const [currentUser, setCurrentUser] = useState({
    id: "current",
    latitude: 0,
    longitude: 0,
    name: "You",
    avatarUrl: "📍",
  });

  // Fetch rental properties from the blockchain
  const fetchRentalProperties = async () => {
    if (!userAddress) return;
    try {
      setLoading(true);
      setError(null);

      const publicClient = getPublicClient(config as any, {
        chainId: config.state.chainId,
      });

      // Fetch all property addresses for the user using the RentalFactory contract.
const propertyAddresses = (await publicClient.readContract({
  address: RentalFactoryAddress[config.state.chainId] as `0x${string}`,
  abi: RentalFactoryAbi,
  functionName: "getPropertiesByOwner",
  args: [userAddress],
})) as Array<`0x${string}`>;


      // For each address, fetch its details from the RentalListing contract.
      const propertyDataPromises = propertyAddresses.map(async (addr) => {
        try {
          const [
            propertyName,
            propertyLatitude,
            propertyLongitude,
            propertyDescription,
            rentalMode,
            basePrice,
          ] = await Promise.all([
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "propertyName",
            }),
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "propertyLatitude",
            }),
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "propertyLongitude",
            }),
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "propertyDescription",
            }),
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "rentalMode",
            }),
            publicClient.readContract({
              address: addr,
              abi: ListingAbi,
              functionName: "basePrice",
            }),
          ]);

          return {
            address: addr,
            propertyName,
            propertyLatitude,
            propertyLongitude,
            propertyDescription,
            rentalMode: Number(rentalMode),
            offeredPrice: basePrice,
          } as RentalProperty;
        } catch (err) {
          console.error("Error reading property data from", addr, err);
          return null;
        }
      });

      const results = await Promise.all(propertyDataPromises);
      const validProperties = results.filter(
        (p) => p !== null
      ) as RentalProperty[];

      setRentalProperties(validProperties);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Failed to fetch properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userAddress) {
      fetchRentalProperties();
    }
  }, [userAddress]);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentUser((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      (error) => console.error("Error retrieving geolocation:", error)
    );
  }, []);

  // Convert rental properties into marker format for the MapComponent
  const markers = useMemo(() => {
    return rentalProperties.map((property) => ({
      id: property.address,
      name: property.propertyName,
      latitude: parseFloat(property.propertyLatitude),
      longitude: parseFloat(property.propertyLongitude),
      symbol: "RENT",
      logoUrl: NexusLogo.src,
      backgroundColor: "#8A2BE2",
    }));
  }, [rentalProperties]);

  // When a marker is clicked, open the modal with property details
  const handleMarkerClick = useCallback(
    (markerId: string) => {
      const found = rentalProperties.find((p) => p.address === markerId);
      if (found) {
        setSelectedProperty(found);
        setIsModalOpen(true);
      }
    },
    [rentalProperties]
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  }, []);

  // Props for the MapComponent
  const mapProps = useMemo(
    () => ({
      tokens: markers,
      currentUser,
      onTokenClick: (token: { id: string }) => handleMarkerClick(token.id),
    }),
    [markers, currentUser, handleMarkerClick]
  );

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-black text-white">
  //       <p>Loading properties...</p>
  //     </div>
  //   );
  // }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        {error}
      </div>
    );
  }

  // Redirect logic for placing a bid or viewing further details
  const handlePlaceBid = () => {
    router.push("/bid");
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <MapComponent {...mapProps} />
      </main>

      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => !open && handleModalClose()}
      >
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40" />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <DialogContent
                className="
                  relative 
                  bg-[#1a1a1a] 
                  text-white 
                  border 
                  border-[#333] 
                  rounded-lg 
                  shadow-md 
                  p-6 
                  max-w-sm 
                  w-full 
                  mx-4
                "
              >
                <DialogClose className="absolute top-4 right-4 text-gray-400 hover:text-gray-200">
                  <X className="w-5 h-5" />
                </DialogClose>

                {selectedProperty && (
                  <>
                    <DialogTitle className="text-xl font-bold text-center mb-4">
                      {selectedProperty.propertyName}
                    </DialogTitle>

                    <div className="flex justify-center mb-4">
                      <img
                        src={NexusLogo.src}
                        alt="Property Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </div>

                    <div className="flex justify-center mb-2">
                      <span className="inline-block bg-gray-700 px-2 py-1 rounded-full text-sm font-medium">
                        {selectedProperty.rentalMode === 0
                          ? "Monthly Rental"
                          : "Daily Rental"}
                      </span>
                    </div>

                    <div className="text-center text-sm text-gray-300 space-y-2 mb-4">
                      <p>{selectedProperty.propertyDescription}</p>
                    </div>

                    <div className="flex items-center justify-center text-base text-gray-100 mb-4">
                      <span className="mr-2">Price:</span>
                      <span>{selectedProperty.offeredPrice} $APT</span>
                    </div>

                    <Button
                      onClick={handlePlaceBid}
                      className="
                        w-full 
                        bg-blue-600 
                        hover:bg-blue-500 
                        text-white 
                        font-semibold 
                        py-2 
                        rounded-md 
                        flex 
                        items-center 
                        justify-center 
                        transition 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-400 
                        relative
                      "
                    >
                      Place Bid
                      <span className="absolute inset-0 rounded-md ring-2 ring-transparent group-hover:ring-blue-400 transition"></span>
                    </Button>
                  </>
                )}
              </DialogContent>
            </div>
          </>
        )}
      </Dialog>
    </>
  );
}
