import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;