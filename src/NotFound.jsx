import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pageNotFound from  './assets/images/optimized/404-error-template-with-octopus-hand-drawn-style.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-12 font-sans">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you are looking for doesn't exist.</p>
      <img 
        src={pageNotFound}
        alt="Illustration of a 404 error with an octopus, hand-drawn style" 
        className="max-w-full h-auto mx-auto mb-8"
      />
      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => navigate(-1)} 
          className="px-6 py-2 text-white bg-[#30548B] rounded hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          Go Back
        </button>
        <Link 
          to="/" 
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-300 focus:outline-none"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
