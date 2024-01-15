import React from "react";
import { useEffect } from "react";
import logo from "./assets/logo.svg";
import whiteLogo from "./assets/white Transparent PNG logo.png";

import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import logo2 from "./assets/blackandwhite.svg";
import Waves from "./Waves";

const Footer = () => {
  return (
    <footer className="relative z-50  text-gray-700">
  
        <div className="absolute inset-0 -z-20 h-full rotate-[180deg] bg-sky-700 bg-opacity-70 mix-blend-multiply backdrop-blur-sm ">
          <Waves className=" fill" />

        </div>
        <div className="absolute inset-0 -z-20 bg-sky-700 mix-blend-darken bg-opacity-15">
          <Waves className="" />
        </div>
        {/* <div className="sun bg-yellow-600 saturate-125 shadow-2xl drop-shadow-2xl -z-10 blur-sm border-4 bg-clip-content border-yellow-200 shadow-orange-500 absolute top-5 right-5 md:w-40 md:h-40 h-20 w-20 rounded-full"></div> */}

        <div className="z-40 mx-0 grid grid-flow-dense grid-cols-2 justify-stretch gap-5 px-0 py-8 md:mx-auto md:grid-cols-5 md:items-start md:justify-evenly ">
          <div className="col-span-2 mx-auto space-x-5 lg:col-start-1">
            <Link
              to="/"
              className="hover:transition-scale hover:scale-105 hover:duration-700 hover:ease-in-out"
            >
              <img
                src={whiteLogo}
                className="mx-0 size-72 object-contain p-0  md:size-80"
                alt="Intracoastal Dermatology Logo"
              />
            </Link>
          </div>

          <div className="mx-auto">
            <h2 className="text-md mb-6 bg-transparent font-semibold uppercase text-white ">
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
                <Link to="/telederm" className="block hover:underline ">
                  TeleDerm
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/patient-portal" className="block hover:underline ">
                  Patient Portal
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/intracoastal-derm/make-payment/"
                  className="block hover:underline"
                >
                  Make Payment
                </Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto place-items-start justify-items-center">
            <h2 className="text-md mb-6 bg-transparent font-semibold uppercase text-white">
              Forms and Documents
            </h2>
            <ul className="bg-transparent font-medium text-white">
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

          <div className="mx-auto flex flex-col place-content-start place-items-start items-start justify-center  md:mx-0">
            <h2 className="max-w-30 text-md mb-6 bg-transparent font-semibold uppercase text-white ">
              Follow Us
            </h2>

            <ul className="font-medium text-gray-500 dark:text-gray-400 ">
              <li className="mr-2">
                <Link
                  to="/"
                  className="flex-grow  rounded-md text-white hover:border-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <MdOutlineFacebook className="h-12 w-8" />
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/"
                  className="flex-grow rounded-md text-center text-white hover:border-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <LuInstagram className="h-12 w-8" />
                </Link>
              </li>
              <li className="mr-2">
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

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8 dark:border-gray-700" />
        <div className="flex flex-row p-4 sm:flex sm:items-center sm:justify-around">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
