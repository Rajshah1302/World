"use client";

import PaymentButton from "@/app/components/PaymentButton";
import { useState } from "react";

export default function Home() {
  const [stakeAmount, setStakeAmount] = useState("");

  // Data constants
  const tokenPrice = 0.025;
  const remainingSupply = 95000000;

  const topHolders = [
    {
      address: "0x8b34...56de",
      amount: 2500000,
      percentage: "50.00",
    },
    {
      address: "0x4f67...90ab",
      amount: 1500000,
      percentage: "30.00",
    },
    {
      address: "0xad23...ef01",
      amount: 800000,
      percentage: "16.00",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-12 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="bg-white text-emerald-800 text-xs font-bold px-2 py-1 rounded mr-3">
              URBH
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">Urban Heights</h1>
          </div>
          <p className="text-emerald-50 text-lg md:text-xl max-w-2xl">
            Luxury apartment complex in downtown metropolitan area
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4 space-y-8">
        <div className="bg-white rounded-xl  p-6 md:p-8 hover: transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">
            About This Project
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Urban Heights represents a stake in a luxury apartment complex
            located in the heart of the city. This development features premium
            amenities and is positioned for strong rental yields.
          </p>
        </div>

        <div className="bg-white rounded-xl  p-6 md:p-8 hover: transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-800">Top Holders</h2>
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-800 flex items-center text-sm font-medium transition-colors duration-200"
            >
              View All <span className="ml-1">→</span>
            </a>
          </div>

          <ul className="divide-y divide-gray-100">
            {topHolders.map((holder, index) => (
              <li
                key={holder.address}
                className="py-4 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="font-mono text-sm md:text-base text-gray-700">
                    {holder.address}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {holder.amount.toLocaleString()}
                  </div>
                  <div className="text-sm text-emerald-600">
                    {holder.percentage}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl  p-6 md:p-8 hover: transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">
            Stake Funds
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="text-gray-600">Token Price</div>
            <div className="text-right font-bold">{tokenPrice}WLD</div>

            <div className="text-gray-600">Remaining Supply</div>
            <div className="text-right font-bold">
              {remainingSupply.toLocaleString()}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-medium"
              htmlFor="stakeAmount"
            >
              Amount to Stake (USD)
            </label>
            <input
              id="stakeAmount"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              placeholder="Enter amount"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
            />
          </div>

          <PaymentButton>Stake Funds</PaymentButton>

          <p className="text-xs text-gray-500 text-center">
            By staking, you agree to the terms and conditions of this platform.
          </p>
        </div>
      </main>
    </div>
  );
}
