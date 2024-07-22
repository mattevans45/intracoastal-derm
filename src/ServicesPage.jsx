import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import CategoryList from "./CategoryList";
import servicesData from './servicesData';
import { getAllCategories } from "./serviceUtils.js";
import slugify from './slugify.js';
import generalDermatology from "./assets/images/optimized/amanda-dalbjorn-fvInY-Gh7sc-unsplash.webp";
import cosmeticDermatology from "./assets/images/optimized/angelo-pantazis-h0AnGGgseio-unsplash.webp";
import surgicalDermatology from "./assets/images/optimized/ozkan-guner-6E-3v5NZxMw-unsplash.webp";

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
  const [expandedCategoryId, setExpandedCategoryId] = useState(categoryId);
  const navigate = useNavigate();

  const categories = getAllCategories();
  const category = categories.find(cat => cat.id === categoryId);
  const services = category ? category.services : [];

  const categoriesPhotos = {
    general: generalDermatology,
    cosmetic: cosmeticDermatology,
    surgical: surgicalDermatology,
  };

  const handleViewMore = (serviceName) => {
    navigate(`/services/${categoryId}/${slugify(serviceName)}`);
  };

  const handleCategoryClick = (categoryId) => {
    setExpandedCategoryId(categoryId);
    navigate(`/services/${categoryId}`);
  };

  return (
    <>
      <Helmet>
        <title>{`${category ? category.name : 'Services'} - Intracoastal Dermatology`}</title>
        <meta name="description" content={`Explore our ${category ? category.name : 'services'} at Intracoastal Dermatology. Expert care for all your dermatological needs.`} />
        <link rel="canonical" href={`https://intracoastal-dermatology.com/services/${categoryId}`} />
      </Helmet>
      <motion.div 
        className="services-page container bg-neutral-100 mx-auto max-w-7xl p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        <div className="categories-list mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-full max-w-screen-md cursor-pointer sm:flex flex flex-no-wrap sm:h-64 h-14 overflow-hidden rounded-3xl shadow-lg drop-shadow-lg sm:max-w-md lg:max-w-lg ${cat.id === categoryId ? 'ring-4 ring-blue-500 scale-105 ' : 'brightness-[45%] saturate-75 hover:blur-0 scale-90'}`}
            >
              <Link
                to={`/services/${cat.id}`}
                className="block h-full w-full"
                onClick={() => handleCategoryClick(cat.id)}
              >
                <img
                  src={categoriesPhotos[cat.id]}
                  loading="eager"
                  width={500}
                  height={500}
                  alt={cat.name}
                  className="h-14 w-full object-cover sm:h-80 md:h-96 lg:h-72"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-4 text-white">
                  <h2 className="text-shadow-custom mb-2 text-2xl font-bold md:text-3xl">
                    {cat.name}
                  </h2>
                  <p className="text-center text-sm leading-relaxed sm:text-base">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="sm:hidden mt-3 block">
        <CategoryList 
          categories={categories}
          currentCategoryId={categoryId}
          expandedCategoryId={expandedCategoryId}
          onCategoryClick={handleCategoryClick}
        />
        </div>
        <h2 className="text-3xl font-bold text-center mt-6 sm:mt-8">
          {category ? category.name : "Services"}
        </h2>
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
