import React from "react";
import { SERVICES } from "../../../../constants/constants";
import Link from "next/link";
import Image from "../Image/Image";
import { GO_TO } from "../../../../constants/icons";

const ServicesSection = () => {
  return (
    <div className=" lexend-deca-normal flex flex-col items-center w-full bg-defaultTheme  py-8 md:py-24  px-4 lg:px-20">
      <h1 className="text-lightTheme">Our Services</h1>
      <h2 className="text-white lexend-deca-bold text-[40px] text-center">
        We Offer Professional Security Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-12">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center w-full  border-[0.5px] border-[#282828] py-12 px-8 text-center text-white hover:bg-gradient-to-tr from-darkTheme to-lightTheme transition-all duration-300"
          >
            <Image imageObject={service.image} className={"w-12 h-auto"} />
            <h1 className="lexend-deca-bold mt-4 text-[18px]">
              {service.name}
            </h1>
            <p className="mt-4 text-[14px] text-[#9c9c9c] group-hover:text-white">
              {service.description}
            </p>
            <Link href={service.url} className="mt-5">
              <Image imageObject={GO_TO} className={"w-12 h-auto"} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
