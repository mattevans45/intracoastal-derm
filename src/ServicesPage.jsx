import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import CategoryList from "./CategoryList";

const servicesData = {
  general: [
    { id: 1, name: "Psoriasis", description: "Psoriasis is a chronic auto-immune skin disorder" },
    { id: 2, name: "Atropic Dermatitis",  description: "Atopic dermatitis, commonly known as eczema, is a chronic inflammatory skin condition characterized by red, itchy, and inflamed skin"},
    { id: 3, name: "Bullous Diseases", description: "Various blood tests." },
    { id: 4, name: "Lichen Planus", description: "Lichen Planus." },
    { id: 5, name: "Vitiligo", description: "Vitiligo." },
    { id: 6, name: "Acne", description: "Acne." },
    { id: 7, name: "Rosacea", description: "Rosacea." },
    {
      id: 8,
      name: "Skin Cancer Screening",
      description: "Skin Cancer Screening.",
    },
    { id: 9, name: "Rash", description: "Rash." },
    { id: 10, name: "Growths", description: "Growths." },
    { id: 11, name: "Skin discoloration", description: "Skin discoloration." },
    { id: 12, name: "Excessive sweating", description: "Excessive sweating." },
  ],
  cosmetic: [
    {
      id: 1,
      name: "Botox",
      description:
        "Reduces the appearance of wrinkles by temporarily paralyzing muscles.",
    },
    { id: 2, name: "Dermal Fillers", description: "Plump and lift the skin." },
    { id: 3, name: "Lasers", description: "Lasers." }
  ],
  surgical: [
    { id: 2, name: "Skin Biopsy", description: "Diagnose skin conditions." },
    { id: 3, name: "Skin Cancer Removal", description: "Skin Cancer Removal." },
    { id: 4, name: "Mohs Surgery", description: "Mohs Surgery." },
    { id: 5, name: "Scar Revision", description: "Scar Revision." },
    { id: 6, name: "Mole Removal", description: "Mole Removal." },
  ],
};

const categories = [
  { id: "general", name: "General Dermatology" },
  { id: "cosmetic", name: "Cosmetic Dermatology" },
  { id: "surgical", name: "Surgical Dermatology" },
];

const ServicesPage = () => {
  const { categoryId } = useParams();
  const services = servicesData[categoryId] || [];

  return (
    <motion.div 
      className="services-page container bg-gray-50 mx-auto max-w-7xl p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CategoryList categories={categories} />
      <div className="services-list mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-flow-row lg:items-start">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${categoryId}/${service.id}`}
            className="block border border-gray-400 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;
