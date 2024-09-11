import Image from "next/image";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/HeroSection/Hero";
import AboutSection from "./component/AboutSection/AboutSection";
import ServicesSection from "./component/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
