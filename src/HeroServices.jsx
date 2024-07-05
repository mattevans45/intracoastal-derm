import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GiScalpel, GiSyringe } from "react-icons/gi";
import boardwalk from "./assets/images/optimizations/alex-CWwdzVtaGKs-unsplash.webp";
import cosmeticDerm from "./assets/images/optimizations/alexander-krivitskiy-zle2_jp-AUw-unsplash.webp";
import cream from "./assets/images/optimizations/kelsey-curtis-kD9qprR6HBI-unsplash.webp";
import GeneralDermIcon from "./components/Icon";

const ImageCompressed = ({ src, alt, className }) => (
  <img
    src={src}
    loading='lazy'
    srcSet={`${src} 1x, ${src} 2x`}
    sizes="(max-width:600) 100vw, 50vw"
    alt={alt}
    className={className}
  />
);

const containerVariants = {
  hidden: { opacity: 0, y: -220 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroServices = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="body-font mx-auto mt-4">
      <h2 className="mx-auto text-center text-4xl font-bold md:text-5xl">
        <span className="text-[#4d4d4d]">Services Offered</span>
      </h2>
      <div className="container mx-auto rounded-lg px-5 py-5">
        <motion.div
          ref={ref}
          loading="lazy"
          className="flex flex-wrap"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, backgroundImage, to }) => {
  return (
    <>
    
    <motion.div
      className="relative p-4 md:w-1/3"
      whileHover={{ scale: 1.02 }}
      variants={cardVariants}
    >
      <div className="flex h-full flex-col rounded-3xl border-opacity-60 bg-gray-100 shadow-sm">
        <ImageCompressed
          className="w-full object-cover rounded-t-3xl object-center md:h-36 lg:h-48"
          src={backgroundImage}
          alt={title}
        />
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-center">
            <Icon className="h-12 w-12 text-[#30548B]" />
            <h1 className="ml-4 font-display text-[#4d4d4d] text-xl font-600">{title}</h1>
          </div>
          <p className="mb-3 flex-grow prose leading-relaxed">{description}</p>
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg font-medium text-white shadow-xl transition-colors"
            >
              <Link
                to={to}
                className="text-md mt-3 inline-flex items-center rounded-xl bg-[#30548B] p-2 leading-6 text-white duration-500 ease-in-out hover:bg-[#30548B]/90"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

const services = [
  {
    icon: GeneralDermIcon,
    title: "General Dermatology",
    description:
      "Psoriasis, Atopic Dermatitis (Eczema), Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin Discoloration, and excessive sweating.",
    backgroundImage: cream,
    to: "/services/general",
  },
  {
    icon: GiSyringe,
    title: "Cosmetic Dermatology",
    description:
      "Neuromodulators like Botox, Dermal Filler, and laser-based treatments.",
    backgroundImage: cosmeticDerm,
    to: "/services/cosmetic",
  },
  {
    icon: GiScalpel,
    title: "Surgical Dermatology",
    description:
      "Skin Cancer Removal, Mohs Surgery, Scar Revision, mole removal, and more.",
    backgroundImage: boardwalk,
    to: "/services/surgical",
  },
];

export default HeroServices;
