'use client'
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react";
import Button from "@/components/Button";
import { MiniKit, VerifyCommandInput, VerificationLevel } from "@worldcoin/minikit-js";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const verifyPayload: VerifyCommandInput = {
    action: "voting-action", // Replace with your actual action ID from the Developer Portal
    signal: "0x12312", // Optional: Replace with any signal data if needed
    verification_level: VerificationLevel.Orb, // Can be Orb or Device based on your setup
  };

  const handleVerify = async () => {
    if (!MiniKit.isInstalled()) {
      console.log("MiniKit is not installed");
      return;
    }
    try {
      // Initiate the verify command which opens the World App for incognito action
      const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);
      if (finalPayload.status === "error") {
        console.log("Error during verification:", finalPayload);
        return;
      }
      // Send the proof to your backend verification route
      const response = await fetch("https://a20a-111-235-226-130.ngrok-free.app/api/verify", {
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
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="w-screen flex flex-col items-center pb-4 bg-zinc-200">
        <Typography component="h2" variant="heading" level={3}>
          Drawer title
        </Typography>
        <Typography className="p-4">Drawer content</Typography>
        <div className="flex space-x-4 mt-4">
          {!isVerified && (
            <Button onClick={handleVerify}>Verify</Button>
          )}
          {isVerified && (
            <Button>Claim</Button>
          )}
        </div>
        <DrawerClose>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
