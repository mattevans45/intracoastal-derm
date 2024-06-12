import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const CategoryList = ({ categories, currentCategoryId, currentServiceId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentCategory = categories.find(category => category.id === currentCategoryId);

  return (
    <div className="mx-auto w-fit container">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        <span>{currentCategory ? currentCategory.name : 'Select Category'}</span>
        {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            {categories.map(category => (
              <div key={category.id}>
                <Link
                 onClick={() => setIsOpen(!isOpen)} 
                  to={`/services/${category.id}`}
                  className={`inline-flex px-4 py-2 mt-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-300 ${
                    category.id === currentCategoryId ? 'font-bold' : ''
                  }`}
                >
                  {category.name}
                </Link>
                {category.id === currentCategoryId && category.services && (
                  <div className="pl-4 mt-1">
                    {category.services.map(service => (
                      <Link
                      onClick={() => setIsOpen(!isOpen)} 
                        key={service.id}
                        to={`/services/${category.id}/${service.id}`}
                        className={`block px-4 py-2 mt-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-300 ${
                          service.id.toString() === currentServiceId ? 'font-bold' : ''
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryList;
