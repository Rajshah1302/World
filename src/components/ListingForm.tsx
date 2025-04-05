"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { config } from "@/utlis/config";
import { RentalFactoryAbi } from "@/utlis/contractsABI/RentalFactory";
import { RentalFactoryAddress } from "@/utlis/addresses";
import { MiniKit } from "@worldcoin/minikit-js";

interface PropertyFormData {
  propertyName: string;
  propertyLatitude: string;
  propertyLongitude: string;
  propertyDescription: string;
  rentalMode: string; // "0" for monthly, "1" for daily (like hotels)
  offeredPrice: string; // Token amount
  tokenAddress: string; // User provided token address
}

export function PropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>();

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: PropertyFormData) => {
    setLoading(true);
    try {
      if (!MiniKit.isInstalled()) {
        toast({
          title: "MiniKit not installed",
          description: "Please install MiniKit to proceed.",
        });
        return;
      }
      const chainId = config.state.chainId;

      // Prepare and trim form data
      const propertyName = data.propertyName.trim();
      const propertyLatitude = data.propertyLatitude.trim();
      const propertyLongitude = data.propertyLongitude.trim();
      const propertyDescription = data.propertyDescription.trim();
      const rentalMode = parseInt(data.rentalMode, 10); // convert to number
      const offeredPrice = data.offeredPrice.trim();
      const userTokenAddress = data.tokenAddress.trim();

      // Construct the transaction payload for listProperty.
      // All values are stringified as required.
      const tx = {
        address: RentalFactoryAddress[chainId],
        abi: RentalFactoryAbi,
        functionName: "listProperty",
        args: [
          propertyName,
          propertyLatitude,
          propertyLongitude,
          propertyDescription,
          offeredPrice,
          userTokenAddress,
        ],
      };

      console.log("Transaction:", tx);

      // Use the synchronous command as shown in the docs.
      const payload = MiniKit.commands.sendTransaction({
        transaction: [tx],
      });

      // Check if the payload contains an error.
      if (payload.error) {
        throw new Error(payload.error);
      } else {
        setSubmitStatus("Property listing created successfully!");
        toast({
          title: "Success",
          description: "Property listing created successfully!",
        });
      }
    } catch (error: any) {
      console.error("Error creating property listing:", error);
      setSubmitStatus("Error creating property listing.");
      toast({
        title: "Error",
        description:
          error?.message ||
          "An error occurred while creating the property listing.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 htmlFor="propertyName">Property Name</h2>
        <Input
          id="propertyName"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("propertyName", {
            required: "Property name is required",
          })}
        />
        {errors.propertyName && (
          <p className="text-red-500">{errors.propertyName.message}</p>
        )}
      </div>

      <div>
        <h2 htmlFor="propertyLatitude">Property Latitude</h2>
        <Input
          id="propertyLatitude"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("propertyLatitude", {
            required: "Property latitude is required",
          })}
        />
        {errors.propertyLatitude && (
          <p className="text-red-500">{errors.propertyLatitude.message}</p>
        )}
      </div>

      <div>
        <h2 htmlFor="propertyLongitude">Property Longitude</h2>
        <Input
          id="propertyLongitude"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("propertyLongitude", {
            required: "Property longitude is required",
          })}
        />
        {errors.propertyLongitude && (
          <p className="text-red-500">{errors.propertyLongitude.message}</p>
        )}
      </div>

      <div>
        <h2 htmlFor="propertyDescription">Property Description</h2>
        <Input
          id="propertyDescription"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("propertyDescription", {
            required: "Property description is required",
          })}
        />
        {errors.propertyDescription && (
          <p className="text-red-500">{errors.propertyDescription.message}</p>
        )}
      </div>

      <div>
        <h2 htmlFor="offeredPrice">Offered Price (Token Amount)</h2>
        <Input
          id="offeredPrice"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("offeredPrice", {
            required: "Offered price is required",
          })}
        />
        {errors.offeredPrice && (
          <p className="text-red-500">{errors.offeredPrice.message}</p>
        )}
      </div>

      <div>
        <h2 htmlFor="tokenAddress">Token Address</h2>
        <Input
          id="tokenAddress"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("tokenAddress", {
            required: "Token address is required",
          })}
        />
        {errors.tokenAddress && (
          <p className="text-red-500">{errors.tokenAddress.message}</p>
        )}
      </div>

      <Button type="submit" className="border border-black" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>

      {submitStatus && <p className="text-green-500">{submitStatus}</p>}
    </form>
  );
}
