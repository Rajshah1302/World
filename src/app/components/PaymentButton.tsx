"use client";
import React from "react";
import {
  MiniKit,
  tokenToDecimals,
  Tokens,
  PayCommandInput,
} from "@worldcoin/minikit-js";

interface PaymentButtonProps {
  children?: React.ReactNode;
  // You can add additional props (e.g., custom endpoint URLs, addresses, etc.) if needed.
}

export default function PaymentButton({ children = "Send Payment" }: PaymentButtonProps) {
  const sendPayment = async () => {
    try {
      // Call your backend endpoint to get the payment reference
      const res = await fetch("/api/initiate-pay", {
        method: "POST",
      });
      const { id } = await res.json();

      // Create the payload using the provided payment details
      const payload: PayCommandInput = {
        reference: id,
        to: "0x9E73aB2e4E0a856F78Ee74565Ea2748eD37DDe66", // Test address
        tokens: [
          {
            symbol: Tokens.WLD,
            token_amount: tokenToDecimals(1, Tokens.WLD).toString(),
          },
          {
            symbol: Tokens.USDCE,
            token_amount: tokenToDecimals(3, Tokens.USDCE).toString(),
          },
        ],
        description: "Test example payment for minikit",
      };

      // Check if MiniKit is installed in the user's environment
      if (!MiniKit.isInstalled()) {
        alert("MiniKit is not installed.");
        return;
      }

      // Trigger the payment command using MiniKit
      const { finalPayload } = await MiniKit.commandsAsync.pay(payload);

      // If payment is successful, confirm the payment on your backend
      if (finalPayload.status === "success") {
        const confirmRes = await fetch(`/api/confirm-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalPayload),
        });
        const payment = await confirmRes.json();
        if (payment.success) {
          alert("Congrats! Your payment was successful.");
        } else {
          alert("Payment confirmation failed on the server.");
        }
      } else {
        alert("Payment failed.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred during payment processing.");
    }
  };

  return (
    <button
      onClick={sendPayment}
      className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
