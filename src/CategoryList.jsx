'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { useParams } from 'next/navigation';

import { useRouter } from 'next/router';
import servicesData from './servicesData'; 
import slugify from './slugify'; 

const categories = Object.keys(servicesData).map(key => ({
  id: key,
  name: key.charAt(0).toUpperCase() + key.slice(1),
  services: servicesData[key]
}));

const CategoryList = ({ currentCategoryId, searchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  
  const toggleDropdown = () => setIsOpen(prev => !prev);
  
  const router = useRouter();
  const serviceName = router.serviceName;
  const handleCategoryClick = (categoryId) => {
    router.push(`/services/${categoryId}`);
    setIsOpen(false);
  };

  const handleServiceClick = (categoryId, serviceSlug) => {
    router.push(`/services/${categoryId}/${serviceSlug}`);
    setIsOpen(false);
  };

  const filteredCategories = useMemo(() => {
    return categories.map(category => ({
      ...category,
      services: category.services.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }));
  }, [searchQuery]);

  const renderNestedCategories = (nestedCategories) => {
    return nestedCategories.map(category => (
      <div key={category.id}>
        <button
          onClick={() => handleCategoryClick(category.id)}
          aria-label={`Select ${category.name} category`}
          className={`w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300 ${
            category.id === currentCategoryId ? 'font-bold bg-gray-200' : ''
          }`}
        >
          {category.name}
        </button>
        {category.id === currentCategoryId && category.services.length > 0 && (
          <div className="pl-4">
            {category.services.map(service => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(category.id, slugify(service.name))}
                aria-label={`Select ${service.name} service`}
                className={`w-full text-left px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300 ${
                  slugify(service.name) === serviceName ? 'font-bold bg-gray-200 rounded-md w-64' : ''
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="sm:hidden relative">
      <button 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Toggle category list"
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        <span>{currentCategoryId ? categories.find(cat => cat.id === currentCategoryId)?.name : 'Select Category'}</span>
        {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {renderNestedCategories(filteredCategories)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryList;