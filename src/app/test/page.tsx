"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react";
import div from "@/components/div";
import {
  MiniKit,
  VerifyCommandInput,
  VerificationLevel,
} from "@worldcoin/minikit-js";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const verifyPayload: VerifyCommandInput = {
    action: "verify",
    signal: "", // Optional: Replace with any signal data if needed
    verification_level: VerificationLevel.Device,
  };

  const handleVerify = async () => {
    if (!MiniKit.isInstalled()) {
      console.log("MiniKit is not installed");
      return;
    }
    try {
      // Initiate the verify command which opens the World App for incognito action
      const { finalPayload } = await MiniKit.commandsAsync.verify(
        verifyPayload
      );
      if (finalPayload.status === "error") {
        console.log("Error during verification:", finalPayload);
        return;
      }
      // Send the proof to your backend verification route
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payload: finalPayload,
          action: "voting-action",
          signal: "0x12312",
        }),
      });
      const json = await response.json();
      if (json.status === 200) {
        console.log("Verification successful");
        setIsVerified(true);
      } else {
        console.log("Verification failed", json);
      }
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <div>Open Drawer</div>
      </DrawerTrigger>
      <DrawerContent className="w-screen flex flex-col items-center pb-4 bg-zinc-200">
        <Typography component="h2" variant="heading" level={3}>
          Drawer title
        </Typography>
        <Typography className="p-4">Drawer content</Typography>
        <div className="flex space-x-4 mt-4">
          {!isVerified && (
            <div
              onClick={handleVerify}
              className="w-[300px] bg-black text-white text-center py-3 rounded-2xl "
            >
              Verify
            </div>
          )}
          {isVerified && <div>Claim</div>}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
