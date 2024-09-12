"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "./Portfolio.module.css";
import { CASE_STUDIES } from "../../../../constants/constants";
import Image from "../Image/Image";
import { GO_TO } from "../../../../constants/icons";
import Link from "next/link";
const Portfolio = () => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="lexend-deca-normal flex flex-col items-center w-full my-8 md:my-20 px-4 lg:px-20">
      <h1 className="text-darkTheme">Portfolio</h1>
      <h2 className="text-darkBlack lexend-deca-bold text-[30px] sm:text-[40px] text-center">
        Our Latest Case Studies
      </h2>
      <div className="w-full mt-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {CASE_STUDIES.map((cs, index) => (
              <CarouselItem className={`sm:basis-2/4 lg:basis-1/3`} key={index}>
                <div
                  style={{
                    backgroundImage: `url(${cs.image.src})`,
                    backgroundSize: "cover",
                  }}
                  className={`group relative lexend-deca-light text-white flex flex-col items-start justify-end w-full h-[400px] p-8 transition-colors duration-300`}
                >
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 group-hover:bg-gradient-to-t from-darkTheme to-lightTheme opacity-50 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <span className="relative group-hover:bg-opacity-100 mb-4 bg-gray-200 p-1 px-3 bg-opacity-20 text-[12px] group-hover:text-darkBlack  transition-colors duration-300">
                    {cs.type}
                  </span>
                  <h2 className="relative mb-4 lexend-deca-bold text-[18px] sm:min-h-[100px]">
                    {cs.text}
                  </h2>
                  <Link href={"/"} className="relative">
                    <Image imageObject={GO_TO} className={"w-12 h-auto"} />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
