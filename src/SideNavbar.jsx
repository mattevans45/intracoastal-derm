'use client';

import React from 'react';
import Link from 'next/link';
import slugify from './slugify';
import servicesData from './servicesData.json';

const ServiceLink = ({ categoryId, service }) => (
  <li key={service.id}>
    <Link href={`/services/${categoryId}/${slugify(service.name)}`} className="block rounded px-2 py-1 font-playfair font-medium text-[#4d4d4d] transition-all duration-200 hover:bg-[#30648B] hover:text-white active:bg-[#30648B] active:text-white">
      {service.name}
    </Link>
  </li>
);

const SideNavbar = () => {
  const categories = Object.entries(servicesData).map(([key, value]) => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    services: value,
  }));

  

  return (
    <nav className="shrink text-md mx-auto ml-0 w-full rounded-lg bg-gray-200 p-2 font-playfair font-bold shadow-md">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id}>
            <h3 className="text-md mb-2 font-playfair font-semibold text-[#4d4d4d]">
              {category.name}
            </h3>
            <ul className="space-y-1 pl-2">
              {category.services.map((service) => (
                <ServiceLink key={service.id} categoryId={category.id} service={service} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
