import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import photo from '../assets/matt-hardy-tt2Oui1hKAM-unsplash.jpg';
import photo2 from '../assets/mourad-saadi-GyDktTa0Nmw-unsplash.jpg';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { LuSmile } from "react-icons/lu";

const containerVariants = {
    hidden: { opacity: 0, y: -72 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 152 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };
  
  const testimonials = [
    { id: 1, name: 'Matt Evans', content: 'Excellent service! My skin has never looked better.', photo: photo },
    { id: 2, name: 'Connie Lewis', content: 'Highly recommend this office for all your dermatology needs.', photo: photo2 },
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
        className="body-font container mx-auto mb-10  text-gray-600"
      >
      <section className="py-14 rounded-xl mx-4 mt-10 bg-gray-100">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-4xl font-captain font-bold mb-8">What Our Patients Say</h2>
          <motion.div className="flex flex-wrap justify-center" ref={ref} variants={containerVariants}>
            {testimonials.map((testimonial) => (
              <motion.div variants={itemVariants} key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="text-lg italic font-poppins mb-4">"{testimonial.content}"</p>
                  <p className="text-sm font-poppins font-bold">{testimonial.name}</p>
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
  