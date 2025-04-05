import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface Project {
  id: string;
  name: string;
  symbol: string;
  summary: string;
  tokenPrice: number;
  totalSupply: number;
  remainingSupply: number;
  image: string;
  rating: number;
  host: string;
  duration: string;
  isFavorite: boolean;
}

export function ProjectCard({ project }: { project: Project }) {
  const percentageSold =
    ((project.totalSupply - project.remainingSupply) / project.totalSupply) *
    100;

  return (
    <div className="mb-6">
      <div className="relative rounded-xl overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover"
          />
    
        </div>
      </div>

      <div className="pt-3">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-medium text-base">{project.name}</h2>
          </div>
          
        </div>

        <div className="mt-1">
          <p className="font-semibold text-base mt-2">
            {(project.tokenPrice * 10000).toFixed(2)}{" "}WLD

          </p>
        </div>
      </div>
    </div>
  );
}
