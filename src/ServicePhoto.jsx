import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicePhoto = ({ photoUrl }) => {

  return (
    <div className="relative w-1/2 mt-36">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ opacity:1 }}
        className="rounded-lg overflow-hidden"
      >
        <Image
          src={photoUrl}
          alt="Service"
          className="h-auto"
          style={{ maxWidth: 'object-fit object-center' }}
         
        />
      </motion.div>
   
    </div>
  );
};

export default ServicePhoto;
