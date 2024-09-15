"use client";
import React from "react";
import { ABOUT_US_PAGE_RELIABLE_BG } from "../../../constants/images";
import { STATISTICS } from "../../../constants/constants";
import Image from "../Image/Image";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ABOUT_US_PAGE_RELIABLE_BG.src})`,
        backgroundSize: "cover",
      }}
      className="dark:bg-defaultTheme lexend-deca-normal grid grid-cols-1 lg:grid-cols-2 gap-4 py-16 md:py-28 px-4   lg:px-20 overflow-x-autox-hidden"
    >
      <div className="flex flex-col items-start w-full justify-center">
        <h1 className="text-darkTheme dark:text-lightTheme mt-14 md:mt-0 w-full text-center md:text-start">
          Reliable IT & Cyber Security
        </h1>
        <h2 className="dark:text-white lexend-deca-bold text-[30px] md:text-[40px] leading-[44px] text-center md:text-start mt-4">
          24/7 Cybersecurity Operation Centers
        </h2>
        <p className="text-lightBlack   text-center md:text-start mt-4 w-full">
          Tempore, aute irure dolor in reprehenderit in voluptate velit esse
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidata non
          proident, sunt in culpa aui officia.
        </p>
        <p className="text-lightBlack   text-center md:text-start mt-6 w-full">
          Soluta nobis est eligendi optio cumque nihil impedit quo minus id ruod
          maxime placeat facere possimus.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {STATISTICS.map((stats, index) => (
          <div
            key={index}
            className="w-full flex flex-row items-center justify-center bg-gray-300 dark:bg-slate-700 bg-opacity-40 md:bg-opacity-20 py-12 md:py-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="rounded-full flex flex-col items-center justify-center bg-gradient-to-tr from-darkTheme to-lightTheme w-[100px] sm:w-[70px] h-[100px] sm:h-[70px] mr-4">
              <Image
                imageObject={{ src: stats.image, name: stats.name }}
                className={"w-[50px] sm:w-[30px] h-auto"}
              />
            </div>
            <div className="flex flex-col items-start text-darkBlack dark:text-white">
              <div className="flex flex-row items-center lexend-deca-bold text-[36px] sm:text-[30px] leading-[32px]">
                <CountUp start={1} end={stats.value} d />
                {stats.unit}
              </div>
              <h4 className=" lexend-deca-light text-lightBlack dark:text-gray-400 text-[16px]  sm:text-[14px]">
                {stats.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
