"use client";
import React, { useState, useCallback, useMemo } from "react";
import MapComponent from "./map";
import Link from "next/link";
import Button from "@/components/Button";

// Import Drawer components and verification utilities
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react";
import {
  MiniKit,
  VerifyCommandInput,
  VerificationLevel,
} from "@worldcoin/minikit-js";

export default function PlayableMap() {
  // Token markers
  const tokens = useMemo(
    () => [
      {
        id: "1",
        latitude: 25.033964,
        longitude: 121.564468,
        symbol: "WLD",
        name: "Taipei 101",
        backgroundColor: "#8A2BE2",
      },
    ],
    []
  );

  const [currentUser, setCurrentUser] = useState({
    id: "current",
    latitude: 25.0333,
    longitude: 121.5333,
    name: "You",
    avatarUrl: "📍",
  });

  // Modal state for the token details
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    selectedItem: (typeof tokens)[0] | null;
  }>({
    isOpen: false,
    selectedItem: null,
  });

  // State for verification status
  const [isVerified, setIsVerified] = useState(false);

  const handleTokenClick = useCallback((token) => {
    setModalState({
      isOpen: true,
      selectedItem: token,
    });
  }, []);

  const handleModalClose = useCallback(() => {
    setModalState({
      isOpen: false,
      selectedItem: null,
    });
    // Reset verification status if needed
    setIsVerified(false);
  }, []);

  const mapProps = useMemo(
    () => ({
      tokens,
      currentUser,
      onTokenClick: handleTokenClick,
    }),
    [tokens, currentUser, handleTokenClick]
  );

  // Verification payload for MiniKit
  const verifyPayload: VerifyCommandInput = {
    action: "verify",
    signal: "",
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
      setIsVerified(true)
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
    <>
      <main className="flex flex-col items-center justify-center h-screen ">
        <MapComponent {...mapProps} />
      </main>

      <Drawer
        open={modalState.isOpen}
        onOpenChange={(open: boolean) => {
          if (!open) handleModalClose();
        }}
      >
        {/* Hidden trigger as the drawer is opened programmatically */}
        {/* <DrawerTrigger>
            <div style={{ display: "none" }}>Open Drawer</div>
          </DrawerTrigger> */}
        <DrawerContent className="w-screen flex flex-col items-center pt-2 pb-10 bg-white text-black rounded-[30px]">
          <Typography component="h2" variant="heading" level={3}>
            {modalState.selectedItem?.name || "Item Details"}
          </Typography>
          <Typography className="p-4">
            {modalState.selectedItem
              ? `Token Symbol: ${modalState.selectedItem.symbol}`
              : ""}
          </Typography>
          <div className="flex space-x-4 mt-4">
            {!isVerified ? (
              <div
                onClick={handleVerify}
                className="w-[300px] bg-black text-white text-center py-3 rounded-2xl "
              >
                {" "}
                Verify
              </div>
            ) : (
              <div
                onClick={handleVerify}
                className="w-[300px] bg-black text-white text-center py-3 rounded-2xl "
              >
                {" "}
                Verify
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
      {/* )} */}
    </>
  );
}
