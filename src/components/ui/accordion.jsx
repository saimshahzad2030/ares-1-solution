"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import Image from "../Image/Image";
import { GO_TO } from "../../../constants/icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "text-start flex flex-1 items-center justify-between py-4 text-[18px] text-darkBlack dark:text-white  transition-all ",
          "[&[data-state=open]>div]:rotate-90", // Rotate when accordion is open
          className
        )}
        {...props}
      >
        <p className="w-10/12 sm:w-auto">{children}</p>
        <div className="flex flex-col items-center justify-center h-[40px] w-[40px] bg-gradient-to-tr from-darkTheme to-lightTheme rounded-full transition-transform duration-200">
          <Image imageObject={GO_TO} className={"w-8 h-auto"} />
        </div>
        {/* <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" /> */}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="text-darkBlack dark:text-white overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
