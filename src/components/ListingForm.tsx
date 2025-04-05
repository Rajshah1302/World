"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
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

  const [currentStep, setCurrentStep] = useState(1);
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

      // Prepare and trim form data
      const propertyName = data.propertyName.trim();
      const propertyLatitude = data.propertyLatitude.trim();
      const propertyLongitude = data.propertyLongitude.trim();
      const propertyDescription = data.propertyDescription.trim();
      const rentalMode = parseInt(data.rentalMode, 10); // convert to number
      const offeredPrice = data.offeredPrice.trim();
      const userTokenAddress = data.tokenAddress.trim();

      // Construct the transaction payload for listProperty.
      const tx = {
        address: "0x7a558f2c335194db49778bdbebc24d496755ea35",
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
      const response = await fetch("/api/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tx),
      });

      const result = await response.json();
      console.log(result.message);
      console.log("Transaction:", tx);

      const { commandPayload, finalPayload } =
        await MiniKit.commandsAsync.sendTransaction({
          transaction: [tx],
        });
      const response2 = await fetch("/api/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });
      if (finalPayload.error) {
        throw new Error(finalPayload.error);
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
    // A mobile-friendly container centered on the screen
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Name and Description */}
        <div className={currentStep === 1 ? "" : "hidden"}>
          <div>
            <h2 htmlFor="propertyName">Property Name</h2>
            <Input
              id="propertyName"
              className="w-full rounded-md border border-gray-300 bg-white text-black"
              {...register("propertyName", {
                required: "Property name is required",
              })}
            />
            {errors.propertyName && (
              <p className="text-red-500">{errors.propertyName.message}</p>
            )}
          </div>
          <div>
            <h2 htmlFor="propertyDescription">Property Description</h2>
            <Input
              id="propertyDescription"
              className="w-full rounded-md border border-gray-300 bg-white text-black"
              {...register("propertyDescription", {
                required: "Property description is required",
              })}
            />
            {errors.propertyDescription && (
              <p className="text-red-500">{errors.propertyDescription.message}</p>
            )}
          </div>
        </div>

        {/* Step 2: Coordinates */}
        <div className={currentStep === 2 ? "" : "hidden"}>
          <div>
            <h2 htmlFor="propertyLatitude">Property Latitude</h2>
            <Input
              id="propertyLatitude"
              className="w-full rounded-md border border-gray-300 bg-white text-black"
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
              className="w-full rounded-md border border-gray-300 bg-white text-black"
              {...register("propertyLongitude", {
                required: "Property longitude is required",
              })}
            />
            {errors.propertyLongitude && (
              <p className="text-red-500">{errors.propertyLongitude.message}</p>
            )}
          </div>
        </div>

        {/* Step 3: Offered Price and Token Address */}
        <div className={currentStep === 3 ? "" : "hidden"}>
          <div>
            <h2 htmlFor="offeredPrice">Offered Price (Token Amount)</h2>
            <Input
              id="offeredPrice"
              className="w-full rounded-md border border-gray-300 bg-white text-black"
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
              className="w-full rounded-md border border-gray-300 bg-white text-black"
              {...register("tokenAddress", {
                required: "Token address is required",
              })}
            />
            {errors.tokenAddress && (
              <p className="text-red-500">{errors.tokenAddress.message}</p>
            )}
          </div>
        </div>

        {/* Navigation buttons: vertical stack */}
        <div className="flex flex-col space-y-4">
          {currentStep > 1 && (
            <Button
              type="button"
              className="w-[325px] bg-black text-white"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          {currentStep < 3 && (
            <Button
              type="button"
              className="w-[325px] bg-black text-white"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          )}
          {currentStep === 3 && (
            <Button
              type="submit"
              className="w-[325px] bg-black text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>

        {submitStatus && <p className="text-green-500">{submitStatus}</p>}
      </form>
    </div>
  );
}
