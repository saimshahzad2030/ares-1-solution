import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import HeroGlobal from "@/components/HeroSection/HeroGlobal";
import Navbar from "@/components/Navbar/Navbar";
import NewsAndArticles from "@/components/NewsAndArticles/NewsAndArticles";
import ReliableSection from "@/components/ReliableSection/ReliableSection";
import Statistics from "@/components/Statistics/Statistics";
import TestimonialsAbout from "@/components/Testimonials/TestimonialsAbout";
import React from "react";

const AboutUspage = () => {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
      <Navbar />
      <HeroGlobal
        url={"/about-us"}
        heading={"About Us"}
        urlName={"About"}
        text={
          "Giusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris."
        }
      />
      <ReliableSection />
      <TestimonialsAbout />
      <Statistics />
      <NewsAndArticles />

      <Footer />
      <Copyright />
    </div>
  );
};

export default AboutUspage;
