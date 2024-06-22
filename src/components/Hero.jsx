import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, useAnimation, motion } from 'framer-motion';
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";
import logo from "../assets/white-transparent-nameonly.png";

import whiteLogo from '../assets/white-transparent-nameonly.png';
import CardContent from './CardContent';

const IMG_PADDING = 12;
const OverlayCopy = ({ subheading, heading }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [280, -250]);

  const logoControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    logoControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
    contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } });
  }, [logoControls, contentControls]);

  return (
    <motion.div
      style={{ y }}
      exit={{ scale: 0.95 }}
      transition={{ y: { type: 'spring', stiffness: 300, damping: 30 }, scale: { duration: 0.5 }}}
      className="absolute left-0 top-0 flex h-2 w-full flex-col justify-center items-center z-10 text-white text-center"
    >
      <motion.img
        src={whiteLogo}
        alt="Logo"
        initial={{ opacity: 0, y: -150 }}
        animate={logoControls}
        className="px-6 mb-2 object-cover object-center mt-24 w-full sm:w-full md:w-full lg:h-80 md:h-64 sm:h-64 text-center text-xl md:mb-4 md:text-3xl"
      />
      <motion.div initial={{ opacity: 0, y: 0 }} animate={contentControls}>
        <CardContent />
      </motion.div>
    </motion.div>
  );
};

const TextParallaxContent = ({ img, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative hero-image bg-inherit  my-auto">
        <StickyImage img={img} />
        <OverlayCopy heading={heading} subheading={subheading} />
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const imgControls = useAnimation();

  useEffect(() => {
    imgControls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
  }, [imgControls]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100dvh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}

      transition={{ scale: { duration: 0.1 } }}
      ref={targetRef}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={imgControls}
      
      className="sticky z-0 h-full overflow-hidden rounded-xl"
    >
      <motion.div
        className="absolute inset-0 bg-gray-400 backdrop-blur-[1px] mix-blend-multiply z-10"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="bg-inherit container">
      <TextParallaxContent
        img={beachpier}
        subheading="Intracoastal"
        heading="Dermatology"
      >
      </TextParallaxContent>
    </div>
  );
};

export default Hero;



