"use client";
import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "../../../constants/constants";
import Image from "../Image/Image";
import { QUOTE, STAR } from "../../../constants/icons";
import {
  ABOUT_US_TESTIMONIALS_INSIDE,
  ABOUT_US_TESTIMONIALS_OUTSIDE,
} from "../../../constants/images";

const TestimonialsAbout = () => {
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
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full py-8 md:py-24 px-4 lg:px-20 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full">
        <Image
          imageObject={ABOUT_US_TESTIMONIALS_INSIDE}
          className={"w-6/12 absolute  h-auto"}
        />
        <Image
          imageObject={ABOUT_US_TESTIMONIALS_OUTSIDE}
          className={"w-10/12 md:absolute h-auto"}
        />
      </div>
      <div className="mt-12 md:mt-0 flex flex-col items-start w-full">
        <h1 className="text-darkTheme md:text-start text-center dark:text-lightTheme w-full">
          Testimonials
        </h1>
        <h2 className="mt-4 text-darkBlack dark:text-white lexend-deca-bold leading-[50px] text-[30px] sm:text-[40px] sm:text-start text-center">
          What Our Clients are Saying
        </h2>

        <div className="mt-4 w-full overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex gap-4">
              {TESTIMONIALS.map((test, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full ">
                  <div className=" group lexend-deca-light flex flex-col items-start   transition-colors duration-300">
                    <p className=" w-full dark:text-white">{test.review}</p>
                    <div className="flex flex-row items-center w-full mt-4">
                      {Array.from({ length: test.rating }, (_, index) => (
                        <Image
                          key={index}
                          className="w-4 h-auto mr-2"
                          imageObject={STAR}
                        />
                      ))}
                    </div>
                    <div className="relative flex flex-row items-center mt-2 w-full">
                      <div className="flex flex-col items-start ">
                        <h2 className="lexend-deca-bold text-darkBlack dark:text-white mt-2">
                          {test.name}
                        </h2>
                        <h4 className="lexend-deca-light text-lightBlack text-[13px] mt-2">
                          {test.designation}
                        </h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <p className="py-2 text-center text-sm  dark:text-white">
          Review {current} of {count}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsAbout;
