import { PropertyForm } from "@/components/ListingForm";
import { Orbitron } from "next/font/google";
import MobileNavbar from "../components/navbar";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400", // adjust as needed
});

export default function List() {
  return (
    <main
      className={`${orbitron.className} flex min-h-screen flex-col items-center justify-center p-8 bg-white text-black`}
    >
      <div className=" max-w-3xl w-full text-sm">
        <h1 className="text-4xl font-bold text-center mb-8 ">List a Property</h1>
        <PropertyForm />
      </div>
      <MobileNavbar/>
    </main>
  );
}
