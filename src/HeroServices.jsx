'use client';

import React, { useEffect, useRef, useMemo, useCallback, Suspense } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { GiScalpel, GiSyringe } from "react-icons/gi";
import boardwalk from "./assets/images/optimized/alex-CWwdzVtaGKs-unsplash.webp";
import cosmeticDerm from "./assets/images/optimized/alexander-krivitskiy-zle2_jp-AUw-unsplash.webp";
import cream from "./assets/images/optimized/kelsey-curtis-kD9qprR6HBI-unsplash.webp";
import GeneralDermIcon from "./components/Icon";
import HeroServiceCard from './HeroServiceCard'; // Assuming HeroServiceCard is a regular component, not lazy-loaded

const HeroServices = React.memo(() => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -220 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }), []);

  const services = useMemo(() => [
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
  ], []);

  const renderServiceCard = useCallback((service, index) => (
    <Suspense key={index} fallback={<div>Loading Service...</div>}>
      <HeroServiceCard {...service} />
    </Suspense>
  ), []);

  return (
    <section className="font-Playfair mx-auto mt-4">
      <h2 className="mx-auto font-Playfair text-center text-4xl font-bold md:text-5xl">
        <span className="text-[#4d4d4d]">Services Offered</span>
      </h2>
      <div className="container my-auto mx-auto px-0 sm:px-5 rounded-lg py-5">
        <motion.div
          ref={ref}
          className="flex flex-wrap"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map(renderServiceCard)}
        </motion.div>
      </div>
    </section>
  );
});

export default HeroServices;
