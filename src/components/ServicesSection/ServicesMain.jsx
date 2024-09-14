"use client";
import React from "react";
import { SERVICES } from "../../../constants/constants";
import Image from "../Image/Image";
import Link from "next/link";

const ServicesMain = () => {
  return (
    <div className="lexend-deca-light flex flex-col items-center w-full justify-center py-16 md:py-28 px-4   lg:px-20 ">
      <h1 className="text-darkTheme dark:text-lightTheme mt-14 md:mt-0  text-center  w-full">
        Our Services
      </h1>
      <h2 className="w-11/12 sm:w-9/12  text-darkBlack dark:text-white lexend-deca-bold text-[30px] md:text-[40px] leading-[44px] text-center mt-4">
        Protect Your Business With Our Unique Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-8 gap-y-16 mt-8">
        {SERVICES.map((service, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="relative flex flex-col items-center w-full h-[220px] overflow-hidden group">
              <Image
                imageObject={{ name: service.name, src: service.bgImage }}
                className={
                  "w-full h-[220px] bg-contain group-hover:scale-110 duration-500 transition-all z-1"
                }
              />
              <div className="absolute w-full h-[220px] hidden group-hover:block bg-black bg-opacity-40  z-2"></div>
            </div>
            <div className="text-white flex flex-col items-center w-full relative pt-[65px]">
              <div className="absolute flex flex-col items-center justify-center h-[100px] w-[100px] bg-gradient-to-tr from-darkTheme to-lightTheme rounded-full transition-transform duration-200 z-3 top-[-50px]">
                <Image imageObject={service.image} className={"w-8 h-auto"} />
              </div>
              <h1 className="text-darkBlack darkk:text-white lexend-deca-bold text-[18px]">
                {service.name}
              </h1>
              <p className=" text-lightBlack text-center mt-2 w-10/12 max-h-[70px] line-clamp-3">
                {service.description}
              </p>
              <Link
                href={service.url}
                className="flex flex-row items-center mt-4 text-defaultTheme dark:text-lightTheme hover:text-lightTheme  dark:hover:text-white"
              >
                {`Readmore `}&nbsp;{">"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMain;
