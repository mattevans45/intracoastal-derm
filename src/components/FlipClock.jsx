// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence, easeOut } from "framer-motion";

// const FlipClock = ({ time, label }) => {
//   const [previousValue, setPreviousValue] = useState(time);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width <= 768); // Adjust breakpoint as needed for your design
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     if (previousValue !== time) {
//       setIsFlipping(true);
//       const timer = setTimeout(() => {
//         setPreviousValue(time);
//         setIsFlipping(false);
//       }, 350);
//       return () => clearTimeout(timer);
//     }

//     return () => window.removeEventListener("resize", handleResize);
//   }, [time, previousValue]);

//   return (
//     <div
//       className={`w-${isMobile ? "12" : "24"} z-10 mx-2 flex flex-col items-center text-white font-Playfair capitalize`}
//     >
//       <div
//         style={{ perspective: 600, perspectiveOrigin: isMobile ? "330%" : "370%" }}
//         className="flip-clock relative mb-2 h-20 w-14"
//       >
//         <div className="absolute h-full w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={time}
//               initial={{ rotateX: 0, opacity: 0.2 }}
//               animate={{ rotateX: isFlipping ? 90 : 0, opacity: 1 }}
//               exit={{ rotateX: -90, rotateZ: 35, opacity: 0.2 }}
//               transition={{
//                 duration: 0.2,
//                 ease: [0.5, 0.1, 0.5, 1],
//               }}
//               className={`font-bold backface-hidden transform-origin-bottom absolute top-0 z-20 flex h-1/2 w-full items-center justify-center rounded-t-lg border border-b border-white border-opacity-10 backdrop-blur-md bg-blend-screen mix-blend-multiply bg-black bg-opacity-30 text-${isMobile ? "lg" : "2xl"}`}
//             >
//               {time}
//             </motion.div>
//           </AnimatePresence>
//           <motion.div
//             className={`font-bold backface-hidden transform-origin-top absolute bottom-0 z-10 flex h-1/2 w-full items-center justify-center rounded-b-lg border border-t border-white border-opacity-10 backdrop-blur-md bg-blend-screen mix-blend-multiply bg-black bg-opacity-30 text-${isMobile ? "lg" : "2xl"}`}
//             animate={{
//               rotateX: isFlipping ? 0 : -180,
//               rotateZ: isFlipping ? 0 : -35,
//               opacity: isFlipping ? 0 : 1,
//             }}
//             transition={{
//               duration: 0.6,
//               ease: easeOut,
//               delay: 0.2,
//             }}
//           >
//             {previousValue}
//           </motion.div>
//         </div>
//       </div>
//       <div className="-mt-12 mb-4 md:-mt-4 font-bold text-center text-sm uppercase">{label}</div>
//     </div>
//   );
// };

// export default FlipClock;


import React from "react";
import { motion } from "framer-motion";

const flipVariants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.6 } },
};

const FlipClock = ({ time, label }) => {
  return (
    <div className="flex flex-col mb-1 w-full h-full justify-center items-center text-white font-Playfair capitalize">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={flipVariants}
        className="w-14 h-auto py-1.5 px-2 text-white text-center pb-4 text-2xl sm:text-3xl rounded-b-lg border border-t border-white border-opacity-10 backdrop-blur-md bg-blend-multiply bg-black bg-opacity-20 md:text-3xl lg:text-4xl rounded-md shadow-lg"
      >
        {time}
      </motion.div>
      <span className="mt-2 text-sm text-center sm:text-base md:text-lg lg:text-lg">{label}</span>
    </div>
  );
};

export default FlipClock;
