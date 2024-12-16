import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";
import ServiceCard from "./ServiceCard";
import CategoryList from "./CategoryList";
import servicesData from "./servicesData";
import { getAllCategories } from "./serviceUtils.js";
import slugify from "./slugify.js";
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
  const category = categories.find((cat) => cat.id === categoryId);
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

  const getCategoryDescription = (categoryId) => {
    switch (categoryId) {
      case "general":
        return "Our general dermatology services cover a wide range of skin conditions. Expert care for acne, eczema, psoriasis, and more.";
      case "cosmetic":
        return "Enhance your appearance with our cosmetic dermatology treatments. Botox, fillers, laser treatments, and more.";
      case "surgical":
        return "Advanced surgical dermatology procedures for skin cancer, mole removal, and other skin conditions requiring surgical intervention.";
      default:
        return "Comprehensive dermatology services covering general, cosmetic, and surgical treatments for all your skin care needs.";
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${category ? category.name : "Services"} - Intracoastal Dermatology`}</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${category ? category.name : "Services"} - Intracoastal Dermatology`}
        />
        <meta name="description" content={getCategoryDescription(categoryId)} />

        <meta
          property="og:image"
          content="URL to your logo or a representative image"
        />
        <meta
          property="og:url"
          content={`https://intracoastal-dermatology.com/services/${categoryId}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${category ? category.name : "Services"} - Intracoastal Dermatology`}
        />
        <meta
          name="twitter:description"
          content={getCategoryDescription(categoryId)}
        />
        <meta
          name="twitter:image"
          content="URL to your logo or a representative image"
        />
        <link
          rel="canonical"
          href={`https://intracoastal-dermatology.com/services/${categoryId}`}
        />
      </Helmet>

      <motion.div
        className="services-page container mx-auto max-w-7xl bg-neutral-100 p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Breadcrumb />

        <div className="categories-list mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-no-wrap relative flex h-14 w-full max-w-screen-md cursor-pointer overflow-hidden rounded-3xl shadow-lg drop-shadow-lg sm:flex sm:h-64 sm:max-w-md lg:max-w-lg ${cat.id === categoryId ? "scale-105 ring-4 ring-blue-500 transition-all duration-300 ease-out" : "saturate-75 scale-90 brightness-[45%] transition-all duration-300 ease-in hover:blur-0"}`}
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
                  <h1 className="text-shadow-custom mb-2 text-2xl font-bold md:text-3xl">
                    {cat.name}
                  </h1>
                  <p className="text-center text-sm leading-relaxed sm:text-base">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 block sm:hidden">
          <CategoryList
            categories={categories}
            currentCategoryId={categoryId}
            expandedCategoryId={expandedCategoryId}
            onCategoryClick={handleCategoryClick}
          />
        </div>
        <h2 className="mt-6 hidden text-center text-3xl font-bold sm:relative sm:mt-8">
          {category ? category.name : "Services"}
        </h2>
        <div className="services-list mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id || slugify(service.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex"
              onClick={() => handleViewMore(service.name)}
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
