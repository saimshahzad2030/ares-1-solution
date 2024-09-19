"use client";
import React from "react";
import BlogsLeftSection from "./BlogsLeftSection";
import BlogsRightSection from "./BlogsRightSection";

import { useSearchParams } from "next/navigation";
export const BlogsMain = () => {
  const searchParams = useSearchParams(); // Access search parameters from the URL
  const query = searchParams.get("query"); // Get the 'query' parameter from the URL

  console.log(query); // Now this will log the query parameter

  return (
    <div className="grid grid-cols-6  w-full my-8 md:my-12 px-8 sm:px-12 lg:px-20 gap-x-8 py-16">
      <BlogsLeftSection query={query ? query : null}  />
      <BlogsRightSection query={query ? query : null} />
    </div>
  );
};
