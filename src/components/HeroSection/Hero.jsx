"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "../Image/Image";
import { HERO_SVG } from "../../../constants/images";
import { LINE_HORIZONTAL, VIDEO_PLAY } from "../../../constants/icons";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className={`mt-24 lexend-deca-bold relative text-white flex flex-col items-center md:items-start justify-center w-full h-[120vh]  sm:h-[100vh] ${styles.hero}`}
    >
      <div className="flex flex-col items-center md:items-start px-4 w-11/12 md:w-7/12 lg:w-6/12">
        <div className="flex flex-row items-start">
          <Image
            className={"  w-6 h-auto hidden md:block "}
            imageObject={LINE_HORIZONTAL}
          />
          <span className="ml-1 text-[14px]">Best Cyber Security</span>
        </div>
        <h1 className="text-[36px] md:text-[46px] leading-[40px] md:leading-[54px] text-center md:text-start">
          Fast & Effective Solutions with Fortified
        </h1>
        <h3 className="lexend-deca-normal text-[14px] md:text-[18px] mt-3 text-center md:text-start">
          Eiusmod enim tempor incididunt aut labore et dolore magna aliua ruis
          nostrud exercitation ullamco laboris.
        </h3>
        <div className="lexend-deca-normal flex flex-col md:flex-row items-center mt-6">
          <Button variant="customButton" size="lg">
            Get Started
          </Button>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-4 text-[16px]">
            <Image imageObject={VIDEO_PLAY} className={"w-12 h-auto md:mr-2"} />
            <span>Watch Video</span>
          </div>
        </div>
      </div>
      <Image
        className={"absolute w-full h-20 bottom-0"}
        imageObject={HERO_SVG}
      />
    </div>
  );
};

export default Hero;
