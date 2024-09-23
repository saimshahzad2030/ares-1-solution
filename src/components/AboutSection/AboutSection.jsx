"use client";
import React from "react";
import Image from "../Image/Image";
import {
  ABOUT_IMG_1,
  ABOUT_IMG_2,
  ABOUT_IMG_3,
  HOME_ABOUT_US_BG,
} from "../../../constants/images";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
const AboutSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-defaultTheme relative lexend-deca-normal flex flex-col md:flex-row items-center w-full my-8 md:my-24 md:px-4 lg:px-24 overflow-hidden"
    >
      <div className="relative w-11/12 sm:w-10/12 md:w-6/12 flex flex-row items-center justify-center h-auto md:h-[460px] lg:h-[560px] text-white ">
        <div className="z-50 w-[152px] h-[152px] bg-white dark:bg-defaultTheme absolute rounded-full  flex flex-col items-center justify-center">
          <div className="w-36 h-36 bg-gradient-to-tr from-darkTheme to-lightTheme rounded-full left-[36%] flex flex-col items-center justify-center px-4">
            <h2 className="lexend-deca-bold text-[28px] leading-[32px]">
              <CountUp start={1} end={30} duration={2.75} />+
            </h2>
            <p className="text-center">Years of experience</p>
          </div>
        </div>
        <div className="overflow-x-hidden flex flex-col items-center justify-between h-full w-full md:w-6/12  ">
          <Image
            dataAos="fade-right"
            className="md:h-[220px] lg:h-[270px] md:w-auto w-full h-auto"
            imageObject={ABOUT_IMG_1}
          />
          <Image
            dataAos="fade-right"
            className="md:h-[220px] lg:h-[270px] md:w-auto w-full h-auto mt-4"
            imageObject={ABOUT_IMG_2}
          />
        </div>

        <div className="hidden md:flex flex-row items-center justify-end overflow-hidden">
          <Image
            dataAos="flip-up"
            className="w-11/12 h-auto"
            imageObject={ABOUT_IMG_3}
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="w-11/12 sm:w-10/12 md:w-6/12 flex flex-col items-center md:items-start justify-center h-auto md:h-[560px] px-0 md:px-4 text-[#1f1f1f]"
      >
        <h3 className="text-darkTheme dark:text-lightTheme mt-14 md:mt-0 w-full text-center md:text-start">
          About Us
        </h3>
        <h1 className="dark:text-white lexend-deca-bold text-[30px] md:text-[40px] leading-[44px] text-center md:text-start mt-4">
          Provides Best Approach To Security
        </h1>
        <p className="text-lightBlack   text-center md:text-start mt-4 w-full">
          Amet consectetur adipiscing elit adipis eleifend dictum poten mattis
          viverra eget quam lacus enimcing inti porttitor bibenu relit duiteri
          nisl areo nuam lacus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 sm:gap-x-[0.5px] w-full sm:w-11/12 bg-white dark:bg-defaultTheme md:bg-[#b4b4b4] mt-4">
          <div className="flex flex-col items-center w-full   px-2">
            <h2 className="lexend-deca-bold  dark:text-white text-[30px] text-center md:text-start w-full">
              <CountUp start={1} end={18} duration={2.75} />
              K+
            </h2>
            <p className="text-lightBlack    text-center md:text-start w-full">
              Customer Served Globally
            </p>
          </div>

          <div className="flex flex-col items-center w-full   px-2">
            <h2 className="lexend-deca-bold  dark:text-white text-[30px] text-center md:text-start w-full">
              <CountUp start={1} end={250} duration={2.75} />+
            </h2>
            <p className="text-lightBlack    text-center md:text-start w-full">
              Cyber Security Experts
            </p>
          </div>

          <div className="flex flex-col items-center w-full  px-2">
            <h2 className="lexend-deca-bold  dark:text-white text-center text-[30px] md:text-start w-full">
              <CountUp start={1} end={3700} duration={2.75} />+
            </h2>
            <p className="text-lightBlack    text-center md:text-start w-full">
              Cyber Security Projects
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center w-full justify-center md:justify-start mt-8">
          <Button variant="customButton" size="xl">
            Learn More
          </Button>
        </div>
      </div>
      <Image
        className="absolute w-full md:w-3/12 h-auto bottom-0 md:bottom-auto right-0"
        imageObject={HOME_ABOUT_US_BG}
      />
    </div>
  );
};

export default AboutSection;
