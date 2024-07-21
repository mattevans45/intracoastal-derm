import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import CategoryList from "./CategoryList";
import servicesData from './servicesData';
import slugify from './slugify.js';

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

const ServicesPage = ({ category: categoryId }) => {
  const navigate = useNavigate();

  const category = categories.find(cat => cat.id === categoryId);
  const services = category ? category.services : [];

  
  const handleViewMore = (serviceName) => {
    navigate(`/services/${categoryId}/${slugify(serviceName)}`);
  };

  return (
    <>
      <Helmet>
        <title>{`${category.name} Services - Intracoastal Dermatology`}</title>
        <meta name="description" content={`Explore our ${category.name} services at Intracoastal Dermatology. Expert care for all your dermatological needs.`} />
        <link rel="canonical" href={`https://intracoastal-dermatology.com/services/${categoryId}`} />
      </Helmet>
      <motion.div 
        className="services-page container bg-neutral-100 mx-auto max-w-7xl p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">{category.name}</h1>
        <CategoryList 
          categories={categories}
          currentCategoryId={categoryId}
        />
        <div className="services-list mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.id || slugify(service.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex"
            >
              <ServiceCard
                service={{
                  ...service,
                  category: category.name,
                  providerName: "Dr. Blair Harris",
                  providerTitle: "Dermatologist",
                  image: service.image || "https://dummyimage.com/104x104",
                }}
                onViewMore={() => handleViewMore(service.name)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;