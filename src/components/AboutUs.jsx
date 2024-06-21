import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -450 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.section
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="body-font mt-24 text-gray-600"
      >
        <section className="bg-gray-100 py-16 shadow-sm backdrop-blur-0">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              About Intracoastal Dermatology
            </h2>
            <p className="prose-lg mx-auto text-gray-700">
              Welcome to Intracoalstal Dermatology. We are dedicated to
              providing the best skin care solutions tailored to your needs. Dr.
              Harris and his team are committed to providing the highest quality
              of care to our patients. We offer a wide range of services to help
              you achieve healthy, beautiful skin. Our team of experts is here
              to help you look and feel your best. Contact us today to schedule
              an appointment. We look forward to meeting you!
            </p>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default AboutUs;
