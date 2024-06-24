import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GiAncientRuins, GiCancer, GiCrackedMask, GiDoctorFace, GiLoveInjection, GiScalpel } from "react-icons/gi";
import { MdMedicalServices, MdOutlinePermCameraMic } from "react-icons/md";


const containerVariants = {
    hidden: { opacity: 0, y: -72 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 152 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };
  

const services = [
    { id: 1, name: 'Skin Consultation', description: 'Personalized skin consultation and treatment plans.', icon: <GiDoctorFace /> },
    { id: 2, name: 'Acne Treatment', description: 'Effective treatments to manage and reduce acne.', icon: <GiLoveInjection /> },
    { id: 3, name: 'Mohs Surgery', description: 'Dr. Harris is a fellowship trained Mohs Surgeon. During this technique, he removes layers of skin and examines them under a microscope until no cancer cells are detected, ensuring minimal damage to healthy tissue.', icon: <GiScalpel /> },
    { id: 4, name: 'Skin Cancer Screening', description: 'Pre-Cancers Actinic Keratosis, Basal Cell Carcinoma', icon:<MdMedicalServices /> },

  ];
  
  const ServicesLanding = () => {
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
        className="body-font mx-auto text-gray-600 container"
      >
       
        <section className="mx-4 mt-4 py-14 rounded-xl bg-white">
          <div className="px-6">
          <h2 className="text-4xl font-bold text-gray-600 text-center mb-12 mx-3 ">Our Services</h2>
            <motion.div className="flex flex-wrap justify-center" variants={containerVariants}>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="w-full md:w-1/2 lg:w-1/4 p-4"
                  variants={itemVariants}
                >
                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                    <div className="text-5xl mb-4 text-[#30548B] flex-1 ">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.section>
    );
  };
  
  export default ServicesLanding;
  