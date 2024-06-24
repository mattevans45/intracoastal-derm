import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import { Parallax } from "./Parallax";
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";
import logo from "../assets/white-transparent-nameonly.png";
import Section from "./Section";
import CardContent from "./CardContent";
const IMG_PADDING = 12;

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 650]);
  const opacity = useTransform(scrollYProgress, [1, 0.9], [0, 1]);
  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[70dvh] w-full flex-col items-center justify-center text-white"
    >
      <img src={logo} className="px-6 mb-2 text-center text-xl md:mb-4 md:text-3xl">
       
      </img>
      <CardContent />
    </motion.div>
  );
};
const TextParallaxContent = ({ img, subheading, heading, children }) => {
  
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[140dvh]">
        <StickyImage img={beachpier} />
        <OverlayCopy heading={logo} subheading={logo} />
      </div>
      {children}
    </div>
  );
};


const StickyImage = ({ img }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const Hero = () => {
  

  return (
    <div className="bg-white">
      <TextParallaxContent
        img ={beachpier}
        subheading="Intracoastal"
        heading="Dermatology"
      >
      </TextParallaxContent>
      {/* <motion.div className="hero-content  absolute left-0 top-44 mx-auto w-full justify-center bg-gray-400 bg-clip-text p-4">
        <div className="relative">
          <motion.img
            src={logo}
            ref={logoRef}
            className="max-h-[40vh] rounded-md object-contain p-2"
            alt="Logo"
            initial="hidden"
            animate={controls}
            variants={logoVariants}
            transition={{ duration: 0.5 }}
          />
        </div> */}
      {/* </motion.div> */}
      {/* <div ref={cardRef}>
        <motion.div
          className="card-content absolute bottom-0 flex w-full items-center justify-center p-4"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform, opacity" }}
          exit={{ opacity: 0 }}
        >
          <div className="rounded-3xl bg-black bg-opacity-40 p-4 shadow-lg md:p-6">
            <div className="flex w-fit flex-col items-center justify-center rounded-xl bg-white bg-opacity-15 p-6 text-center font-cursive text-lg font-medium text-white shadow-inner sm:w-full sm:text-xl md:w-2/3 md:text-2xl lg:text-3xl">
              <span className="font-display font-light capitalize tracking-wide text-yellow-50/90">
                Expert care
              </span>
              <span className="lowercase">for</span>
              <span className="mx-4 font-cursive text-4xl font-bold lowercase sm:text-5xl">
                healthy
              </span>
              <span className="text-end font-medium lowercase">skin.</span>
            </div>
            <div className="mt-4 flex flex-col items-center gap-y-2 sm:mt-8 sm:flex-row sm:justify-center sm:gap-x-4 sm:gap-y-4">
              <Link
                to="/schedule-appointment"
                className="rounded-md bg-[#30648B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#224966] sm:text-base"
              >
                Schedule an Appointment
              </Link>
              <Link
                to="/intracoastal-derm/schedule-appointment"
                className="mt-2 rounded-md px-4 py-2 text-sm font-semibold leading-6 text-gray-200 transition-colors duration-300 hover:bg-slate-50/10 sm:mt-0 sm:text-base"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Hero;
