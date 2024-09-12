"use client";
import React from "react";
import Image from "../Image/Image";
import { HOME_VIDEO_BG } from "../../../../constants/images";
import { CROSS, VIDEO_ICON } from "../../../../constants/icons";
import YouTube from "react-youtube";
const HomeVideoSection = () => {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const videoId = "XHOmBV4js_E"; // Replace with your YouTube video ID

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="absolute w-32 lg:w-40 h-32 lg:h-40 flex flex-col items-center ">
        <Image
          imageObject={VIDEO_ICON}
          className={"w-10/12 h-auto cursor-pointer"}
          clickHandler={() => setButtonClicked(!buttonClicked)}
        />
      </div>
      <Image
        imageObject={HOME_VIDEO_BG}
        className={" h-[60vh] w-auto sm:w-full sm:h-auto object-cover"}
      />

      {buttonClicked && (
        <div className="fixed inset-0 z-50 bg-slate-900 bg-opacity-90 flex flex-col items-center w-full">
          <div className="flex flex-row items-center justify-end w-full p-4">
            <Image
              imageObject={CROSS}
              className={"w-6 h-auto cursor-pointer"}
              clickHandler={() => setButtonClicked(false)}
            />
          </div>

          <div className="flex flex-col items-center w-full ">
            <YouTube videoId={videoId} opts={opts} className="w-6/12 h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeVideoSection;
