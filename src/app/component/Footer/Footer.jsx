import React from "react";
import Image from "../Image/Image";
import { LOCATION, LOGO, MAIL, PHONE } from "../../../../constants/icons";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-6 px-4 lg:px-20 bg-defaultTheme">
      <div className="text-[14px] lexend-deca-light  text-white col-span-2 w-full flex-col items-start bg-gradient-to-r from-darkTheme to-lightTheme gap-8 p-8 pb-12">
        <Image imageObject={LOGO} className={"h-8 w-auto"} />
        <p className=" my-4 ">
          Quia voluptas sit asper aut oit aut fugit sed quia consequuntur magni
          nesciunt aorro…
        </p>
        <div className="flex flex-row items-start mt-2">
          <Image imageObject={PHONE} className={"w-6 h-auto mr-2"} />
          <span>+61 3 8376 6284</span>
        </div>
        <div className="flex flex-row items-start mt-2">
          <Image imageObject={MAIL} className={"w-6 h-auto mr-2"} />
          <span>Info@fortifiedsecurity.com</span>
        </div>
        <div className="flex flex-row items-start mt-2">
          <Image imageObject={LOCATION} className={"w-6 h-auto mr-2"} />
          <span>21 King Street Melbourne, 3000, Australia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
