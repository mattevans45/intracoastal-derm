'use client';
import { memo } from 'react';
import {motion} from 'framer-motion';

const AnimatedText = memo(({ text }) => (
    <motion.span
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        staggerChildren: 0.05
      }}
      className="text-3xl sm:text-5xl font-playfair uppercase tracking-wide text-white"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.115 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  ));

  export default AnimatedText;