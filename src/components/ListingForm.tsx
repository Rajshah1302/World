"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { writeContract } from "@wagmi/core";
import { RentalFactoryAbi } from "@/utlis/contractsABI/RentalFactory";
import { RentalFactoryAddress } from "@/utlis/addresses";
import { toast } from "@/components/ui/use-toast";
import { config } from "@/utlis/config";
import { useRouter } from "next/navigation";

interface PropertyFormData {
  propertyName: string;
  propertyLatitude: string;
  propertyLongitude: string;
  propertyDescription: string;
  rentalMode: string; // "0" for monthly, "1" for daily (like hotels)
  offeredPrice: string;
}

export function PropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>();

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: PropertyFormData) => {
    setLoading(true);
    try {
      const chainId = config.state.chainId;

      // Trim and prepare form data
      const propertyName = data.propertyName.trim();
      const propertyLatitude = data.propertyLatitude.trim();
      const propertyLongitude = data.propertyLongitude.trim();
      const propertyDescription = data.propertyDescription.trim();
      const rentalMode = parseInt(data.rentalMode, 10); // Convert "0" or "1" to a number
      const offeredPrice = data.offeredPrice.trim();

      // Call the contract function (update function name & args as needed)
      const tx = await writeContract(config as any, {
        address: RentalFactoryAddress[chainId],
        abi: RentalFactoryAbi,
        functionName: "listProperty",
        args: [
          propertyName,
          propertyLatitude,
          propertyLongitude,
          propertyDescription,
          rentalMode,
          offeredPrice,
        ],
      });

      console.log("Transaction:", tx);
      setSubmitStatus("Property listing created successfully!");
      toast({
        title: "Success",
        description: "Property listing created successfully!",
      });
      router.push("/organizer/MyProperties");
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
        <Label htmlFor="propertyName">Property Name</Label>
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
        <Label htmlFor="propertyLatitude">Property Latitude</Label>
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
        <Label htmlFor="propertyLongitude">Property Longitude</Label>
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
        <Label htmlFor="propertyDescription">Property Description</Label>
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
        <Label htmlFor="rentalMode">Rental Mode    </Label>
        <select
          id="rentalMode"
          className="rounded-md border border-gray-300 bg-white text-black"
          {...register("rentalMode", {
            required: "Rental mode is required",
          })}
        >
          <option value="">Select Rental Mode</option>
          <option value="0">Monthly</option>
          <option value="1">Daily (like hotels)</option>
        </select>
        {errors.rentalMode && (
          <p className="text-red-500">{errors.rentalMode.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="offeredPrice">Offered Price</Label>
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

      <Button type="submit" className="border border-black" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>

      {submitStatus && <p className="text-green-500">{submitStatus}</p>}
    </form>
  );
}
