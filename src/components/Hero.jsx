import React, { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  useAnimation,
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import smallwave from "../assets/smallwave.jpg";
import background2 from "../assets/heroback1.jpg";
import background3 from "../assets/heroback2.jpg";
import background4 from "../assets/heroback3.jpg";
import whiteLogo from "../assets/white-transparent-nameonly.png";
import FlipClock from "./FlipClock";
import CardContent from "./CardContent";

const Hero = () => {
  const logoControls = useAnimation();
  const contentControls = useAnimation();
  const flipClockControls = useAnimation();

  const ref = useRef(null);
  const cardContentRef = useRef(null);
  const logoRef = useRef(null);

  const isInView = useInView(ref, { threshold: 0.8 });
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const backgroundImages = [
    smallwave,
    background3,
    background2,
    background4,
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
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
    if (isInView) {
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.3 },
      });
      flipClockControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [isInView, contentControls, flipClockControls]);

  const calculateTimeLeft = () => {
    const targetDate = new Date("August 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
    <div className="relative mx-auto h-[120vh] text-white">
      <AnimatePresence>
        <motion.div
          key={currentBackgroundIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out z-0"
          style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
      <motion.div
        animate={flipClockControls}
        ref={ref}
        initial={{ opacity: 0, x: -150 }}
        className="flex flex-col flex-wrap flex-1 justify-center items-start rounded-b-lg bg-black/25 px-4 gap-6 font-Playfair backdrop-blur-sm sm:gap-1 w-fit"
      >
        <h2 className="font-Playfair text-xl capitalize sm:text-md md:text-lg lg:text-2xl">
          Countdown until our Grand Opening
        </h2>
        <AnimatePresence>
          <motion.div
            className="flex justify-start items-center gap-x-3 mt-4"
            animate={flipClockControls}
            initial={{ opacity: 0, x: -50 }}
          >
            <FlipClock
              key={`days-${timeLeft.days}`}
              time={timeLeft.days.toString().padStart(2, "0")}
              label="Days"
            />
            <FlipClock
              key={`hours-${timeLeft.hours}`}
              time={timeLeft.hours.toString().padStart(2, "0")}
              label="Hours"
            />
            <FlipClock
              key={`minutes-${timeLeft.minutes}`}
              time={timeLeft.minutes.toString().padStart(2, "0")}
              label="Minutes"
            />
            <FlipClock
              key={`seconds-${timeLeft.seconds}`}
              time={timeLeft.seconds.toString().padStart(2, "0")}
              label="Seconds"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <>
        <motion.div
          className="my-10 relative mx-auto h-auto w-fit"
          style={{ y: logoY }}
        >
          <motion.img
            src={whiteLogo}
            alt="Logo"
            className="mx-auto h-auto w-fit object-cover p-4 sm:p-3 md:p-4 lg:px-20"
            ref={logoRef}
            initial={{ opacity: 0, y: -250 }}
            animate={logoControls}
          />
        </motion.div>
        <AnimatePresence>
        <div className="relative w-full text-center text-white z-10">
          <motion.div
            ref={cardContentRef}
            animate={contentControls}
            initial={{ opacity: 0, y: 50 }}
            className="w-full text-white"
          >
            <CardContent />
          </motion.div>
     
        </div>
        </AnimatePresence>
      </>
    </div>
  );
};

export default Hero;
