"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { MiniKit } from "@worldcoin/minikit-js";

interface WalletConnectButtonProps {
  onSuccess?: () => void;
}

export function WalletConnectButton({ onSuccess }: WalletConnectButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletConnect = async () => {
    if (!MiniKit.isInstalled()) {
      console.error("MiniKit is not installed. Please install it to continue.");
      return;
    }
    setIsLoading(true);
    try {
      // Request a nonce from your server
      const res = await fetch("/api/nonce");
      const { nonce } = await res.json();
      console.log("Received nonce:", nonce);

      // Initiate the wallet authentication process
      const { finalPayload } = await MiniKit.commandsAsync.walletAuth({
        nonce,
        expirationTime: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour expiration
        statement: "Connect with your wallet",
      });

      if (finalPayload.status === "error") {
        throw new Error(finalPayload.error_code);
      }

      // Verify the wallet authentication on the server side
      const verifyRes = await fetch("/api/complete-siwe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payload: finalPayload,
          nonce,
        }),
      });
      const verification = await verifyRes.json();
      console.log("Verification response:", verification);

      if (verification.isValid) {
        // Sign in using NextAuth and the custom provider
        await signIn("worldcoin-wallet", {
          message: finalPayload.message,
          signature: finalPayload.signature,
          address: finalPayload.address,
          nonce,
          redirect: false,
        });
        // Trigger the onSuccess callback if provided
        if (onSuccess) onSuccess();
      } else {
        console.error("Verification failed:", verification);
      }
    } catch (error) {
      console.error("Wallet connect error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleWalletConnect}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg border-2 border-blue-900/50 font-bold shadow-md transition-colors disabled:opacity-50 tracking-wide"
    >
      {isLoading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Connecting...</span>
        </div>
      ) : (
        <div className="flex items-center">
          <span className="mr-2">🔗</span>
          <span>Connect Wallet</span>
        </div>
      )}
    </button>
  );
}
