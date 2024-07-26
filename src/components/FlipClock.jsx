"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const flipVariants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.3 } },
};

const FlipClock = memo(({ time, label }) => {
  return (
    <div className="mb-1 flex h-full w-full flex-col items-center justify-center font-Playfair capitalize text-white">
      <motion.div
        layoutId={`flip-clock-${label}`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={flipVariants}
        className="h-auto w-14 rounded-md rounded-b-lg border border-t border-white border-opacity-10 px-2 py-1.5 pb-4 text-center font-Playfair text-xl text-white sm:text-2xl md:text-2xl lg:text-4xl"
      >
        {time}
      </motion.div>

      <span className="mt-1 text-center font-Playfair text-sm sm:text-base md:text-lg lg:text-lg">
        {label}
      </span>
    </div>
  );
});

export default FlipClock;
