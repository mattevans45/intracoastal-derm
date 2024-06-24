import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import logo from "../assets/white-transparent-nameonly.png";
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";

const Hero = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    controls.start({
      scale: inView ? 0.5 : 1,
      y: inView ? -200 : 0,
      transition: { duration: 0.5 },
    });
  }, [inView, controls]);

  return (
    <div className="hero-page relative h-screen w-full overflow-hidden">
      <motion.img
        ref={ref}
        src={beachpier}
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0, mixBlendMode: 'lighten' }}
        animate={{ opacity: 1, y: 0, scale: 1.03, mixBlendMode: 'multiply', filter: 'brightness(0.8) saturate(0.8) drop-shadow(0 0 0.5rem #000)' }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
        exit={{ opacity: 0 }}
        style={{ willChange: 'transform, opacity' }}
      />

      <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-clip-text">
        <motion.img
          src={logo}
          className="z-10 mx-auto h-auto max-h-[40vh] md:max-h-[30vh] lg:max-h-[40vh] rounded-md object-contain p-4"
          alt="Logo"
          initial={{ scale: 1, y: 0 }}
          animate={controls}
          style={{ willChange: 'transform' }}
        />
      </div>

      <motion.div
        className="card-content mt-40 md:mt-60 lg:mt-80 flex items-center justify-center w-full"
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 50 : 500 }}
        transition={{ duration: 0.5 }}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="rounded-3xl bg-black bg-opacity-40 p-4 shadow-lg md:p-6">
          <div className="flex w-fit flex-col items-center justify-center rounded-xl bg-gray-300 bg-opacity-40 bg-blend-exclusion p-6 text-center font-cursive text-lg font-medium text-white shadow-inner backdrop-blur-xl sm:w-full sm:text-xl md:w-2/3 md:text-2xl lg:text-3xl">
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
    </div>
  );
};

export default Hero;
