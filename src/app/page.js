import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import AboutSection from "./components/AboutSection";
import ConfigSection from "./components/ConfigSection";
import AmenitiesSection from "./components/AmenitiesSection";
import DifferentiationSection from "./components/DifferentiationSection";
import LocationSection from "./components/LocationSection";
import PricingSection from "./components/PricingSection";
import FinalCTASection from "./components/FinaleCTASection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueSection />
      <AboutSection />
      <ConfigSection />
      <DifferentiationSection />
      <AmenitiesSection />
      <LocationSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
    </>
  );
}
