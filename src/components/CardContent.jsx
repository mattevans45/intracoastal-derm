import React, { useRef, useEffect, memo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CardContent = memo(
  ({ title = "Tailored treatments,", subtitle = "Timeless results." }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="sm:mt:0 mx-auto min-h-[34vh] h-auto flex w-full items-center justify-center p-3 mt-1 md:p-3 lg:p-2"
        layoutId="card-content"
      >
        <motion.div
          variants={itemVariants}
          className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/15 p-3 text-white shadow-lg backdrop-blur-[9.5px] sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:p-7"
        >
          <motion.div
            variants={itemVariants}
            className="z-10 flex w-full flex-col items-center justify-between rounded-xl p-3 text-white"
          >
            <motion.span
              variants={textVariants}
              className="text-left min-h-[1.5em] text-3xl sm:text-5xl font-Playfair uppercase tracking-wide text-white"
            >
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.09 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              variants={textVariants}
              className="font-pretty mt-4 min-h-[1.5em] text-center font-Playfair text-3xl font-400 uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {subtitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05 + title.length * 0.08,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          <div className="mt-5 flex min-h-[50px] w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:flex-row">
            <Link
              to="/schedule-appointment"
              className="flex w-full items-center justify-center rounded-md bg-[#30648B] px-3 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#224966] sm:w-auto sm:min-w-[200px] sm:text-base"
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
              to="/services"
              className="flex w-full items-center justify-center rounded-md border border-white/30 px-3 py-3 text-sm font-semibold leading-6 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:mt-0 sm:w-auto sm:min-w-[200px] sm:text-base"
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
  }
);

export default CardContent;
