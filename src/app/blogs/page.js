import React from "react";
import HeroGlobal from "@/components/HeroSection/HeroGlobal";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import { BlogsMain } from "@/components/Blogs/BlogsMain";
import { Suspense } from "react";

const BlogsPage = () => {
  return (
    <div className="bg-white dark:bg-defaultTheme flex flex-col items-center ">
      <Navbar />
      <Suspense>
        <HeroGlobal
          url={"/blogs"}
          heading={"Blogs"}
          urlName={"Blogs"}
          text={
            "Giusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris."
          }
        />
        <BlogsMain />
      </Suspense>
      <Footer />
      <Copyright />
    </div>
  );
};

export default BlogsPage;
