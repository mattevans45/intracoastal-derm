import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import { getServicesByCategory, getAllCategories } from './serviceUtils';

const Services = () => {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryId || "");
  const services = getServicesByCategory(selectedCategory);
  const categories = getAllCategories();

  return (
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
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCategory && (
        <div className="services-list mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${selectedCategory}/${service.id}`}
              className="block border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Services;
