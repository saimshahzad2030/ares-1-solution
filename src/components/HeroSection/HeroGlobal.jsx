"use client";
import React from "react";
import { ABOUT_US_PAGE_BANNER } from "../../../constants/images";
import Image from "../Image/Image";
import { ArrowRightIcon } from "../NewsAndArticles/NewsAndArticles";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { searchBlogs } from "../../../constants/constants";

const HeroGlobal = ({ urlName, url, heading, text }) => {
  const searchParams = useSearchParams(); // Access search parameters from the URL
  const query = searchParams.get("query"); // Get the 'query' parameter from the URL
  console.log(query);
  let searchBlogs1;
  if (query) {
    searchBlogs1 = searchBlogs(query);
  }
  console.log(searchBlogs1);
  return (
    <div
      className="text-white w-full mt-20 h-[100vh] flex flex-col items-center justify-center  lexend-deca-light"
      style={{
        backgroundImage: `url(${ABOUT_US_PAGE_BANNER.src})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center lexend-deca-bold text-[36px] md:text-[40px] lg:text-[54px]">
        {query
          ? searchBlogs1.length > 0
            ? ` ${query} `
            : ` ${query} `
          : heading}
      </h1>
      <h3 className=" lexend-deca-normal w-11/12 md:w-6/12 text-center text-[18px] ">
        {query
          ? searchBlogs1.length > 0
            ? `results found for  ${query} `
            : `No results found for  ${query} `
          : text}
      </h3>
      <div className="lexend-deca-bold flex flex-row items-center p-4 px-12 border border-lightTheme mt-6">
        <Link href={"/"} className="hover:text-lightTheme mr-2">
          Home
        </Link>
        <ArrowRightIcon className="w-4 h-auto  fill-current " />

        <Link href={url} className="ml-2 text-lightTheme">
          {query
            ? searchBlogs1.length > 0
              ? ` ${query} `
              : `  ${query} `
            : urlName}
        </Link>
      </div>
    </div>
  );
};

export default HeroGlobal;
