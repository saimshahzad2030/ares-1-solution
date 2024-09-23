import React from "react";

const Image = ({ imageObject, className, clickHandler, dataAos }) => {
  return (
    <img
      data-aos={dataAos}
      className={className}
      src={imageObject.src}
      alt={imageObject.name}
      onClick={clickHandler}
    />
  );
};

export default Image;
