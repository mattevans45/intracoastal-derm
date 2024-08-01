'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CardContent from './CardContent';

const AnimatedLogoAndCard = ({ logoSrc }) => {
  return (
    <div className="relative h-full flex flex-col mt-16 sm:mt-3 items-start sm:items-center sm:justify-center justify-start">
      <motion.div
        className="w-full relative"
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >

          <Image
            src={logoSrc}
            alt="Logo"
            width={1800}
            height={100}
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 100vw, 
                   100vw"
            className="px-3 py-2 sm:p-7 relative sm:mx-auto  h-auto z-10 w-screen"
            priority
          />
          <div className="absolute inset-0 backdrop-blur-sm backdrop-brightness-90 backdrop-saturate-150 rounded-lg"></div>
      
      </motion.div>
      <div className='bg-transparent w-full h-auto mx-auto'>
        <CardContent />
      </div>
    </div>
  );
};

export default AnimatedLogoAndCard;