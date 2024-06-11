import React from "react";
import { useEffect, useRef } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GiScalpel, GiSyringe } from "react-icons/gi";
import boardwalk from "./assets/alex-CWwdzVtaGKs-unsplash.jpg";
import image from "./assets/sean.jpg";
import cream from "./assets/kelsey-curtis-kD9qprR6HBI-unsplash.jpg";
import GeneralDermIcon from "./components/Icon";

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
  visible: { opacity: 1, y: 0, delay:2, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroServices = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="body-font mt-24 text-gray-600">
      <h2 className="mx-auto text-center text-4xl font-bold md:text-5xl">
        <span className="text-slate-600">Services Offered</span>
      </h2>
      <div className="container mx-auto px-5 py-5">
        <motion.div
          ref={ref}
          className="-m-4 flex flex-wrap"
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
    <motion.div
      className="relative p-4 md:w-1/3"
      whileHover={{ scale: 1.02 }}
      variants={cardVariants}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 bg-gray-100 shadow-sm">
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={backgroundImage}
          alt={title}
        />
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-center justify-start">
            <Icon className="h-12 w-12 fill-[#30548B] stroke-[#30548B] text-[#30548B] drop-shadow-2xl" />
            <h1 className="title-font ml-4 text-lg font-medium text-gray-900">
              {title}
            </h1>
          </div>
          <p className="mb-3 flex-grow font-captain text-lg leading-relaxed">
            {description}
          </p>
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg font-medium text-white shadow-xl transition-colors"
            >
              <Link
                to={to}
                className="text-md mt-3 inline-flex items-center rounded-xl bg-[#30548B] p-2 leading-6 text-white duration-500 ease-in-out hover:bg-[#30548B]/90 hover:text-white hover:shadow-lg hover:transition-all"
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
  );
};

const services = [
  {
    icon: GeneralDermIcon,
    title: "General Dermatology",
    description:
      "Psoriasis, Atopic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin Discoloration, and excessive sweating.",
    backgroundImage: cream,
    to: "/services/general",
  },
  {
    icon: GiSyringe,
    title: "Cosmetic Dermatology",
    description:
      "Neuromodulators like Botox, Dermal Filler, and laser-based treatments.",
    backgroundImage: image,
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
