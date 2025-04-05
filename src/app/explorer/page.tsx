"use client";
import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import MobileNavbar from "../components/navbar";
import img from "@/public/taipeiii.jpg";
import img2 from "@/public/seaside.jpeg";
const projects = [
  {
    id: "1",
    name: "Taipei 101",
    symbol: "TEST",
    summary: "A test property investment opportunity in prime location",
    tokenPrice: 0.0001,
    totalSupply: 1000000000,
    remainingSupply: 99999000,
    image: img,
  },
  {
    id: "2",
    name: "Seaside Villas",
    symbol: "SSVL",
    summary: "Beachfront property development with vacation rental potential",
    tokenPrice: 0.045,
    totalSupply: 200000000,
    remainingSupply: 180000000,
    image: img2,
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
            <h1 className="text-3xl md:text-4xl font-bold">Explore</h1>
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
        <div className="space-y-6 my-22 bg-aliceblue-50">
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
      </div>
      <MobileNavbar />
    </div>
  );
}
