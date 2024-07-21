import React, { useState, memo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdMedicalServices } from "react-icons/md";
import { GiScalpel, GiSyringe } from "react-icons/gi";
import ServiceItem from "./ServiceItem";
import servicesData from "./servicesData.json";
import Hair from "./Hair";

const categoryIcons = {
  general: Hair,
  cosmetic: GiSyringe,
  surgical: GiScalpel,
};

const CategoryList = memo(({ category, services, setMobileMenuOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), []);
  const toggleShowAll = useCallback(() => setShowAll(prev => !prev), []);

  const displayedServices = showAll ? services : services.slice(0, 3);
  const IconComponent = categoryIcons[category] || MdMedicalServices;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [showAll]);

  return (
    <div className="mb-2 w-full font-cursive">
      <button
        onClick={toggleExpanded}
        className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-left font-title font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50 active:bg-slate-100"
      >
        <div className="flex items-center">
          <IconComponent className="mr-8 h-6 w-6 text-gray-600" />
          <span className="transition-colors duration-200 hover:text-[#30648B]">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      <div 
        style={{ 
          height: isExpanded ? contentHeight : 0,
          transition: 'height 0.2s ease-in-out',
          overflow: 'hidden'
        }}
      >
        <div ref={contentRef}>
          <ul className="mt-2 w-full flex-1 space-y-2 pb-2">
            {displayedServices.map((service) => (
              <ServiceItem
                key={service.name}
                service={service}
                category={category}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            ))}
            {services.length > 3 && (
              <button
                onClick={toggleShowAll}
                className="ml-3 mt-3 rounded-lg bg-gray-600 px-3 py-1 text-sm text-white transition-colors duration-200 hover:scale-x-105 hover:bg-white hover:text-[#30648B]"
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
});

const ServicesList = memo(({ setMobileMenuOpen }) => (
  <div className="mt-2 w-full space-y-4 px-2">
    {Object.entries(servicesData).map(([category, services]) => (
      <CategoryList
        key={category}
        category={category}
        services={services}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    ))}
  </div>
));

export default ServicesList;