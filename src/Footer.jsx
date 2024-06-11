import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFacebook } from 'react-icons/md';
import { LuInstagram, LuTwitter } from 'react-icons/lu';
import whiteLogo from "./assets/white Transparent PNG logo.png";
import footerimg from "./assets/erda-estremera-aSFZKeZiHPc-unsplash.jpg";

const Footer = () => {
  return (
    <footer className="relative font-display leading-normal uppercase text-white z-10">
      <div className="absolute inset-0 bg-gray-500">
        <img
          src={footerimg}
          className="absolute inset-0 h-full w-full object-cover backdrop-blur-sm mix-blend-multiply z-0"
          alt="background"
        />
      </div>
      <div className="relative grid grid-cols-2 justify-stretch gap-5 px-0 py-8 md:mx-auto md:grid-cols-5 md:items-start md:justify-evenly z-10">
        <div className="col-span-2 mx-auto space-x-5 lg:col-start-1 z-20">
          <Link to="/" className="hover:transition-scale hover:scale-105 hover:duration-700 hover:ease-in-out">
            <img
              src={whiteLogo}
              className="size-72 object-contain p-0 mx-3 md:size-80"
              alt="Intracoastal Dermatology Logo"
            />
          </Link>
        </div>
        <div className="mx-auto z-20">
          <h2 className="text-md mb-6 bg-transparent font-semibold uppercase text-white">
            Important Links
          </h2>
          <ul className="bg-transparent font-medium text-white">
            <li className="mb-2">
              <Link to="/location/" className="block hover:underline">
                Office Location
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="block hover:underline">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/telederm" className="block hover:underline">
                TeleDerm
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/patient-portal" className="block hover:underline">
                Patient Portal
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/intracoastal-derm/make-payment/" className="block hover:underline">
                Make Payment
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto place-items-start justify-items-center z-20">
          <h2 className="text-md mb-6 bg-transparent font-bold uppercase text-white">
            Forms and Documents
          </h2>
          <ul className="bg-transparent font-display font-[500] text-white">
            <li className="mb-2">
              <Link to="/" className="block flex-grow hover:underline">
                Insurance Accepted
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="block flex-grow hover:underline">
                Office Policies
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="block flex-grow hover:underline">
                Medical Release Form
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto flex flex-col items-start justify-center md:mx-0 z-20">
          <h2 className="max-w-30 text-md mb-6 bg-transparent font-semibold uppercase text-white">
            Follow Us
          </h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mr-2 mb-2">
              <Link
                to="/"
                className="flex-grow rounded-md text-white hover:border-gray-700 hover:bg-gray-600 hover:text-white"
              >
                <MdOutlineFacebook className="h-12 w-8" />
              </Link>
            </li>
            <li className="mr-2 mb-2">
              <Link
                to="/"
                className="flex-grow rounded-md text-center text-white hover:border-gray-700 hover:bg-gray-600 hover:text-white"
              >
                <LuInstagram className="h-12 w-8" />
              </Link>
            </li>
            <li className="mr-2 mb-2">
              <Link
                to="/"
                className="flex-grow rounded-md text-center text-white hover:border-gray-700 hover:bg-gray-600 hover:text-white"
              >
                <LuTwitter className="h-12 w-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 z-20" />
      <div className="flex flex-row p-4 sm:flex sm:items-center sm:justify-around z-20">
        <span className="text-sm text-white sm:text-center">
          © 2024
          <Link to="/" className="px-1 hover:underline">
            Intracoastal Dermatology.
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
