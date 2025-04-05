"use client";

export function ProjectCard({ project }) {
  return (
    <div className="flex items-center justify-between border border-black-500 rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center">
        {/* Title and symbol */}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
          <p className="text-sm text-gray-500">{project.symbol}</p>
        </div>
      </div>
      {/* Invest button */}
      <button className="px-4 py-2 bg-black-500 text-black rounded-md shadow ">
        Invest
      </button>
    </div>
  );
}
