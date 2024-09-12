"use client";
import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "../../../../constants/constants";
import Image from "../Image/Image";
import { STAR } from "../../../../constants/icons";
import { HOME_ABOUT_US_BG } from "../../../../constants/images";

const Testimonials = () => {
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
    <div className="relative flex flex-col items-center w-full py-8 md:py-24 px-4 lg:px-20 overflow-hidden">
      {/* Optional background image */}
      {/* <Image
        className="hidden md:absolute w-full md:w-3/12 h-auto bottom-0 left-0"
        imageObject={HOME_ABOUT_US_BG}
      /> */}

      <h1 className="text-darkTheme text-center">Testimonials</h1>
      <h2 className="text-darkBlack lexend-deca-bold text-[30px] sm:text-[40px] text-center">
        What Our Clients are Saying
      </h2>

      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="flex gap-4">
            {TESTIMONIALS.map((test, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 w-full md:basis-1/2"
              >
                <div className="bg-white group lexend-deca-light flex flex-col items-start p-2 md:p-8 transition-colors duration-300">
                  <div className="flex flex-row items-center w-full">
                    {Array.from({ length: test.rating }, (_, index) => (
                      <Image
                        key={index}
                        className="w-4 h-auto mr-2"
                        imageObject={STAR}
                      />
                    ))}
                  </div>

                  <p className="mt-4 w-full">{test.review}</p>
                  <div className="relative flex flex-row items-center mt-8 w-full">
                    <Image
                      className="w-12 h-12 object-cover"
                      imageObject={{ src: test.imageUrl, name: "" }}
                    />
                    <div className="flex flex-col items-start ml-4">
                      <h2 className="lexend-deca-bold text-darkBlack">
                        {test.name}
                      </h2>
                      <h4 className="lexend-deca-light text-lightBlack text-[13px]">
                        {test.designation}
                      </h4>
                    </div>
                    <Image
                      className="absolute right-0 w-12 h-auto"
                      imageObject={{ src: test.quoteImageUrl, name: "" }}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <p className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </p>
    </div>
  );
};

export default Testimonials;
