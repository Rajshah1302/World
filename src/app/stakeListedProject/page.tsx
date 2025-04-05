"use client";
import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import MobileNavbar from "../components/navbar";

const projects = [
  {
    id: "2",
    name: "Urban Heights",
    symbol: "URBH",
    summary: "Luxury apartment complex in downtown metropolitan area",
    tokenPrice: 0.025,
    totalSupply: 500000000,
    remainingSupply: 450000000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.85,
    host: "BlockEstate",
    duration: "7 nights · 24-31 Jul",
    isFavorite: false,
  },
  {
    id: "3",
    name: "Green Valley Estate",
    symbol: "GVE",
    summary: "Eco-friendly residential development with sustainable features",
    tokenPrice: 0.018,
    totalSupply: 750000000,
    remainingSupply: 700000000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.78,
    host: "GreenInvest",
    duration: "4 nights · 5-9 Aug",
    isFavorite: true,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    (project.name + project.symbol)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-zinc-100 text-black py-12 px-4 fixed w-full top-0 left-0 z-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center ">
            <h1 className="text-3xl md:text-4xl font-bold">Invest</h1>
          </div>
        </div>
      </header>
      <div className="mt-58 px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Search Bar */}
        <div className="mb-6 fixed top-32 left-0 right-0 z-10 bg-white p-4 shadow-md rounded-2xl">
          <input
            type="text"
            placeholder="Search by name or symbol..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filtered Projects */}
        <div className="space-y-6 mt-4">
          {filteredProjects.map((project) => (
            <Link
              href={`/stakeListedProject/${project.id}`}
              key={project.id}
              className="block"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}
