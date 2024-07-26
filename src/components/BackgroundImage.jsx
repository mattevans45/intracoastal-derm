import React from "react";
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={beachpier}
        className="h-full w-full object-cover"
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;
