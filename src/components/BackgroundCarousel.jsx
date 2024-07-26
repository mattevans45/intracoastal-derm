'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const BackgroundCarousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
  

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className="w-full h-full z-50 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          
          width={2100}
          height={1080}
          alt={`Background ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          priority
        />
      ))}
    </div>
  );
};

export default BackgroundCarousel;
