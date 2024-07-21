import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = ({ services, categoryName }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {services.map((service, index) => (
            <div key={index} className="p-12 md:w-1/2 w-full">
              <ServiceCard 
                service={{
                  ...service,
                  category: categoryName,
                  providerName: "Dr. John Doe", // Replace with actual provider name
                  providerTitle: "Dermatologist", // Replace with actual provider title
                  image: "https://dummyimage.com/104x104", // Replace with actual image URL
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;