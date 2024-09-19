"use client";
import React from "react";
import { NOT_FOUND } from "../../../constants/icons";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  const homeClickHandler = () => {
    router.push("/");
  };
  const goBackClickHandler = () => {
    router.back();
  };
  return (
    <div className="flex flex-col items-center px-8 w-full pt-24 pb-20 bg-white">
      <img
        className="w-7/12 sm:w-3/12 h-auto"
        src={NOT_FOUND.image}
        alt={NOT_FOUND.name}
      />
      <h1 className="lato-700 text-[18px] sm:text[18px] md:text-[22px]">
        404, Page not founds
      </h1>
      <p className=" text-[16px] sm:text[14px] md:text-[16px] text-center mt-2">
        Something went wrong. It's look that your requested could not be found.
        It's look like the link is broken or the page is removed.
      </p>
      <div className="w-full sm:w-6/12 flex flex-row items-center justify-center mt-4">
        <button
          className="mt-2 button bg-defaultTheme text-white border border-defaultTheme hover:border-defaultTheme hover:bg-white hover:text-defaultTheme transition-all duration-300 px-2 p-1 sm:p-2 rounded-md mr-2"
          onClick={() => goBackClickHandler()}
        >
          Go Back
        </button>
        <button
          className="mt-2 button bg-white text-defaultTheme border border-defaultTheme hover:border-white hover:bg-defaultTheme hover:text-white transition-all duration-300 px-2 p-1 sm:p-2 rounded-md ml-2"
          onClick={() => homeClickHandler()}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
