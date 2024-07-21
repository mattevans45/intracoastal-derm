import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAllCategories } from "./serviceUtils";

const Services = () => {
  const categories = getAllCategories();

  return (
    <>
      <Helmet>
        <title>Our Services - Intracoastal Dermatology</title>
        <meta
          name="description"
          content="Explore our dermatology services at Intracoastal Dermatology. Expert care for all your dermatological needs."
        />
        <link rel="canonical" href="https://intracoastal-dermatology.com/services" />
      </Helmet>
      <motion.div
        className="services-page bg-gray-50 mx-auto max-w-7xl p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="categories-list mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link
                to={`/services/${category.id}`}
                className="block border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                <h2 className="text-2xl font-semibold">{category.name}</h2>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Services;
