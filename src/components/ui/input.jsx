import * as React from "react";

import { cn } from "@/lib/utils";
const variants = {
  default: "  border-gray-200 bg-white text-lightBlack focus:border-lightTheme",
  primary: "border-blue-500 bg-blue-50 text-blue-900",
  secondary: "border-green-500 bg-green-50 text-green-900",
  custom: " border-r-0  focus-visible:ring-0 focus:border-r-0 ",
};
const Input = React.forwardRef(
  ({ className, variant = "custom", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none   focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant], // Apply the variant styles
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
