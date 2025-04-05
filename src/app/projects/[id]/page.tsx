"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Home,
  Info,
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Coffee,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StakingModal } from "@/components/staking-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample project data
const projectsData = {
  "1": {
    id: "1",
    name: "Test Token",
    symbol: "TEST",
    summary: "A test property investment opportunity in prime location",
    description:
      "This property token represents ownership in a premium real estate development located in a high-growth area. Investors can benefit from both property value appreciation and rental income distribution.",
    tokenPrice: 0.015,
    totalSupply: 1000000000,
    startingApplicationSupply: 100000000,
    remainingApplicationSupply: 0, // Set to 0 to show fully funded state
    merchantSupply: 100000000,
    merchantAddress: "0x1234567890abcdef1234567890abcdef12345678",
    image: "/placeholder.svg?height=400&width=600",
    holders: [
      { address: "0x7a23...45cd", tokens: 500000, percentage: 0.05 },
      { address: "0x3f56...89ab", tokens: 300000, percentage: 0.03 },
      { address: "0x9c12...def0", tokens: 100000, percentage: 0.01 },
      { address: "0x45ab...78cd", tokens: 50000, percentage: 0.005 },
      { address: "0xef12...34ab", tokens: 30000, percentage: 0.003 },
      { address: "0x78cd...90ef", tokens: 21000, percentage: 0.0021 },
    ],
    // Property details for rental
    propertyDetails: {
      monthlyRent: 1200,
      location: "123 Blockchain Avenue, Crypto City, CC 12345",
      size: "1,200 sq ft",
      type: "Luxury Apartment",
      bedrooms: 2,
      bathrooms: 2,
      amenities: [
        "Swimming Pool",
        "Fitness Center",
        "24/7 Security",
        "Parking Space",
        "Pet Friendly",
      ],
    },
  },
  "2": {
    id: "2",
    name: "Urban Heights",
    symbol: "URBH",
    summary: "Luxury apartment complex in downtown metropolitan area",
    description:
      "Urban Heights represents a stake in a luxury apartment complex located in the heart of the city. This development features premium amenities and is positioned for strong rental yields.",
    tokenPrice: 0.025,
    totalSupply: 500000000,
    startingApplicationSupply: 100000000,
    remainingApplicationSupply: 95000000,
    merchantSupply: 50000000,
    merchantAddress: "0x2345678901abcdef2345678901abcdef23456789",
    image: "/placeholder.svg?height=400&width=600",
    holders: [
      { address: "0x8b34...56de", tokens: 2500000, percentage: 0.5 },
      { address: "0x4f67...90ab", tokens: 1500000, percentage: 0.3 },
      { address: "0xad23...ef01", tokens: 800000, percentage: 0.16 },
      { address: "0x56bc...89de", tokens: 200000, percentage: 0.04 },
    ],
    // Property details for rental
    propertyDetails: {
      monthlyRent: 1800,
      location: "456 Token Street, Crypto Heights, CH 67890",
      size: "1,500 sq ft",
      type: "Penthouse Suite",
      bedrooms: 3,
      bathrooms: 2,
      amenities: [
        "Rooftop Terrace",
        "Smart Home System",
        "Concierge Service",
        "Underground Parking",
        "Business Center",
      ],
    },
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectsData[projectId];

  const [stakeAmount, setStakeAmount] = useState("");
  const [isStaking, setIsStaking] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState<
    null | "pending" | "success" | "failed"
  >(null);

  // Default tab selection
  const [activeTab, setActiveTab] = useState<string>("rent");

  if (!project) {
    return (
      <div className="px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button onClick={() => router.push("/")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Explorer
        </Button>
      </div>
    );
  }

  const handleStake = () => {
    if (!stakeAmount || Number.parseFloat(stakeAmount) <= 0) return;

    setIsStaking(true);
    setShowModal(true);

    // Simulate transaction processing
    setTransactionStatus("pending");

    setTimeout(() => {
      // 90% chance of success
      const isSuccess = Math.random() < 0.9;
      setTransactionStatus(isSuccess ? "success" : "failed");
      setIsStaking(false);
    }, 3000);
  };

  const tokensToReceive = stakeAmount
    ? Number.parseFloat(stakeAmount) / project.tokenPrice
    : 0;

  // Check if project is fully funded
  const isFullyFunded = project.remainingApplicationSupply === 0;

  return (
    <div className="px-4 py-4">
      <Button
        onClick={() => router.push("/")}
        variant="ghost"
        className="mb-4 -ml-3 h-10"
        size="sm"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back
      </Button>

      <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
        />
        {isFullyFunded && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-1">
              Fully Funded
            </Badge>
          </div>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-1">{project.name}</h1>
      <div className="flex items-center mb-3">
        <Badge variant="outline" className="font-mono bg-gray-50 mr-2">
          {project.symbol}
        </Badge>
        <span className="text-gray-500 text-sm">{project.summary}</span>
      </div>

      {isFullyFunded ? (
        <div className="mb-6 animate-fadeIn">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full mobile-tabs"
          >
            <TabsList className="grid w-full grid-cols-2 mb-5 h-12 p-1 bg-gray-100 rounded-full">
              <TabsTrigger
                value="rent"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <div className="flex items-center gap-1.5">
                  <Home className="h-4 w-4" />
                  <span>Rent</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="info"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <div className="flex items-center gap-1.5">
                  <Info className="h-4 w-4" />
                  <span>Details</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rent" className="animate-fadeIn space-y-5 mt-0">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium">Monthly Rent</h3>
                <span className="text-xl font-bold text-primary">
                  ${project.propertyDetails.monthlyRent}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 text-sm">
                      {project.propertyDetails.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Maximize2 className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Size</h4>
                    <p className="text-gray-600 text-sm">
                      {project.propertyDetails.size}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <Bed className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">
                      {project.propertyDetails.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <Bath className="h-5 w-5 text-gray-500" />
                    <span className="text-sm">
                      {project.propertyDetails.bathrooms} Bathrooms
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {project.propertyDetails.amenities.map((amenity, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center gap-1 bg-gray-50 font-normal"
                    >
                      <Coffee className="h-3 w-3" />
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full h-12 text-base mt-2 rounded-xl">
                Proceed with Rental
              </Button>
            </TabsContent>

            <TabsContent value="info" className="animate-fadeIn space-y-5 mt-0">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-2">About This Project</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium mb-3">Token Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">Token Price</span>
                    <span className="font-medium">
                      ${project.tokenPrice.toFixed(3)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">Total Supply</span>
                    <span className="font-medium">
                      {project.totalSupply.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm text-gray-600">
                      Application Supply
                    </span>
                    <span className="font-medium">
                      {project.startingApplicationSupply.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">
                      Merchant Supply
                    </span>
                    <span className="font-medium">
                      {project.merchantSupply.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">Top Holders</h3>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    View All <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {project.holders.slice(0, 3).map((holder, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-xs font-medium">
                          {index + 1}
                        </div>
                        <span className="font-mono text-xs truncate max-w-[120px]">
                          {holder.address}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">
                          {holder.tokens.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {(holder.percentage * 100).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-green-50 p-4 rounded-xl mt-6 text-center">
            <h3 className="font-medium text-green-700 mb-1">
              Funding Complete
            </h3>
            <p className="text-sm text-gray-600">
              All tokens have been distributed. You can now rent this property
              or learn more about it.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-medium mb-2">About This Project</h2>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium">Top Holders</h3>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                View All <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <div className="space-y-3">
              {project.holders.slice(0, 3).map((holder, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b last:border-0"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="font-mono text-xs truncate max-w-[120px]">
                      {holder.address}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">
                      {holder.tokens.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {(holder.percentage * 100).toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
            <h3 className="text-lg font-medium">Stake Funds</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Token Price</span>
                <span className="font-medium">
                  ${project.tokenPrice.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm text-gray-600">Remaining Supply</span>
                <span className="font-medium">
                  {project.remainingApplicationSupply.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="stakeAmount"
                className="block text-sm font-medium mb-2"
              >
                Amount to Stake (USD)
              </label>
              <Input
                id="stakeAmount"
                type="number"
                placeholder="Enter amount"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                min="0"
                step="0.01"
                className="h-12 text-base"
              />
            </div>

            {stakeAmount && Number.parseFloat(stakeAmount) > 0 && (
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>You will receive:</span>
                  <span className="font-medium">
                    {tokensToReceive.toLocaleString()} {project.symbol}
                  </span>
                </div>
              </div>
            )}
          </div>

          <Button
            className="w-full h-12 text-base rounded-xl"
            onClick={handleStake}
            disabled={
              !stakeAmount || Number.parseFloat(stakeAmount) <= 0 || isStaking
            }
          >
            {isStaking ? "Processing..." : "Stake Funds"}
          </Button>

          <p className="text-xs text-gray-500 text-center px-4">
            By staking, you agree to the terms and conditions of this platform
          </p>
        </div>
      )}

      <StakingModal
        open={showModal}
        onClose={() => {
          if (transactionStatus !== "pending") {
            setShowModal(false);
            setTransactionStatus(null);
          }
        }}
        status={transactionStatus}
        amount={stakeAmount}
        tokenSymbol={project.symbol}
        tokensToReceive={tokensToReceive}
      />
    </div>
  );
}
