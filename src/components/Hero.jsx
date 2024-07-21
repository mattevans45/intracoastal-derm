import React, { useEffect, useLayoutEffect, useState, Suspense, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner";
import whiteLogo from "../assets/images/optimized/white-transparent-nameonly.webp";
import smallwave640 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-640w-q80.webp";
import smallwave1280 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-1280w-q80.webp";
import smallwave1920 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-1920w-q80.webp";
import background2_640 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-640w-q80.webp";
import background2_1280 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-1280w-q80.webp";
import background2_1920 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-1920w-q80.webp";
import background3_640 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-640w-q80.webp";
import background3_1280 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-1280w-q80.webp";
import background3_1920 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-1920w-q80.webp";
import background4_640 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-640w-q80.webp";
import background4_1280 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-1280w-q80.webp";
import background4_1920 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-1920w-q80.webp";
import useCountdown from "./useCountdown";
import ErrorBoundary from "../ErrorBoundary";

const LazyFlipClock = React.lazy(() => import("./FlipClock"));
const LazyCardContent = React.lazy(() => import("./CardContent"));

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
        srcSet: `${smallwave640} 640w, ${smallwave1280} 1280w, ${smallwave1920} 1920w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px",
      },
      {
        srcSet: `${background3_640} 640w, ${background3_1280} 1280w, ${background3_1920} 1920w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px",
      },
      {
        srcSet: `${background4_640} 640w, ${background4_1280} 1280w, ${background4_1920} 1920w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px",
      },
      {
        srcSet: `${background2_640} 640w, ${background2_1280} 1280w, ${background2_1920} 1920w`,
        sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px",
      },
    ],
    []
  );

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const targetDate = useMemo(() => new Date("August 1, 2024 00:00:00").getTime(), []);
  const timeLeft = useCountdown(targetDate);

  const [loadedImages, setLoadedImages] = useState([backgroundImages[0]]);

  const loadNextImage = useCallback(
    async (index) => {
      const nextImage = backgroundImages[index];
      if (nextImage && !loadedImages.includes(nextImage)) {
        setLoadedImages((prev) => [...prev, nextImage]);
      }
    },
    [loadedImages, backgroundImages]
  );

  useLayoutEffect(() => {
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
    <div className="relative mx-auto min-h-screen h-[110dvh] overflow-hidden text-white flex flex-col">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 will-change-[opacity] transition-opacity duration-300 ease-in-out ${
            index === currentBackgroundIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <ProgressiveImage
            srcSet={image.srcSet}
            sizes={image.sizes}
            alt={`Background image ${index + 1}`}
            className="h-full w-full object-cover brightness-90 aspect-9 aspect-w-16"
            fetchpriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-150px)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-3 flex w-fit flex-1 flex-col items-start justify-center rounded-b-lg bg-black/25 px-2 font-display backdrop-blur-sm sm:gap-1"
        >
          <h2 className="sm:text-md text-md text-center font-Playfair capitalize md:text-lg lg:text-2xl">
            Countdown until our Grand Opening!
          </h2>
          <ErrorBoundary fallback={<div>Error loading countdown</div>}>
            <Suspense fallback={<LoadingSpinner />}>
              <div className="mx-auto mt-4 flex items-center justify-start gap-x-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <LazyFlipClock
                    key={`${unit}-${value}`}
                    time={value.toString().padStart(2, "0")}
                    label={unit.charAt(0).toUpperCase() + unit.slice(1)}
                  />
                ))}
              </div>
            </Suspense>
          </ErrorBoundary>
        </motion.div>

        <motion.div
          className="relative flex-grow-0"
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
            className="h-36 w-full object-contain px-3 sm:mt-3"
          />
        </motion.div>

        <div className= "flex items-center justify-center mt-1 lg:mt-10 sm:mt-4 sm:px-6 pb-10">
          <ErrorBoundary fallback={<div>Error loading content</div>}>
            <Suspense
              fallback={
                <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gray-300/50 p-4 sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:p-7 backdrop-blur-sm">
                  <div className="animate-pulse">
                    <div className="mb-4 h-16 rounded bg-gray-400/50"></div>
                    <div className="mb-4 h-16 rounded bg-gray-400/50"></div>
                    <div className="h-10 w-full rounded bg-gray-400/50 sm:w-1/2"></div>
                  </div>
                </div>
              }
            >
              <LazyCardContent />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
