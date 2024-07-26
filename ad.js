import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  Suspense,
} from "react";
import LoadingSpinner from "../LoadingSpinner";
import { motion } from "framer-motion";
import whiteLogo from "../assets/images/optimized/white-transparent-nameonly.webp";
import smallwave640 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-640w-q80.webp";
import smallwave1280 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-1280w-q80.webp";

import useCountdown from "./useCountdown";
import ErrorBoundary from "../ErrorBoundary";

const LazyFlipClock = React.lazy(() => import("./FlipClock"));
const LazyCardContent = React.lazy(() => import("./CardContent"));

const backgroundImages = [
  {
    srcSet: `${smallwave640} 640w, ${smallwave1280} 1280w`,
    sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
  }
  // {
  //   srcSet: `${background3_640} 640w, ${background3_1280} 1280w`,
  //   sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
  // },
  // {
  //   srcSet: `${background4_640} 640w, ${background4_1280} 1280w`,
  //   sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
  // },
  // {
  //   srcSet: `${background2_640} 640w, ${background2_1280} 1280w`,
  //   sizes: "(max-width: 640px) 640px, (max-width: 1280px) 1280px",
  // },
];

const Hero = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const timeLeft = useCountdown(new Date("August 1, 2024 00:00:00").getTime());

  const [loadedImages, setLoadedImages] = useState([backgroundImages[0]]);

  useLayoutEffect(() => {
    const loadImage = (index) => {
      if (index < backgroundImages.length && !loadedImages.includes(backgroundImages[index])) {
        const img = new Image();
        img.srcset = backgroundImages[index].srcSet;
        img.sizes = backgroundImages[index].sizes;
        img.onload = () => setLoadedImages((prev) => [...prev, backgroundImages[index]]);
      }
    };

    loadImage(currentBackgroundIndex);
    loadImage((currentBackgroundIndex + 1) % backgroundImages.length);

    return () => {
      // Cleanup if needed
    };
  }, [currentBackgroundIndex, loadedImages]);

  const changeBackground = () => {
    setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  useEffect(() => {
    const interval = setInterval(changeBackground, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-full min-h-screen overflow-hidden text-white">
      {loadedImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBackgroundIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            srcSet={image.srcSet}
            sizes={image.sizes}
            alt={`Background image ${index + 1}`}
            className="h-full w-full object-cover brightness-90"
            loading="lazy"
          />
        </div>
      ))}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex w-fit flex-1 flex-col flex-wrap mx-3 items-start justify-center rounded-b-lg bg-black/25 px-2 font-display backdrop-blur-sm sm:gap-1"
        >
          <h2 className="sm:text-md font-Playfair text-md text-center capitalize md:text-lg lg:text-2xl">
            Countdown until our Grand Opening!
          </h2>
          <ErrorBoundary fallback={<div>Error loading countdown</div>}>
            <Suspense fallback={<LoadingSpinner />}>
              <div className="mt-4 mx-auto flex items-center justify-start gap-x-3">
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
            className="mx-auto h-full w-full my-10 sm:mt-3 px-3 lg:px-20"
          />
        </motion.div>
        <ErrorBoundary fallback={<div>Error loading content</div>}>
          <Suspense fallback={<div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>}>
            <div className="mx-6">
              <LazyCardContent />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Hero;
