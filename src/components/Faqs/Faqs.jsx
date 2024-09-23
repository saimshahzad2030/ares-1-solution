"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "../../../constants/constants";

const Faqs = () => {
  return (
    <div
      data-aos="fade-up"
      className="lexend-deca-light flex flex-col items-center w-full justify-center py-16 md:py-28 px-4   lg:px-20 "
    >
      <h1 className="text-darkTheme dark:text-lightTheme mt-14 md:mt-0  text-center  w-full">
        Faq's
      </h1>
      <h2 className="text-darkBlack dark:text-white lexend-deca-bold text-[30px] md:text-[40px] leading-[44px] text-center md:text-start mt-4">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-8 gay-y-4 mt-12"
      >
        {FAQS.map((faq, index) => (
          <AccordionItem
            data-aos="fade-down"
            value={`item-${index + 1}`}
            key={index}
          >
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
