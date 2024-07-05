import React from 'react';
import { Link, useParams } from 'react-router-dom';
import slugify from './slugify';
import servicesData from './servicesData.json';


const ServiceLink = ({ categoryId, service }) => (
  <li key={service.id}>
    <Link
      to={`/services/${categoryId}/${slugify(service.name)}`}
      className="block font-poppins font-medium px-2 py-1 text-[#4d4d4d] transition-all duration-200 hover:bg-[#30648B] hover:text-white rounded"
    >
      {service.name}
    </Link>
  </li>
);

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

const SideNavbar = () => {
  const { categoryId } = useParams();

  return (
    <aside className="w-full ml-0 mx-auto p-2 font-bold text-md font-poppins bg-gray-200 rounded-lg shadow-md">
  
      <ul className="space-y-4">
        {categories.map(category => (
          <li key={category.id}>
            <h3 className="font-captain text-md text-[#4d4d4d] font-semibold mb-2">{category.name}</h3>
            <ul className="space-y-1 pl-2">
              {servicesData[category.id].map(service => (
                <ServiceLink key={service.id} categoryId={category.id} service={service} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNavbar;
