import React from "react";
import HeroGlobal from "@/components/HeroSection/HeroGlobal";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import { BlogsMain } from "@/components/Blogs/BlogsMain";
import ContactMain from "@/components/Contact/ContactMain";

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
      <Navbar />
      <HeroGlobal
        url={"/contact-us"}
        heading={"Contact Us"}
        urlName={"Contact"}
        text={
          "Giusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris."
        }
      />
      <ContactMain />
      <Footer />
      <Copyright />
    </div>
  );
};

export default ContactPage;
