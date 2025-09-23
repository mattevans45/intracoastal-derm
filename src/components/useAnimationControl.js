'use client';

import { useRef, useEffect } from 'react';
import { useAnimation, useInView } from "framer-motion";

const useAnimationControl = () => {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls };
};

export default useAnimationControl;