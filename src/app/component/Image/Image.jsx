import React from "react";

const Image = ({ imageObject, className, clickHandler }) => {
  return (
    <img
      className={className}
      src={imageObject.src}
      alt={imageObject.name}
      onClick={clickHandler}
    />
  );
};

export default Image;
