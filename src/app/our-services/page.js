import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroGlobal from "@/components/HeroSection/HeroGlobal";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import HomeVideoSection from "@/components/HomeVideoSection/HomeVideoSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Faqs from "@/components/Faqs/Faqs";
import ServicesMain from "@/components/ServicesSection/ServicesMain";
const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
      <Navbar />
      <HeroGlobal
        url={"/our-services"}
        heading={"Our Services"}
        urlName={"Services"}
        text={
          "Giusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris."
        }
      />
      <ServicesMain />
      <WhyChooseUs />
      <HomeVideoSection />
      <Faqs />
      <Footer />
      <Copyright />
    </div>
  );
};

export default ServicesPage;
