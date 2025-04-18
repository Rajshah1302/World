"use client";
import MobileNavbar from "./components/navbar";
import PlayableMap from "./components/map/playable-map";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <PlayableMap />
        <MobileNavbar />
      </div>
    </div>
  );
}
