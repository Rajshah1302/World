"use client";
import React, { useState } from "react";
// import styled from 'styled-components';
import "./style.css";
import MobileNavbar from "../components/navbar";
import { toast } from "@/components/ui/use-toast";
import { MiniKit } from "@worldcoin/minikit-js";
const Card = () => {
  const [yieldAmount, setYieldAmount] = useState(12345.67);
  const [loading, setLoading] = useState(false);
  const [claimStatus, setClaimStatus] = useState<string | null>(null);

  // Updated claim handler to call the claimRevenue function on-chain
  const handleClaim = async () => {
    setLoading(true);
    try {
      if (!MiniKit.isInstalled()) {
        toast({
          title: "MiniKit not installed",
          description: "Please install MiniKit to proceed.",
        });
        return;
      }
      
      // Construct the transaction payload for claimRevenue
      const tx = {
        address: YourContractAddress, // Your contract address
        abi: YourContractAbi,         // Your contract ABI
        functionName: "claimRevenue",
        args: [],                     // No arguments for claimRevenue
      };

      // Optionally, send the payload to your backend (if needed)
      const response = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tx),
      });
      const result = await response.json();
      console.log(result.message);
      console.log("Transaction:", tx);

      // Send the transaction using MiniKit
      const { commandPayload, finalPayload } = await MiniKit.commandsAsync.sendTransaction({
        transaction: [tx],
      });

      // Finalize the transaction
      const response2 = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });
      
      if (finalPayload.error) {
        throw new Error(finalPayload.error);
      } else {
        setClaimStatus("Revenue claimed successfully!");
        toast({
          title: "Success",
          description: "Revenue claimed successfully!",
        });
        // Update the yield to 0 after a successful claim
        setYieldAmount(0);
      }
    } catch (error: any) {
      console.error("Error claiming revenue:", error);
      setClaimStatus("Error claiming revenue.");
      toast({
        title: "Error",
        description: error?.message || "An error occurred while claiming revenue.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setClaimStatus(null), 3000);
    }
  };
  
  return (
    <div className="w-screen min-h-screen flex flex-col items-center  bg-white text-black rounded-2xl shadow-lg">
      <div className="card__img">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%">
          <rect fill="#ffffff" width={540} height={450} />
          <defs>
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1={0}
              x2={0}
              y1={0}
              y2="100%"
              gradientTransform="rotate(222,648,379)"
            >
              <stop offset={0} stopColor="#ffffff" />
              <stop offset={1} stopColor="#FC726E" />
            </linearGradient>
            <pattern
              patternUnits="userSpaceOnUse"
              id="b"
              width={300}
              height={250}
              x={0}
              y={0}
              viewBox="0 0 1080 900"
            >
              <g fillOpacity="0.5">
                <polygon fill="#444" points="90 150 0 300 180 300" />
                <polygon points="90 150 180 0 0 0" />
                <polygon fill="#AAA" points="270 150 360 0 180 0" />
                <polygon fill="#DDD" points="450 150 360 300 540 300" />
                <polygon fill="#999" points="450 150 540 0 360 0" />
                <polygon points="630 150 540 300 720 300" />
                <polygon fill="#DDD" points="630 150 720 0 540 0" />
                <polygon fill="#444" points="810 150 720 300 900 300" />
                <polygon fill="#FFF" points="810 150 900 0 720 0" />
                <polygon fill="#DDD" points="990 150 900 300 1080 300" />
                <polygon fill="#444" points="990 150 1080 0 900 0" />
                <polygon fill="#DDD" points="90 450 0 600 180 600" />
                <polygon points="90 450 180 300 0 300" />
                <polygon fill="#666" points="270 450 180 600 360 600" />
                <polygon fill="#AAA" points="270 450 360 300 180 300" />
                <polygon fill="#DDD" points="450 450 360 600 540 600" />
                <polygon fill="#999" points="450 450 540 300 360 300" />
                <polygon fill="#999" points="630 450 540 600 720 600" />
                <polygon fill="#FFF" points="630 450 720 300 540 300" />
                <polygon points="810 450 720 600 900 600" />
                <polygon fill="#DDD" points="810 450 900 300 720 300" />
                <polygon fill="#AAA" points="990 450 900 600 1080 600" />
                <polygon fill="#444" points="990 450 1080 300 900 300" />
                <polygon fill="#222" points="90 750 0 900 180 900" />
                <polygon points="270 750 180 900 360 900" />
                <polygon fill="#DDD" points="270 750 360 600 180 600" />
                <polygon points="450 750 540 600 360 600" />
                <polygon points="630 750 540 900 720 900" />
                <polygon fill="#444" points="630 750 720 600 540 600" />
                <polygon fill="#AAA" points="810 750 720 900 900 900" />
                <polygon fill="#666" points="810 750 900 600 720 600" />
                <polygon fill="#999" points="990 750 900 900 1080 900" />
                <polygon fill="#999" points="180 0 90 150 270 150" />
                <polygon fill="#444" points="360 0 270 150 450 150" />
                <polygon fill="#FFF" points="540 0 450 150 630 150" />
                <polygon points="900 0 810 150 990 150" />
                <polygon fill="#222" points="0 300 -90 450 90 450" />
                <polygon fill="#FFF" points="0 300 90 150 -90 150" />
                <polygon fill="#FFF" points="180 300 90 450 270 450" />
                <polygon fill="#666" points="180 300 270 150 90 150" />
                <polygon fill="#222" points="360 300 270 450 450 450" />
                <polygon fill="#FFF" points="360 300 450 150 270 150" />
                <polygon fill="#444" points="540 300 450 450 630 450" />
                <polygon fill="#222" points="540 300 630 150 450 150" />
                <polygon fill="#AAA" points="720 300 630 450 810 450" />
                <polygon fill="#666" points="720 300 810 150 630 150" />
                <polygon fill="#FFF" points="900 300 810 450 990 450" />
                <polygon fill="#999" points="900 300 990 150 810 150" />
                <polygon points="0 600 -90 750 90 750" />
                <polygon fill="#666" points="0 600 90 450 -90 450" />
                <polygon fill="#AAA" points="180 600 90 750 270 750" />
                <polygon fill="#444" points="180 600 270 450 90 450" />
                <polygon fill="#444" points="360 600 270 750 450 750" />
                <polygon fill="#999" points="360 600 450 450 270 450" />
                <polygon fill="#666" points="540 600 630 450 450 450" />
                <polygon fill="#222" points="720 600 630 750 810 750" />
                <polygon fill="#FFF" points="900 600 810 750 990 750" />
                <polygon fill="#222" points="900 600 990 450 810 450" />
                <polygon fill="#DDD" points="0 900 90 750 -90 750" />
                <polygon fill="#444" points="180 900 270 750 90 750" />
                <polygon fill="#FFF" points="360 900 450 750 270 750" />
                <polygon fill="#AAA" points="540 900 630 750 450 750" />
                <polygon fill="#FFF" points="720 900 810 750 630 750" />
                <polygon fill="#222" points="900 900 990 750 810 750" />
                <polygon fill="#222" points="1080 300 990 450 1170 450" />
                <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
                <polygon points="1080 600 990 750 1170 750" />
                <polygon fill="#666" points="1080 600 1170 450 990 450" />
                <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
              </g>
            </pattern>
          </defs>
          <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
          <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
        </svg>
      </div>
      <div className="card__avatar absolute top-30">
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <circle cx={64} cy={64} fill="#ff8475" r={60} />
          <circle cx={64} cy={64} fill="#f85565" opacity=".4" r={48} />
          <path
            d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z"
            fill="#7f3838"
          />
          <path
            d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z"
            fill="#393c54"
            opacity=".4"
          />
          <circle cx={89} cy={65} fill="#fbc0aa" r={7} />
          <path
            d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z"
            fill="#4bc190"
          />
          <path
            d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z"
            fill="#356cb6"
            opacity=".3"
          />
          <path
            d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z"
            fill="#356cb6"
            opacity=".3"
          />
          <path d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z" fill="#fff" />
          <path
            d="m64 88.75v9.75"
            fill="none"
            stroke="#fbc0aa"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={14}
          />
          <circle cx={39} cy={65} fill="#fbc0aa" r={7} />
          <path
            d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"
            fill="#ffd8c9"
          />
          <path
            d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z"
            fill="#bc5b57"
          />
          <path
            d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5"
            style={{
              fill: "none",
              strokeLinecap: "round",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: 2,
              opacity: ".1",
            }}
          />
          <path
            d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3"
            style={{
              fill: "none",
              strokeLinecap: "round",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: 2,
              opacity: ".1",
            }}
          />
          <circle cx={76} cy="62.28" fill="#515570" r={3} />
          <circle cx={52} cy="62.28" fill="#515570" r={3} />
          <ellipse
            cx="50.42"
            cy="69.67"
            fill="#f85565"
            opacity=".1"
            rx="4.58"
            ry="2.98"
          />
          <ellipse
            cx="77.58"
            cy="69.67"
            fill="#f85565"
            opacity=".1"
            rx="4.58"
            ry="2.98"
          />
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="m64 67v4" stroke="#fbc0aa" strokeWidth={4} />
            <path
              d="m55 56h-9.25"
              opacity=".2"
              stroke="#515570"
              strokeWidth={2}
            />
            <path
              d="m82 56h-9.25"
              opacity=".2"
              stroke="#515570"
              strokeWidth={2}
            />
          </g>
          <path
            d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"
            fill="#f85565"
            opacity=".4"
          />
          <path
            d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z"
            fill="#f85565"
          />
        </svg>
      </div>
      <div className="card__title">Cameron Williamson</div>
      <div className="card__subtitle pb-5">Income</div>
      {/* <div className="text-5xl font-bold my-4">{yieldAmount.toFixed(2)} {" "} WLD</div> */}
      {/* Claim button */}
      <button
        onClick={handleClaim}
        className="w-[325px] bg-black text-white py-2 rounded-lg h-[50px]"
      >
        Claim
      </button>
      <MobileNavbar />
    </div>
  );
};
export default Card;
