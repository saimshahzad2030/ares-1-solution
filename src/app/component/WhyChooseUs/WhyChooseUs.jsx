import React from "react";
import Image from "../Image/Image";
import { TICK_FILLED } from "../../../../constants/icons";
import { WHY_CHOOSE_US } from "../../../../constants/constants";
import { Button } from "@/components/ui/button";
import { WHY_CHOOSE_US_BG } from "../../../../constants/images";

const WhyChooseUs = () => {
  return (
    <div className="lexend-deca-normal flex flex-col-reverse lg:flex-row items-center gap-4 my-16 md:my-28 px-4   lg:px-20 overflow-x-autox-hidden">
      <div className=" w-full lg:w-3/5 flex flex-col items-start  mt-12 lg:mt-0">
        <h1 className="  text-darkTheme">Why Choose Us</h1>
        <h2 className="lexend-deca-bold mt-6 text-[32px] sm:text-[40px] leading-[32px] sm:leading-[44px] text-darkBlack">
          Expert Support to Enhance Your Cyber Defenses
        </h2>
        <p className="lexend-deca-light mt-4 text-lightBlack ">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore magna aliqua. Quis ipsum suspendisse ultrices gravida risus
          commodo ae maecenas accumsan lacus vel facilisis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-8 gap-y-2 mt-6">
          {WHY_CHOOSE_US.map((whyus, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Image imageObject={TICK_FILLED} className={"w-5 h-auto mr-2"} />
              <p>{whyus}</p>
            </div>
          ))}
        </div>
        <Button variant="customButton" size="xl" className="mt-4">
          Get Started
        </Button>
      </div>
      <div className="  w-full lg:w-2/5 flex flex-col items-center justify-center ">
        <div className="flex w-10/12 sm:w-7/12 lg:w-full flex-col items-center justify-center relative">
          <Image
            className={"z-10 w-full *: h-auto"}
            imageObject={WHY_CHOOSE_US_BG}
          />
          <div className="z-1 absolute w-28 h-28 bg-gradient-to-tr from-darkTheme to-lightTheme rounded-full top-[-10%] right-[-10%]"></div>
          <div className="z-1 absolute w-28 h-28 bg-gradient-to-tr from-darkTheme to-lightTheme rounded-full bottom-[-10%] left-[-10%]"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
