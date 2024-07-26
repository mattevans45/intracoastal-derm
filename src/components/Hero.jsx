'use client';

import React, { useEffect, useMemo, useState, Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import whiteLogo from "../assets/images/optimized/white-transparent-nameonly.webp";
import useCountdown from "./useCountdown";
import Image from "next/image";
import dynamic from 'next/dynamic';

import smallwave1280 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-1280w-q80.webp";
import smallwave2560 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-2560w-q80.webp";
import background2_1280 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-1280w-q80.webp";
import background2_2560 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-2560w-q80.webp";
import background3_1280 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-1280w-q80.webp";
import background3_2560 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-2560w-q80.webp";
import background4_1280 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-1280w-q80.webp";
import background4_2560 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-2560w-q80.webp";

const CardContent = lazy(() => import("./CardContent"));
const BackgroundCarousel = lazy(() => import('./BackgroundCarousel'));
const FlipClock = dynamic(() => import('./FlipClock'), { ssr: false });

const backgroundImages = [
  smallwave2560,
  background3_2560,
  background4_2560,
  background2_2560,
];

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const targetDate = useMemo(() => new Date("August 1, 2024 00:00:00").getTime(), []);
  const timeLeft = useCountdown(targetDate);

  const motionProps = shouldReduceMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, transform: "translateX(-150px)" },
        animate: { opacity: 1, transform: "translateX(0)" },
        transition: { duration: 1, delay: 0.5 },
      };

  return (
    <div className="relative h-full min-h-screen overflow-hidden text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <BackgroundCarousel images={backgroundImages} interval={8000} />
      </Suspense>

      <div className="relative z-10">
        <motion.div
          {...motionProps}
          className="mx-3 flex w-fit flex-1 flex-col items-start justify-center rounded-b-lg bg-black/25 px-2 font-display backdrop-blur-sm sm:gap-1"
        >
          <h2 className="sm:text-md text-md text-center font-Playfair capitalize md:text-lg lg:text-2xl">
            Countdown until our Grand Opening!
          </h2>
      
          {isClient && (
            <Suspense fallback={<LoadingSpinner />}>
              <div className="mx-auto mt-4 flex items-center justify-start gap-x-3">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <FlipClock
                    key={`${unit}-${value}`}
                    time={value.toString().padStart(2, "0")}
                    label={unit.charAt(0).toUpperCase() + unit.slice(1)}
                  />
                ))}
              </div>
            </Suspense>
          )}
        </motion.div>

        <motion.div
          className="relative mx-auto h-auto w-full"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 50 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={whiteLogo}
            alt="Logo"
            width={1800}
            height={200}
            className="min-h-24 sm:h-32 lg:h-44 max-h-56 w-full object-contain px-3 sm:mt-3"
            priority
         
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
          <div className="mx-2 min-h-[35vh]">
            <CardContent />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(Hero);