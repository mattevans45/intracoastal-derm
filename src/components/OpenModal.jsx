'use client';


// const OpenModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg max-w-md text-center">
//         <h2 className="text-2xl font-bold mb-4">We're Now Open!</h2>
//         <p className="mb-4">Visit our new office in Leland, NC. We're excited to serve you!</p>
//         <button 
//           onClick={() => setIsOpen(false)}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Great, thanks!
//         </button>
//       </div>
//     </div>
//   );
// };

// const OpenModal = () => {
//     return (
//       <div className="fixed top-10 right-1 bg-green-500 z-50 text-white p-2 rounded-l-lg shadow-lg transform -rotate-45 origin-top-right">
//         <p className="text-sm font-bold animate-pulse">Now Open!</p>
//       </div>
//     );
//   };

// const OpenModal = () => {
//     return (
//       <div className="absolute z-50 top-0 left-0 overflow-hidden w-40 h-40">
//         <div className="absolute transform -rotate-45 bg-green-500 text-white text-center font-semibold py-1 top-[32px] right-[28px] w-[170px]">
//          Office Now Open!
//         </div>
//       </div>
//     );
//   };
  

// import { useState, useEffect } from 'react';

// import { XMarkIcon } from '@heroicons/react/20/solid';

// import { motion } from 'framer-motion';

// const Confetti = ({ count }) => {
//   return Array.from({ length: count }).map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute w-2 h-2 bg-yellow-300 rounded-full"
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{
//         opacity: [1, 1, 0],
//         scale: [0, 1, 1],
//         x: Math.random() * 100 - 50,
//         y: Math.random() * 100 - 50,
//         rotate: Math.random() * 360
//       }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     />
//   ));
// };

// const OpenModal = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   if (!isVisible) return null;

//   return (
//     <>
//     <motion.div
//       className="fixed top-20 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer"
//       whileHover={{ scale: 1.1 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       >
//       <motion.span
//         className="text-sm font-bold"
//         animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
//         transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//         > Now Open!
//       </motion.span>
//       {isHovered && <Confetti count={50} />}
//     </motion.div>

//     <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#5ec578] to-[#4275e2]  z-50 text-white p-4 text-center">
//       <p className="font-bold">🎉🍾We're now open! Visit our new office in Leland, NC.🍾🎉</p>
//       <button
//                 onClick={()=>setIsVisible(false)}
//                 className="absolute top-2 right-2 ml-2 flex-shrink-0 rounded-full bg-white/10 p-1 text-white transition-colors hover:bg-white/20 sm:ml-4 sm:p-1.5"
//                 aria-label="Dismiss contact bar"
//                 >
//                 <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
     
//     </div>
//                   </>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { XMarkIcon } from '@heroicons/react/20/solid';

// const Confetti = ({ count, area }) => {
//   return Array.from({ length: count }).map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute z-50 w-2 h-2 rounded-full"
//       style={{
//         background: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
//         top: `${Math.random() * area.height}px`,
//         left: `${Math.random() * area.width}px`,
//       }}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{
//         opacity: [1, 1, 0],
//         scale: [0, 1, 1],
//         y: Math.random() * 100 - 50,
//         rotate: Math.random() * 360
//       }}
//       transition={{ duration: 1.3 + Math.random(), ease: "easeOut" }}
//     />
//   ));
// };

// const OpenModal = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//       setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <>
//       <motion.div
//         className={`fixed ${isMobile ? 'top-4 right-4' : 'top-20 right-4'} z-50 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer`}
//         whileHover={{ scale: 1.1 }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//       >
//         <motion.span
//           className="text-sm font-bold"
//           animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
//           transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//         >
//           Now Open!
//         </motion.span>
//         {isHovered && <Confetti count={50} area={windowSize} />}
//       </motion.div>

//       {isMobile ? (
//         <motion.div
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ type: 'spring', stiffness: 100 }}
//           className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#5ec578] to-[#4275e2] z-50 text-white p-4 text-center"
//         >
//           <p className="font-bold text-sm">🎉 We're now open in Leland, NC! 🎉</p>
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-1 right-1 p-1 text-white"
//             aria-label="Dismiss"
//           >
//             <XMarkIcon className="h-4 w-4" />
//           </button>
//         </motion.div>
//       ) : (
//         <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#5ec578] to-[#4275e2] z-50 text-white p-4 text-center">
//           <p className="font-bold">🎉🍾We're now open! Visit our new office in Leland, NC.🍾🎉</p>
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-2 right-2 ml-2 flex-shrink-0 rounded-full bg-white/10 p-1 text-white transition-colors hover:bg-white/20 sm:ml-4 sm:p-1.5"
//             aria-label="Dismiss contact bar"
//           >
//             <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//           </button>
//         </div>
//       )}

//       {isHovered && <Confetti count={300} area={windowSize} />}
//     </>
//   );
// };

// export default OpenModal;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { XMarkIcon } from '@heroicons/react/20/solid';

// const Confetti = ({ count, area }) => {
//     return Array.from({ length: count }).map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute z-50 w-2 h-2.5 rounded-full"
//         style={{
//           background: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
//           top: `${Math.random() * area.height}px`,
//           left: `${Math.random() * area.width}px`,
//         }}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{
//           opacity: [1, 1, 0],
//           scale: [0, 1, 1],
//           y: Math.random() * 100 - 50,
//           rotate: Math.random() * 360
//         }}
//         transition={{ duration: 1.8 + Math.random(), ease: "easeOut" }}
//       />
//     ));
//   };

// const OpenModal = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isActive, setIsActive] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleInteraction = () => {
//     setIsActive(true);
   
//     setTimeout(() => setIsActive(false), 3000);
//   };

//   if (!isVisible) return null;

//   return (
//     <>
//       <motion.div
//         className={`fixed ${isMobile ? 'top-4 right-4' : 'top-20 right-4'} z-50 bg-sky-500 text-white p-3 rounded-full shadow-lg cursor-pointer`}
//         whileHover={!isMobile ? { scale: 1.1 } : {}}
//         whileTap={{ scale: 0.95 }}
//         onHoverStart={() => !isMobile && handleInteraction()}
//         onHoverEnd={() => !isMobile && setIsActive(false)}
//         onTap={handleInteraction}
//       >
//         <motion.span
//           className="text-sm font-bold"
//           animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
//           transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
//         >
//           Now Open!
//         </motion.span>
//       </motion.div>

//       {isMobile ? (
//         <motion.div
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ type: 'spring', stiffness: 100 }}
//           className="fixed bottom-0 left-0 right-0 bg-sky-500 z-50 text-white p-4 text-center"
//         >
//           <p className="font-bold text-sm">🎉 We're now open in Leland, NC! 🎉</p>
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-1 right-1 p-1 text-white"
//             aria-label="Dismiss"
//           >
//             <XMarkIcon className="h-4 w-4" />
//           </button>
//         </motion.div>
//       ) : (
//         <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#c5c35e] to-[#42e25d] z-50 text-white p-4 text-center">
//           <p className="font-bold">🎉🍾We're now open! Visit our new office in Leland, NC.🍾🎉</p>
//           <button
//             onClick={() => setIsVisible(false)}
//             className="absolute top-2 right-2 ml-2 flex-shrink-0 rounded-full bg-white/10 p-1 text-white transition-colors hover:bg-white/20 sm:ml-4 sm:p-1.5"
//             aria-label="Dismiss contact bar"
//           >
//             <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//           </button>
//         </div>
//       )}

//       {isActive && <Confetti count={100} area={windowSize} />}
//     </>
//   );
// };

// export default OpenModal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/20/solid';

const Confetti = ({ count, area }) => {
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
              top: `${Math.random() * area.height}px`,
              left: `${Math.random() * area.width}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1, 1],
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360
            }}
            transition={{ duration: 0.8 + Math.random(), ease: "easeOut" }}
          />
        ))}
      </div>
    );
  };

  const OpenModal = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const handleInteraction = () => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 2000);
    };
  
    if (!isVisible) return null;
  
    return (
      <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative bg-[#219c31] w-full  text-white p-2  text-center"
            >
              <motion.button
                className="font-playfair text-md inline-block"
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => !isMobile && handleInteraction()}
                onHoverEnd={() => !isMobile && setIsActive(false)}
                onClick={handleInteraction}
              >
                🎉 We are OPEN! 🎉
              </motion.button>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 ml-2 flex-shrink-0 rounded-full bg-white/10 p-1 text-white transition-colors hover:bg-white/20 sm:ml-4 sm:p-1.5"
                aria-label="Dismiss banner"
              >
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
  
        <AnimatePresence>
          {isActive && <Confetti count={100} area={windowSize} />}
        </AnimatePresence>
      </>
    );
  };
  
  export default OpenModal;

// Add this component to your main layout or specific pages

// Add this component to your main layout or specific pages
  // Add this component to a container with position: relative
