"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "../Image/Image";
import { CART, CROSS, HAMBURGER, LOGO, SEARCH } from "../../../constants/icons";
import { NAVIGATION_LINKS } from "../../../constants/constants";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        hasScrolled ? "shadow-xl shadow-gray-500/50" : ""
      } fixed z-50 flex flex-row items-center justify-between bg-defaultTheme lexend-deca-bold w-full py-8 px-4 transition-shadow duration-300 ease-in-out`}
    >
      <Link href={"/"}>
        <Image imageObject={LOGO} className={"w-auto h-8"} />
      </Link>
      <div
        className={`
         hidden lg:flex flex-col lg:flex-row w-full lg:w-auto items-center`}
      >
        {NAVIGATION_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-white mr-16 text-[16px]"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center justify-end">
        <Image className={"w-6 h-auto mr-4"} imageObject={CART} />
        <Image className={"w-6 h-auto mr-4"} imageObject={SEARCH} />
        <Image
          className={"w-6 h-auto block lg:hidden cursor-pointer"}
          imageObject={HAMBURGER}
          clickHandler={() => {
            setMenuClicked(!menuClicked);
          }}
        />
      </div>
      <div
        className={`${
          menuClicked ? "flex" : "hidden"
        } bg-defaultTheme h-screen w-full absolute top-0 left-0 flex-col items-center   z-40`}
      >
        <div className="w-full flex flex-row items-center justify-end pr-4  my-4 mt-10">
          <Image
            className={"w-6 h-auto block   cursor-pointer"}
            imageObject={CROSS}
            clickHandler={() => {
              setMenuClicked(!menuClicked);
            }}
          />
        </div>
        {NAVIGATION_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`text-white text-[16px] w-full mt-12 text-center transform opacity-0 ${
              menuClicked ? "animate-slide-in" : ""
            }`}
            style={{ animationDelay: `0.${index + 1}s` }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
