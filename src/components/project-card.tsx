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
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <Heart
              className={`w-5 h-5 ${
                project.isFavorite
                  ? "fill-rose-500 text-rose-500"
                  : "text-gray-600"
              }`}
            />
          </button>
          {project.isFavorite && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 flex items-center gap-1.5">
              <span className="text-amber-400 text-sm">🏆</span>
              <span className="text-sm font-medium">Guest favourite</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-3">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-medium text-base">{project.name}</h2>
            <p className="text-gray-600 text-sm">Hosted by {project.host}</p>
            <p className="text-gray-600 text-sm">{project.duration}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">{project.rating}</span>
          </div>
        </div>

        <div className="mt-1">
          <p className="font-semibold text-base mt-2">
            ${(project.tokenPrice * 10000).toFixed(2)}{" "}
            <span className="text-gray-600 font-normal">
              total before taxes
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
