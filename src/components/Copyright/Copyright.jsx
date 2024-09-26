"use client";
import React from "react";

const Copyright = () => {
  return (
    <div
      // data-aos="fade-up"
      className="text-[12px] lexend-deca-light  w-full flex flex-row items-center justify-center border border-b-0 border-r-0 border-l-0 border-t-[0.5px] border-t-[#221f47] bg-defaultTheme py-6 px-4 text-lightBlack"
    >
      Copyright © Fortified {new Date().getFullYear()}. All Rights Reserved.
    </div>
  );
};

export default Copyright;
