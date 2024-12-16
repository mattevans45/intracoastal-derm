import React, { useEffect, useState, Suspense, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

import whiteLogo from "../assets/images/optimized/white-transparent-nameonly.webp";
import smallwave640 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-640w-q80.webp";
import smallwave1280 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-1280w-q80.webp";

import background2_640 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-640w-q80.webp";
import background2_1280 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-1280w-q80.webp";

import background3_640 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-640w-q80.webp";
import background3_1280 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-1280w-q80.webp";

import background4_640 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-640w-q80.webp";
import background4_1280 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-1280w-q80.webp";

import OpenModal from "./OpenModal";

import CardContent from "./CardContent";




const ProgressiveImage = React.memo(
  ({ srcSet, sizes, alt, className, loading = "eager", fetchpriority }) => (
    <img
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchpriority}
    />
  )
);

const Hero = () => {
  const backgroundImages = useMemo(
    () => [
      {
        srcSet: `${smallwave640} 640w, ${smallwave1280} 1280w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
      },
      {
        srcSet: `${background3_640} 640w, ${background3_1280} 1280w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
      },
      {
        srcSet: `${background4_640} 640w, ${background4_1280} 1280w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
      },
      {
        srcSet: `${background2_640} 640w, ${background2_1280} 1280w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
      },
    ],
    []
  );

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);



  const [loadedImages, setLoadedImages] = useState([backgroundImages[0]]);
  
  useEffect(() => {
    // Preload all images
    backgroundImages.forEach((image) => {
      const img = new Image();
      img.srcset = image.srcSet;
      img.sizes = image.sizes;
    });
  }, [backgroundImages]);

  const loadNextImage = useCallback(
    async (index) => {
      const nextImage = backgroundImages[index];
      if (nextImage && !loadedImages.includes(nextImage)) {
        setLoadedImages((prev) => [...prev, nextImage]);
      }
    },
    [loadedImages, backgroundImages]
  );


  useEffect(() => {
    loadNextImage((currentBackgroundIndex + 1) % backgroundImages.length);
  }, [currentBackgroundIndex, loadNextImage, backgroundImages.length]);

  const updateBackgroundIndex = useCallback(() => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  }, [backgroundImages.length]);

  useEffect(() => {
    const interval = setInterval(updateBackgroundIndex, 8000);
    return () => clearInterval(interval);
  }, [updateBackgroundIndex]);

  return (
    <div className="relative h-full max-h-screen overflow-hidden text-white">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-300 ease-in-out ${
            index === currentBackgroundIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <ProgressiveImage
            srcSet={image.srcSet}
            sizes={image.sizes}
            alt={`Background image ${index + 1}`}
            className="object-cover brightness-90 h-full w-full"
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority="high"
          />
        </div>
      ))}
{/* <OpenModal /> */}
      <div className="relative z-10">
       

        <motion.div
          className="relative mx-auto h-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={whiteLogo}
            srcSet={`${whiteLogo} 1x, ${whiteLogo} 2x`}
            alt="Logo"
            width={800}
            height={200}
            className="min-h-24 sm:h-32 lg:h-44 max-h-56 w-full object-contain px-3 sm:mt-3"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        
          <Suspense
            fallback={
              <div className="mx-auto mt-auto flex h-auto min-h-[35vh] w-full items-center justify-center p-1 sm:p-3 md:p-3 lg:p-2">
                <div className="animate-pulse w-full max-w-lg rounded-3xl border border-white/10 bg-gray-300 p-4 sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:p-7">
                  <div className="mb-4 h-16 rounded bg-gray-400"></div>
                  <div className="mb-4 h-16 rounded bg-gray-400"></div>
                  <div className="h-10 w-full rounded bg-gray-400 sm:w-1/2"></div>
                </div>
              </div>
            }
          >
            <div className="mx-2 min-h-[30vh]">
              <CardContent />
            </div>
          </Suspense>

      </div>
    </div>
  );
};

export default React.memo(Hero);