import React from "react";
import BlogsLeftSection from "./BlogsLeftSection";
import BlogsRightSection from "./BlogsRightSection";

export const BlogsMain = () => {
  return (
    <div className="grid grid-cols-6  w-full my-8 md:my-12 px-8 sm:px-12 lg:px-20 gap-x-8 py-16">
      <BlogsLeftSection />
      <BlogsRightSection />
    </div>
  );
};
