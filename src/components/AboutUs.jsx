import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mx-auto container rounded-lg">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mx-5 py-5 text-gray-600"
      >


        <motion.section
          variants={containerVariants}
          className="bg-white py-10 shadow-sm rounded-xl"
        >
                  <motion.h2
          variants={containerVariants}
          className="text-4xl  rounded-xl text-center py-2 mb-10 bg-white  text-gray-600 font-bold"
        >
          About Intracoastal Dermatology
        </motion.h2>
          <div className="rounded-xl px-6 text-center">
            <motion.span
              variants={containerVariants}
              className="text-pretty leading-relaxed text-gray-700"
            >
              Welcome to Intracoastal Dermatology. We are dedicated to providing the best skin care solutions tailored to your needs.
              <p className="mt-1">
                Dr. Harris and his team are committed to providing the highest quality of care to our patients. We offer a wide range of services to help you achieve healthy, beautiful skin.
              </p>
              <p>
                Our team of experts is here to help you look and feel your best. Contact us today to schedule an appointment. We look forward to meeting you!
              </p>
            </motion.span>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutUs;
