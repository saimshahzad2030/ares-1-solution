"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BLOGS } from "../../../constants/constants";
import Link from "next/link";

const BlogsRightSection = ({ query }) => {
  return (
    <div className="lexend-deca-normal text-darkBlack dark:text-white col-span-6 lg:col-span-2 w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-start border border-lightBlack    p-8 rounded-lg">
        <h2 className="lexend-deca-bold dark:text-white">Search</h2>
        <div className="w-full flex flex-row mt-2">
          <div className="w-2/12 h-[1px] bg-darkBlack dark:bg-white "></div>
          <div className="w-10/12 h-[1px] bg-lightBlack "></div>
        </div>
        <div className=" flex flex-row items-center w-full mt-4">
          <Input
            onChange={(e) => {
              console.log(e.target.value);
            }}
            placeholder="Type here..."
            className="text-lightBlack dark:border-lightBlack"
          />
          <button className="text-[14px] lexend-deca-bold flex flex-col items-center justify-center px-4 h-14 border border-lightBlack border-l-0 dark:text-white hover:dark:bg-white hover:dark:text-darkBlack transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
      <div className="w-full mt-8 flex flex-col items-start border border-lightBlack    p-8 rounded-lg">
        <h2 className="lexend-deca-bold dark:text-white ">Recent Posts</h2>
        <div className="w-full flex flex-row mt-2 mb-4">
          <div className="w-2/12 h-[1px] bg-darkBlack dark:bg-white "></div>
          <div className="w-10/12 h-[1px] bg-lightBlack "></div>
        </div>
        {BLOGS.map((blog, index) => (
          <div
            key={index}
            className={` flex flex-col items-start ${
              index !== BLOGS.length - 1 ? "py-3" : "pt-3 pb-0"
            }    border ${
              index == BLOGS.length - 1 && "border-b-0"
            } border-lightBlack border-t-0 border-r-0 border-l-0 border-dashed `}
          >
            <Link
              href={`/blogs?query=${blog.title}`}
              className="text-4 hover:text-darkTheme hover:dark:text-lightTheme"
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsRightSection;
