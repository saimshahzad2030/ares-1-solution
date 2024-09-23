"use client";
import React from "react";
import {
  ABOUT_US_PAGE_RELIABLE_BG,
  ABOUT_US_PAGE_RELIABLE_IMAGE,
} from "../../../constants/images";
import Image from "../Image/Image";
import CountUp from "react-countup";

const ReliableSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ABOUT_US_PAGE_RELIABLE_BG.src})`,
        backgroundSize: "cover",
      }}
      data-aos="fade-up"
      className="w-full lexend-deca-light grid grid-cols-1 lg:grid-cols-2  px-4 lg:px-12 bg-defaultTheme py-24"
    >
      <div
        data-aos="fade-right"
        className="transition-transform duration-300 ease-in-out hover:-translate-y-3"
      >
        <Image
          className="w-full bg-cover cursor-pointer"
          imageObject={ABOUT_US_PAGE_RELIABLE_IMAGE}
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col items-start w-full justify-center"
      >
        <h1 className="text-lightTheme mt-14 md:mt-0 w-full text-center md:text-start">
          Reliable IT & Cyber Security
        </h1>
        <h2
          className="
        text-white lexend-deca-bold text-[30px] md:text-[40px] leading-[44px] text-center md:text-start mt-4"
        >
          Best Cyber Security Services With Us
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
        <div className="text-center flex flex-col sm:flex-row items-center justify-between w-full mt-8 text-white lexend-deca-bold">
          <div className="flex flex-col items-center w-full sm:w-4/12">
            <div className="mt-8 sm:mt-0 text-[28px] mb-4 w-[120px] h-[120px]  rounded-full  border-[4px] border-lightTheme flex flex-row items-center justify-center ">
              <CountUp start={1} end={85} duration={2.75} />%
            </div>
            <h2>Quality Service</h2>
          </div>
          <div className="flex flex-col items-center w-full sm:w-4/12">
            {" "}
            <div className="mt-8 sm:mt-0 text-[28px] mb-4 w-[120px] h-[120px]  rounded-full  border-[4px] border-lightTheme flex flex-row items-center justify-center ">
              <CountUp start={1} end={78} duration={2.75} />%
            </div>
            <h2>Quality Service</h2>
          </div>
          <div className="flex flex-col items-center w-full sm:w-4/12">
            <div className="mt-8 sm:mt-0 text-[28px] mb-4 w-[120px] h-[120px]  rounded-full  border-[4px] border-lightTheme flex flex-row items-center justify-center ">
              <CountUp start={1} end={64} duration={2.75} />%
            </div>
            <h2>Quality Service</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReliableSection;
