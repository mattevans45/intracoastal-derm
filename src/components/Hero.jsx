import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useAnimation, motion, useInView, calcLength} from 'framer-motion';
import FontSwitcher from './FontSwitcher';
import smallwave from "../assets/smallwave.jpg";
import background2 from "../assets/heroback1.jpg";
import background3 from "../assets/heroback2.jpg";
import background4 from "../assets/heroback3.jpg";
import whiteLogo from '../assets/white-transparent-nameonly.png';
import CardContent from './CardContent';

// const IMG_PADDING = 12;

// const OverlayCopy = ({ subheading, heading }) => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], [280, -250]);

//   const logoControls = useAnimation();
//   const contentControls = useAnimation();

//   useEffect(() => {
//     logoControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
//     contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } });
//   }, [logoControls, contentControls]);

//   return (
//     <motion.div
//       style={{ y }}
//       exit={{ scale: 0.95 }}
//       transition={{ y: { type: 'spring', stiffness: 300, damping: 30 }, scale: { duration: 0.5 } }}
//       className="absolute inset-0 flex h-full w-full flex-col justify-center items-center z-10 text-white text-center"
//     >
//       <motion.img
//         src={whiteLogo}
//         alt="Logo"
//         initial={{ opacity: 0, y: -50 }}
//         animate={logoControls}
//         className="object-cover object-center w-1/3 md:w-1/4 lg:w-1/5"
//       />
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={contentControls} className="mt-4">
//         <CardContent />
//       </motion.div>
//     </motion.div>
//   );
// };

// const StickyImage = ({ img }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   const imgControls = useAnimation();

//   useEffect(() => {
//     imgControls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
//   }, [imgControls]);

//   return (
//     <motion.div
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: `calc(100vh - ${IMG_PADDING * 2}px)`,
//         width: '100%',
//         scale,
//       }}
//       transition={{ scale: { duration: 0.1 } }}
//       ref={targetRef}
//       initial={{ opacity: 0, scale: 1.1 }}
//       animate={imgControls}
//       className="sticky top-0 z-0 h-full"
//     />
//   );
// };

// const TextParallaxContent = ({ img, subheading, heading, children }) => {
//   return (
//     <div className="relative w-screen h-screen">
//       <StickyImage img={img} />
//       <OverlayCopy heading={heading} subheading={subheading} />
//       {children}
//     </div>
//   );
// };

const Hero = () => {
  const logoControls = useAnimation();
  const contentControls = useAnimation();
  const ref = useRef(null);
  const [selectedFont, setSelectedFont] = useState('font-sans');
  const [selectedWeight, setSelectedWeight] = useState('400'); // Initial font weight
  const [selectedCasing, setSelectedCasing] = useState('normal'); // Initial font casing

  const isInView = useInView(ref, { amount: 0.1 });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const backgroundImages = [
   `url(${smallwave})`,
 `url(${background2})`,
`url(${background3})`,
`url(${background4})`,

  ];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);


  useEffect(() => {
    logoControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
  }, [logoControls]);

  useEffect(() => {
    if (isInView) {
      contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
    }
  }, [isInView, contentControls]);

  return (

    <div ref={ref} className={`${selectedFont} relative z-10 h-screen bg-cover bg-center bg-no-repeat bg-fixed`} 
      style={{
        backgroundImage: backgroundImages[currentBackgroundIndex],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100dvh - ${-20 * 2}px)`,
        width: '100%',
      }}
    >
        <FontSwitcher
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        selectedWeight={selectedWeight}
        setSelectedWeight={setSelectedWeight}
        selectedCasing={selectedCasing}
        setSelectedCasing={setSelectedCasing}
      />
      <div className="inline-flex mt-40 items-start justify-center h-full">
        <motion.img
          src={whiteLogo}
          alt="Logo"
          className="w-fit h-fit object-cover mx-auto p-4 md:p-4 sm:p-3 lg:p-20"
          transition={{ y: { duration: 0.4 } }}
          ref={targetRef}
          initial={{ opacity: 0, y: -150 }}
          animate={logoControls}
          style={{ y}}
       
        />
      </div>
      <div className="absolute lg:bottom-20 sm:bottom-36 md:bottom-30 bottom-36 h-fit w-full text-white z-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contentControls}
          transition={{ duration: 1 }}
        >
          <CardContent />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;