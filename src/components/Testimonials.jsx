'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import photo from "../assets/images/optimized/matt-hardy-tt2Oui1hKAM-unsplash.webp";
import photo2 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash.webp";


const containerVariants = {
  hidden: { opacity: 0, y: -72 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 152 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const testimonials = [
  {
    id: 1,
    name: "Matt Evans",
    content: "Excellent service! My skin has never looked better.",
    photo: photo,
  },
  {
    id: 2,
    name: "Stephanie Price",
    content: "I have been a patient of Dr. Blair Harris for several years and my experience with him has been outstanding. Dr. Harris is incredibly knowledgeable and stays up-to-date with the latest advancements in dermatology. He listens attentively to concerns and provides thoughtful, effective solutions. Dr. Harris handles everything from minor skin issues to significant cosmetic concerns with the highest quality of care. His treatments have transformed my skin, giving it a youthful, radiant glow. Beyond his expertise, Dr. Harris is warm and compassionate, making each visit pleasant and reassuring. I highly recommend Dr. Blair Harris for anyone seeking exceptional dermatological care.",
    photo: photo,
  },
  {
    id: 3,
    name: "Connie Lewis",
    content: "Highly recommend this office for all your dermatology needs.",
    photo: photo2,
  },
];

const Testimonials = () => {
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
      className="body-font container mx-auto mb-10 text-gray-600"
    >
      <section className="mx-4 mt-10 rounded-xl bg-white py-14 shadow-md">
        <div className="mx-auto px-6 text-center">
          <h2 className="mb-8 text-4xl font-bold">
            What Our Patients Say
          </h2>
          <motion.div
            className="flex flex-wrap justify-center"
            ref={ref}
            variants={containerVariants}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                variants={itemVariants}
                key={testimonial.id}
                className="w-full p-4 md:w-1/2 lg:w-1/3"
              >
                <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    height={64}
                    width={64}
                    className="mx-auto mb-4 h-16 w-16 rounded-full"
                  />
                  <p className="mb-4 font-display text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <p className="font-display text-sm font-bold">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
};

export default Testimonials;
