"use client";

import PaymentButton from "../../components/PaymentButton";
import MobileNavbar from "../../components/navbar";

export default function ProjectDetails() {
  // Example project data
  const project = {
    name: "Taipei 101",
    symbol: "WLD",
    about:
      "This property represents token ownership in a premium real estate development located in a high-growth area. Investors can benefit from both property value appreciation and rental income distribution.",
    monthlyRent: 1,
    isFullyFunded: true,
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-zinc-100 text-black py-12 px-4 fixed w-full top-0 left-0 z-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="bg-white text-black-800 text-xs font-bold px-2 py-1 rounded mr-3">
              {project.symbol}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4 space-y-8 mt-32 mb-10 ">
        <div className="bg-white rounded-xl  p-4 md:p-8 hover: transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">
            About This Property
          </h2>
          <p className="text-gray-600 leading-relaxed">{project.about}</p>
        </div>

        <div className="bg-white rounded-xl  p-4 md:p-8 hover: transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-black mb-6">Rent Property</h2>

          <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="text-gray-600">Token Price</div>
            <div className="text-right font-bold">{project.monthlyRent}WLD</div>
          </div>

          
          <div className="justify-between items-center mb-6">

          <PaymentButton>Rent</PaymentButton>
          </div>
        </div>
      </main>
      <MobileNavbar />
    </div>
  );
}
