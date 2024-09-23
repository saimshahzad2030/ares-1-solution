"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "../Image/Image";
import { CART, CROSS, HAMBURGER, LOGO, SEARCH } from "../../../constants/icons";
import { NAVIGATION_LINKS } from "../../../constants/constants";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { toast } = useToast();
  const [search, setSearch] = React.useState(null);
  const router = useRouter();
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
      <div className="flex flex-col items-start w-2/12">
        <Link href={"/"}>
          <Image imageObject={LOGO} className={"w-auto h-12"} />
        </Link>
      </div>
      <div
        className={`
         hidden lg:flex flex-col lg:flex-row w-full lg:w-auto items-center`}
      >
        {NAVIGATION_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-white mr-8 text-[16px]"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center justify-end">
        {/*<Image className={"w-6 h-auto mr-4"} imageObject={SEARCH} /> */}
        <div className="hidden bg-white sm:flex flex-row items-center w-full mr-4 lg:mr-0">
          <Input
            placeholder="Search..."
            className="text-darkBlack"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className=" flex flex-col items-center justify-center p-1 h-14">
            <div className="h-12 w-12 flex flex-col items-center justify-center bg-gradient-to-t from-purple-600 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-600 cursor-pointer">
              <Image
                imageObject={SEARCH}
                className={"w-4 h-auto"}
                clickHandler={() => {
                  console.log("toast");
                  if (search == null) {
                    toast({
                      description:
                        "Specify any keyword before clicking search.",
                      className: styles["custom-toast"],
                    });
                  } else {
                    router.push(`/blogs?query=${search}`);
                  }
                }}
              />
            </div>
          </div>
        </div>
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
        <div className="  bg-white  flex flex-row items-center w-11/12 sm:w-10/12  lg:mr-0">
          <Input
            placeholder="Search..."
            className="text-darkBlack"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className=" flex flex-col items-center justify-center p-1 h-14">
            <div className="h-12 w-12 flex flex-col items-center justify-center bg-gradient-to-t from-purple-600 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-600 cursor-pointer">
              <Image
                imageObject={SEARCH}
                className={"w-4 h-auto"}
                clickHandler={() => {
                  if (search == null) {
                    toast({
                      description:
                        "Specify any keyword before clicking search.",
                      className: styles["custom-toast"],
                    });
                  } else {
                    router.push(`/blogs?query=${search}`);
                  }
                }}
              />
            </div>
          </div>
        </div>
        {NAVIGATION_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`text-white text-[16px] w-full mt-10 text-center transform opacity-0 ${
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
