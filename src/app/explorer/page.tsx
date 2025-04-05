'use client'
import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import MobileNavbar from "../components/navbar";

const projects = [
  {
    id: "1",
    name: "Test Token",
    symbol: "TEST",
    summary: "A test property investment opportunity in prime location",
    tokenPrice: 0.015,
    totalSupply: 1000000000,
    remainingSupply: 99999000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.92,
    host: "Dotinn",
    duration: "5 nights · 18-23 Jun",
    isFavorite: true,
  },
  {
    id: "5",
    name: "Seaside Villas",
    symbol: "SSVL",
    summary: "Beachfront property development with vacation rental potential",
    tokenPrice: 0.045,
    totalSupply: 200000000,
    remainingSupply: 180000000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.95,
    host: "OceanView",
    duration: "3 nights · 20-23 Oct",
    isFavorite: true,
  },
  {
    id: "6",
    name: "Industrial Park",
    symbol: "INDP",
    summary: "Industrial zone development with long-term lease agreements",
    tokenPrice: 0.022,
    totalSupply: 600000000,
    remainingSupply: 580000000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.82,
    host: "IndustrialChain",
    duration: "5 nights · 15-20 Nov",
    isFavorite: false,
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
    <div className="px-4 py-4">
      {/* Search Bar */}
      <div className="mb-6 fixed top-0 left-0 right-0 z-10 bg-white p-4 shadow-md rounded-2xl">
        <input
          type="text"
          placeholder="Search by name or symbol..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtered Projects */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      <MobileNavbar />
    </div>
  );
}
