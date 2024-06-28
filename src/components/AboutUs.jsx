import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 152 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={containerVariants}
      className="z-20 container mx-auto rounded-lg"
    >
      <motion.div
      
        className="mx-5 py-5 text-gray-600"
      >
        <div className="rounded-xl bg-white py-10 shadow-sm">
          <motion.h2
          key={"header"}
            variants={itemVariants}
            className="font-bold mb-10 rounded-xl bg-white py-2 text-center text-4xl text-gray-600"
          >
            About Intracoastal Dermatology
          </motion.h2>
          <div className="rounded-xl px-6 text-center">
            <motion.span
              variants={itemVariants}
              className="text-pretty leading-relaxed text-gray-700"
            >
              Welcome to Intracoastal Dermatology. We are dedicated to providing
              the best skin care solutions tailored to your needs.
              <p className="mt-1">
                Dr. Harris and his team are committed to providing the highest
                quality of care to our patients. We offer a wide range of
                services to help you achieve healthy, beautiful skin.
              </p>
              <p>
                Our team of experts is here to help you look and feel your best.
                Contact us today to schedule an appointment. We look forward to
                meeting you!
              </p>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
