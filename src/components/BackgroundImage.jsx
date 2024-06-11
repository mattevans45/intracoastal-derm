import React from "react";
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={beachpier}
        className="h-full w-full object-cover"
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;
