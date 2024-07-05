import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  useAnimation,
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import whiteLogo from "../assets/images/optimizations/white-transparent-nameonly.webp";
import smallwave from "../assets/images/optimizations/smallwave.webp";
import background2 from "../assets/images/optimizations/heroback1.webp";
import background3 from "../assets/images/optimizations/heroback3.webp";
import background4 from "../assets/images/optimizations/heroback2.webp";

import FlipClock from "./FlipClock";
import CardContent from "./CardContent";

const ImageCompressed = ({ src, alt, className }) => (
  <img
    src={src}
    srcSet={`${src} 1x, ${src} 2x`}
    sizes="(max-width: 1400px) 100vw, 100vw"
    alt={alt}
    className={className}
  />
);

const usePreloadImages = (images) => {
  useEffect(() => {
    images.forEach((imageObj) => {
      const img = new Image();
      img.onload = () => {
        imageObj.loaded = true;
      };
      img.onerror = (error) => {
        console.error(`Failed to preload image: ${imageObj.src}`, error);
      };
      img.src = imageObj.src;
      img.loading = "lazy";
      img.srcSet = `${imageObj.src} 1x, ${imageObj.src} 2x`;
      img.sizes = `
        (min-width: 60em) 50em,
        (min-width: 50em) 50em,
        (min-width: 30em) 30em,
        (max-width: 30em) 20em,
        100vw
      `;
    });
  }, [images]);
};

const Hero = () => {
  const ref = useRef(null);
  const logoControls = useAnimation();
  const flipClockControls = useAnimation();

  const backgroundImages = useMemo(
    () => [
      { src: smallwave, loaded: false },
      { src: background3, loaded: false },
      { src: background2, loaded: false },
      { src: background4, loaded: false },
    ],
    [],
  );

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  usePreloadImages(backgroundImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    logoControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [logoControls]);

  useEffect(() => {
    flipClockControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.5 },
    });
  }, [flipClockControls]);

  const calculateTimeLeft = () => {
    const targetDate = new Date("August 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto h-full min-h-[120vh] overflow-hidden text-white">
      <ImageCompressed
        src={backgroundImages[currentBackgroundIndex].src}
        alt="Background image description"
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-90"
      />
      <>
        <motion.div
          animate={flipClockControls}
          ref={ref}
          initial={{ opacity: 0, x: -150 }}
          className="mb-14 flex w-fit flex-1 flex-col flex-wrap items-start justify-center gap-6 rounded-b-lg bg-black/25 px-4 font-Playfair backdrop-blur-sm sm:gap-1"
        >
          <h2 className="sm:text-md font-Playfair text-xl capitalize md:text-lg lg:text-2xl">
            Countdown until our Grand Opening
          </h2>
          <AnimatePresence>
            <motion.div
              className="mt-4 flex items-center justify-start gap-x-3"
              animate={flipClockControls}
              initial={{ opacity: 0, x: -50 }}
            >
              <FlipClock
                key={`days-${timeLeft.days}`}
                time={timeLeft.days?.toString().padStart(2, "0") || "00"}
                label="Days"
              />
              <FlipClock
                key={`hours-${timeLeft.hours}`}
                time={timeLeft.hours?.toString().padStart(2, "0") || "00"}
                label="Hours"
              />
              <FlipClock
                key={`minutes-${timeLeft.minutes}`}
                time={timeLeft.minutes?.toString().padStart(2, "0") || "00"}
                label="Minutes"
              />
              <FlipClock
                key={`seconds-${timeLeft.seconds}`}
                time={timeLeft.seconds?.toString().padStart(2, "0") || "00"}
                label="Seconds"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </>

      <>
        <motion.div
          className="relative mx-auto my-2 h-auto w-fit"
          initial={{ opacity: 0 }}
          animate={logoControls}
        >
          <ImageCompressed
            src={whiteLogo}
            alt="Logo"
            className="mx-auto h-auto w-fit object-cover p-4 sm:p-3 md:p-4 lg:px-20"
          />
        </motion.div>
      </>

      <div className="relative z-10 w-full text-center text-white">
        <div className="w-full text-white">
          <CardContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
