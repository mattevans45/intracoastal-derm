'use client';

import { useState, useEffect } from "react";
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
    <div className="absolute top-0 left-0 w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};
export default BackgroundCarousel;