'use client'

import { useState } from "react";
import PaymentButton from "../../components/PaymentButton";
export default function ProjectDetails() {


  // In a real app, you'd fetch project details by "id" here.
  // Below is just example data:
  const project = {
    name: "Taipei 101",
    symbol: "WLD",
    summary: "A test property investment opportunity in prime location",
    monthlyRent: 1,
    location: "123 Blockchain Avenue, Crypto City, CC 12345",
    size: "1,200 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "24/7 Security",
      "Parking Space",
      "Pet Friendly",
    ],
    isFullyFunded: true,
    // Details Tab Data
    about:
      "This property token ownership in a premium real estate development located in a high-growth area. Investors can benefit from both property value appreciation and rental income distribution.",
    tokenPrice: 0.015,
    totalSupply: 1000000000,
    applicationSupply: 900000000,
    merchantSupply: 100000000,
    topHolders: [
      { address: "0xf2a3...45cd", amount: 100000 },
      { address: "0xb5a2...88fa", amount: 70000 },
      { address: "0xd7ac...9eb1", amount: 50000 },
    ],
  };

  // State for active tab: "rent" or "details"
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <div className="max-w-md mx-auto p-4 md:max-w-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold">{project.name}</h1>
          <span className="text-xs text-gray-500">{project.symbol}</span>
        </div>
        {project.isFullyFunded && (
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            Fully Funded
          </span>
        )}
      </div>

      <p className="text-gray-500 text-sm mb-6">{project.summary}</p>

      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center mb-6">
        {/* Replace this with an <Image> component if you have an actual image */}
        <span className="text-gray-400">[Property Image Placeholder]</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab("rent")}
          className={`px-4 py-2 font-medium transition ${
            activeTab === "rent"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`px-4 py-2 font-medium transition ${
            activeTab === "details"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Details
        </button>
      </div>

      {/* Content for Rent / Details */}
      {activeTab === "rent" && (
        <div>
          {/* Rent Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Monthly Rent</h2>
            <p className="text-2xl font-bold text-blue-600">
              {project.monthlyRent}WLD
            </p>
          </div>

          {/* Property Details */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Location</span>
              <span className="font-medium text-right">{project.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Size</span>
              <span className="font-medium">{project.size}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Bedrooms</span>
              <span className="font-medium">{project.bedrooms}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Bathrooms</span>
              <span className="font-medium">{project.bathrooms}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {project.amenities.map((amenity, idx) => (
                <li
                  key={idx}
                  className="bg-gray-100 rounded px-2 py-1 text-gray-600"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <PaymentButton>
            Proceed with Rental
          </PaymentButton>

          {/* Funding Status */}
          {project.isFullyFunded && (
            <div className="mt-6 p-4 rounded-md bg-green-50 border border-green-100 text-green-700 text-center">
              <p className="font-semibold">Funding Complete</p>
              <p className="text-sm">
                All tokens have been distributed. You can now rent this property
                or learn more about it.
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === "details" && (
        <div className="space-y-6">
          {/* About This Project */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About This Project</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.about}
            </p>
          </div>

          {/* Token Distribution */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Token Distribution</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span>Token Price</span>
                <span className="font-medium">
                  ${project.tokenPrice.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Supply</span>
                <span className="font-medium">
                  {project.totalSupply.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Application Supply</span>
                <span className="font-medium">
                  {project.applicationSupply.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Merchant Supply</span>
                <span className="font-medium">
                  {project.merchantSupply.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Top Holders */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Top Holders</h2>
            <ul className="space-y-1 text-sm">
              {project.topHolders.map((holder, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>
                    {idx + 1}. {holder.address}
                  </span>
                  <span>{holder.amount.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
