import React from 'react';

const ServiceCard = ({ service, onViewMore }) => {
  return (
    <div className="flex flex-col flex-1 h-full p-4 sm:p-6 bg-white shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl cursor-pointer">
      <span className="inline-block py-1 px-2 rounded bg-neutral-100 text-indigo-500 text-xs font-medium tracking-widest">
        {service.category}
      </span>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-3 mb-3">
        {service.name}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
        {service.description}
      </p>
      
      <div className="mt-auto">
        <div className="flex items-center">
          
         
        <div className="flex ml-auto items-center mt-4">
          <button 
            onClick={onViewMore} 
            className="bg-[#30548B] text-white font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
          >
            Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
