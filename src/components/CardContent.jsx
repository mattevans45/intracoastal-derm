'use client';

import React, { memo, lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";
import dynamic from 'next/dynamic';
import { containerVariants, itemVariants, textVariants } from './animationVariants';
import useAnimationControl from './useAnimationControl';

// Dynamically import AnimatedText
const AnimatedText = dynamic(() => import('./AnimatedText'), {
  loading: () => <div className="mx-auto mt-auto flex h-auto min-h-[35vh] w-full items-center justify-center p-1 sm:p-3 md:p-3 lg:p-2">
  <div className="animate-pulse w-full max-w-lg rounded-3xl border border-white/10 bg-gray-300 p-4 sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:p-7">
    <div className="mb-4 h-16 rounded bg-gray-400"></div>
    <div className="mb-4 h-16 rounded bg-gray-400"></div>
    <div className="h-10 w-full rounded bg-gray-400 sm:w-1/2"></div>
  </div>
</div>,
});

import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });

const CardContent = memo(({ title = "Tailored treatments,", subtitle = "Timeless results." }) => {
  const { ref, controls } = useAnimationControl();
  const shouldReduceMotion = useReducedMotion();

  const adaptedContainerVariants = shouldReduceMotion ? {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  } : containerVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={adaptedContainerVariants}
      className={`flex items-center justify-center p-1 sm:p-3 md:p-3 lg:p-2 mt-5 ${playfair.className}`}
      layoutId="card-content"
      aria-label="Beauty treatment information card"
    >
      <motion.div
        variants={itemVariants} 
        className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/15 p-3 text-white shadow-lg backdrop-blur-[5.5px] sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:p-7"
      >
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-between rounded-xl p-3 text-white"
        >
          <motion.span
            variants={itemVariants}
            className="text-left min-h-[1.5em] text-3xl sm:text-5xl uppercase tracking-wide text-white"
          >
            {title}
          </motion.span>
          
          <motion.span
            variants={textVariants}
            className="font-pretty mt-4 min-h-[1.5em] text-center text-3xl font-400 uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <AnimatedText text={subtitle} />
            </Suspense>
          </motion.span>
        </motion.div>
        <div className="mt-5 flex min-h-[50px] w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:flex-row">
          <Link
            href="/schedule-appointment"
            className="flex w-full items-center justify-center rounded-md bg-[#30648B] px-3 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-[#224966] sm:w-auto sm:min-w-[200px] sm:text-base"
            aria-label="Schedule your personalized treatment appointment"
          >
            <CalendarIcon
              className="mr-2 h-5 w-5"
              width="20"
              height="20"
              aria-hidden="true"
            />
            Schedule Appointment
          </Link>

          <Link
            href="/services"
            className="flex w-full items-center justify-center rounded-md border border-white/30 px-3 py-3 text-sm font-semibold leading-6 text-white transition-transform duration-300 hover:scale-105 hover:bg-white/10 sm:mt-0 sm:w-auto sm:min-w-[200px] sm:text-base"
            aria-label="Explore our range of tailored beauty treatments and services"
          >
            Explore Services
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default CardContent;