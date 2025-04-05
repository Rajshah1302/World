import Link from "next/link";
import { ProjectCard } from "@/components/project-card";

// Sample project data
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
  {
    id: "4",
    name: "Commercial Plaza",
    symbol: "CPLZ",
    summary: "High-yield commercial property in business district",
    tokenPrice: 0.035,
    totalSupply: 300000000,
    remainingSupply: 250000000,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.91,
    host: "CommercialDAO",
    duration: "6 nights · 12-18 Sep",
    isFavorite: false,
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
  return (
    <div className="px-4 py-4">
      <h1 className="text-xl font-bold mb-1">Property Token Explorer</h1>
      <p className="text-gray-500 text-sm mb-4">
        Discover blockchain-based property investments
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
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
  );
}
