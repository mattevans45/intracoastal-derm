import headshot from "../assets/DrHarrisHeadshotFinal.jpg";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

const teamMembers = [
  {
    id: 1,
    name: "Dr. Blair Harris (DO, FAAD)",
    role: "Board-Certified Dermatologist, Fellowship-Trained Mohs Surgeon",
    photo: headshot,
  },
];

const MeetTheTeam = () => {
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
    <div className="container mx-auto">
  
    <motion.section
      animate={controls}
      variants={containerVariants}
      ref={ref}
      className="bg-white rounded-xl mx-4 py-16"
    >

      <div className="">
        <h2 className="mb-8 text-gray-600 text-center text-4xl font-bold">Meet Our Team</h2>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center"
        >
          {teamMembers.map((member) => (
            <motion.div
              variants={itemVariants}
              key={member.id}
              className="w-full p-4 md:w-1/2 lg:w-1/4"
            >
              <div className="rounded-lg bg-gray-100 p-6 text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-4 rounded-full object-cover object-center"
                />
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
};

export default MeetTheTeam;
