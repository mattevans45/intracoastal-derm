import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, useAnimation, motion } from 'framer-motion';
import beachpier from "../assets/vecteezy_stairs-to-the-beach_1759830.jpeg";
import logo from "../assets/white-transparent-nameonly.png";

import whiteLogo from '../assets/white-transparent-nameonly.png';
import CardContent from './CardContent';

const IMG_PADDING = 12;
const OverlayCopy = ({ subheading, heading }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [500, -250]);

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
      className="absolute container  left-0 top-0 flex h-[80dvh] w-full flex-col justify-center items-center z-10 text-white text-center"
    >
      <motion.img
        src={whiteLogo}
        alt="Logo"
        initial={{ opacity: 0, y: -450 }}
        animate={logoControls}
        className="px-6 mb-2 object-cover object-center lg:h-80 md:h-56 sm:h-full text-center text-xl md:mb-4 md:text-3xl"
      />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={contentControls}>
        <CardContent />
      </motion.div>
    </motion.div>
  );
};

const TextParallaxContent = ({ img, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative hero-image bg-inherit h-[100dvh]">
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
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
        height: `calc(110dvh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}

      transition={{ y: { type: 'spring', stiffness: 300, damping: 30 }, scale: { duration: 0.5 } }}
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
//     </div>
//   );
// };


