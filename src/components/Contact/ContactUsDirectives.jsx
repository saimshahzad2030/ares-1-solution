import React from "react";
import { Phone } from "../../../public/assets/phone.svg";
import { Mail } from "../../../public/assets/mail.svg";
import { Location } from "../../../public/assets/location.svg";

const ContactUsDirectives = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-darkTheme dark:text-lightTheme">Contact Info</h1>
      <h2 className="text-darkBlack dark:text-white lexend-deca-bold text-[30px] sm:text-[40px] text-center">
        Our Contact Information
      </h2>
      <div className="text-darkBlack dark:text-white grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-2 mt-12 sm:mt-8">
        <div className="w-full flex flex-row items-center col-span-1 ">
          <div className="group flex flex-col items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full bg-gradient-to-tr from-lightTheme to-darkTheme text-white">
            <Phone
              className={
                "w-8 md:w-12 lg:w-12 h-auto group-hover:translate-y-[-12px] transition-all duration-700"
              }
            />
          </div>
          <div className="w-8/12 ml-4 flex flex-col items-start ">
            <h2 className="lexend-deca-bold text-[20px] ">Phone</h2>
            <span className="  mt-2 text-lightBlack text-[13px] sm:text-[15px]">
              {"(+61 3 8376 6284)"}
            </span>
            <span className="   text-lightBlack text-[13px] sm:text-[15px]">
              {"(+61 3 8376 6284)"}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-row items-center col-span-1 ">
          <div className="group flex flex-col items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full bg-gradient-to-tr from-lightTheme to-darkTheme text-white">
            <Mail
              className={
                "w-8 md:w-10 lg:w-12 h-auto    group-hover:translate-y-[-12px] transition-all duration-700"
              }
            />
          </div>
          <div className="w-8/12 ml-4 flex flex-col items-start ">
            <h2 className="lexend-deca-bold text-[20px]">Mail</h2>
            <span className="  mt-2 text-lightBlack text-[13px] sm:text-[15px]">
              {"fotified@gmail.com"}
            </span>
            <span className="   text-lightBlack text-[13px] sm:text-[15px]">
              {"Info@fortifiedsecurity.com"}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-row items-center col-span-1 ">
          <div className="group flex flex-col items-center justify-center w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full bg-gradient-to-tr from-lightTheme to-darkTheme text-white">
            <Location
              className={
                "w-8 md:w-12 lg:w-12 h-auto    group-hover:translate-y-[-12px] transition-all duration-700"
              }
            />
          </div>
          <div className="w-8/12 ml-4 flex flex-col items-start ">
            <h2 className="lexend-deca-bold text-[20px]">Location</h2>
            <span className="  mt-2 text-lightBlack text-[13px] sm:text-[15px] w-full">
              {"21 King Street Melbourne, 3000, Australia"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDirectives;
