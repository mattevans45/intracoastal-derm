import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import CategoryList from "./CategoryList";
import servicesData from './servicesData';

const slugify = (name) => {
  return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

const categories = [
  {
    id: "general",
    name: "General Dermatology",
    services: servicesData.general,
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dermatology",
    services: servicesData.cosmetic,
  },
  {
    id: "surgical",
    name: "Surgical Dermatology",
    services: servicesData.surgical,
  },
];

const ServicesPage = () => {
  const { categoryId } = useParams();

  const category = categories.find((cat) => cat.id === categoryId);
  const services = category ? category.services : [];

  if (!category) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <p className="mt-4 text-gray-600">Please select a valid category from the list below.</p>
        <CategoryList categories={categories} />
      </div>
    );
  }

  return (
    <motion.div 
      className="services-page container bg-gray-50 mx-auto max-w-7xl p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h1>
      <CategoryList categories={categories} currentCategoryId={categoryId} />
      <div className="services-list mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/services/${categoryId}/${slugify(service.name)}`}
              className="block h-full border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition duration-150 ease-in-out"
            >
              <ServiceCard service={service} />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;