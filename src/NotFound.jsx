
import Link from 'next/link';
import Image from 'next/image';
import pageNotFound from  './assets/images/optimized/404-error-template-with-octopus-hand-drawn-style.png';

const NotFound = () => {


  return (
    <div className="text-center p-12 font-sans">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you are looking for doesn't exist.</p>
      <Image 
        src={pageNotFound}
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        alt="Illustration of a 404 error with an octopus, hand-drawn style" 
        className="max-w-full h-auto mx-auto mb-8"
      />
      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => window.history.back()} 
          className="px-6 py-2 text-white bg-[#30548B] rounded hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          Go Back
        </button>
        <Link 
          href="/" 
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-300 focus:outline-none"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
