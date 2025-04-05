import { PropertyForm } from "@/components/ListingForm";
import { Orbitron } from "next/font/google";
import MobileNavbar from "../components/navbar";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400", // adjust as needed
});

export default function List() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-zinc-100 text-black py-12 px-4 fixed w-full top-0 left-0 z-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              List Your Property <br />
              <span className="block text-center">On-Chain</span>
            </h1>
          </div>
        </div>
      </header>
      <div className="mt-48 px-4 md:px-8 lg:px-16 xl:px-24">
        <PropertyForm />
      </div>
      <MobileNavbar />
    </div>
  );
}
