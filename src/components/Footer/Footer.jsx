"use client";
import React from "react";
import Image from "../Image/Image";
import { LOGO, PAPER_PLANE } from "../../../constants/icons";
import Link from "next/link";
import { NAVIGATION_LINKS, SERVICES } from "../../../constants/constants";
import { Input } from "@/components/ui/input";
import { Facebook } from "../../../public/assets/facebook.svg";
import { Linkedin } from "lucide-react";
import { Twitter } from "../../../public/assets/twitter.svg";
import { Phone } from "../../../public/assets/phone.svg";
import { Mail } from "../../../public/assets/mail.svg";
import { Location } from "../../../public/assets/location.svg";

const Footer = () => {
  return (
    <div className="w-full lexend-deca-light grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 sm:px-4 lg:px-20 bg-defaultTheme">
      <div className="text-[14px]   text-white col-span-2 w-full flex-col items-start bg-gradient-to-r from-darkTheme to-lightTheme  p-8 pb-12">
        <Image imageObject={LOGO} className={"h-8 w-auto"} />
        <p className=" my-4 ">
          Quia voluptas sit asper aut oit aut fugit sed quia consequuntur magni
          nesciunt aorro…
        </p>
        <div className="group flex flex-row items-start mt-2 cursor-pointer">
          <Phone
            className={
              "w-6 h-auto mr-2  group-hover:text-lightTheme  duration-300 transition-colors "
            }
          />
          <span className="group-hover:text-white">+61 3 8376 6284</span>
        </div>
        <div className="group flex flex-row items-start mt-3   cursor-pointer">
          <Mail
            className={
              "w-6 h-auto mr-2  group-hover:text-lightTheme  duration-300 transition-colors"
            }
          />
          <span className="group-hover:text-white">
            Info@fortifiedsecurity.com
          </span>
        </div>
        <div className="group flex flex-row items-start mt-3  cursor-pointer">
          <Location
            className={
              "w-6 h-auto mr-2  group-hover:text-lightTheme duration-300 transition-colors"
            }
          />
          <span className=" group-hover:text-white">
            21 King Street Melbourne, 3000, Australia
          </span>
        </div>
      </div>
      <div className="mt-8 text-[14px]  text-white col-span-2 w-full flex-col items-start bg-defaultTheme  p-8 lg:px-4 xl:p-8 pb-12">
        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col items-start w-full">
            <h2 className="mb-4 lexend-deca-bold text-[20px]">Navigation</h2>
            <ul className="group">
              {NAVIGATION_LINKS.map((link, index) => (
                <li
                  className="text-[15px] text-lightBlack hover:text-lightTheme mt-2"
                  key={index}
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start w-full">
            <h2 className="mb-4 lexend-deca-bold text-[20px]">Services</h2>

            <ul className="group">
              {SERVICES.map((service, index) => (
                <li
                  className=" hover:text-lightTheme text-[15px] text-lightBlack mt-2"
                  key={index}
                >
                  <Link href={service.url}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-[14px]  text-white col-span-2 w-full flex-col items-start bg-defaultTheme  p-8 pb-12">
        <div className="flex flex-col items-start w-full">
          <h2 className="mb-4 lexend-deca-bold text-[20px]">
            Subscribe to NewsLetter
          </h2>
          <div className="bg-white flex flex-row items-center w-full">
            <Input
              placeholder="Enter your Email Address"
              className="text-darkBlack"
            />
            <div className=" flex flex-col items-center justify-center p-1 h-14">
              <div className="h-12 w-12 flex flex-col items-center justify-center bg-gradient-to-t from-purple-600 to-blue-500 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-600 cursor-pointer">
                <Image imageObject={PAPER_PLANE} className={"w-4 h-auto"} />
              </div>
            </div>
          </div>
          <h2 className="mb-4 lexend-deca-bold text-[17px] mt-4">
            Follow on social media:
          </h2>
          <div className="flex flex-row items-center w-full group">
            <div className="cursor-pointer mr-2 flex flex-col items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-defaultTheme duration-300 transition-colors">
              <Facebook className={"w-4 h-auto"} />
            </div>
            <div className="cursor-pointer mr-2 flex flex-col items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-defaultTheme duration-300 transition-colors">
              <Linkedin className={"w-4 h-auto"} />
            </div>
            <div className="cursor-pointer flex flex-col items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-defaultTheme duration-300 transition-colors">
              <Twitter className={"w-4 h-auto"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
