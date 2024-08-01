'use client';
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
  hidden: { opacity: 0, y: 50 },
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
      className="container z-20 mx-auto rounded-lg"
    >
      <motion.div className="mx-5 py-5 text-zinc-600">
        <div className="rounded-xl bg-white py-10 shadow-md">
          <motion.h2
            key={"header"}
            variants={itemVariants}
            className="mb-8 rounded-xl bg-white py-2 text-center text-3xl font-bold text-zinc-600"
          >
            Why Choose Intracoastal Dermatology and Skin Surgery?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 ">
            {[
              {
                title: "Expert Care",
                description: "Dr. Harris and his professional staff provide excellent care combining decades of experience with cutting-edge treatments.",
                icon: "👨‍⚕️"
              },
              {
                title: "Personalized Approach",
                description: "Tailored treatment plans addressing your unique skin concerns and goals.",
                icon: "🎯"
              },
              {
                title: "Comprehensive Services",
                description: "From medical and surgical dermatology to cosmetic procedures, we've got all your skin health needs covered.",
                icon: "🏥"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center bg-zinc-100 p-2 rounded-lg">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;