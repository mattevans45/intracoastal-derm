import React from "react";
import { useEffect } from "react";
import logo from "./assets/logo.svg";
import whiteLogo from "./assets/white Transparent PNG logo.png";

import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import logo2 from "./assets/blackandwhite.svg";

const Footer = () => {
  

  return (
    <>
      {/* <footer className="w-full mx-auto pt-5 text-white bg-[#3a3a3a] sm:py-12">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
     
        <a className="basis-3 font-medium mx-auto md:justify-start text-gray-900 mb-4">
          <img
            className="lg:min-w-24 object-fill w-[320px] md:min-w-[180px] md:w-[350px] xl:w-[400px]"
            data-aos="fade-down"
            src={logo}
            alt="Intracoastal Dermatology Logo"
          />
        </a>

       
        <nav
              className="w-full mx-auto list-none mb-2"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
            <h5
              className="font-bold text-white tracking-widest text-lg mt-10 mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Important Links
            </h5>
           
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Office Location
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Services Provided
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Another resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Final resource
                </a>
              </li>
            </nav>
   
          <nav
              className="list-none footer-links"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
            <h2
              className="title-font text-lg font-bold text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              About
            </h2>
          
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Placeholder
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Terms
                </a>
              </li>
            </nav>
       

          <nav className="list-none footer-links" data-aos="slide-right">
            <h2
              className="title-font font-bold text-lg text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Contact Us
            </h2>
          
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  (910) 631-0301
                </a>
              </li>
              <li className="mb-2">
                <a className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">
                  icderm@gmail.com
                </a>
              </li>
            </nav>
            <h2
              className="title-font self-center font-bold text-lg text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Follow Us
            </h2>
            <div className="inline-flex self-center flex-row bg-red-500 flex-wrap mx-auto justify-center  gap-1 sm:justify-center">
    
              <a
                href=""
                className="w-11 h-11 rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <MdOutlineFacebook className="w-full h-full" />
              </a>
              <a
                href=""
                className="w-11 h-11   rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <LuInstagram className="w-full h-full" />
              </a>
              <a
                href=""
                className="w-11 h-11 rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <LuTwitter className="w-full h-full" />
              </a>
    
          </div>

          
          
   

      <div className="container py-4 px-5 static justify-center mx-auto sm:flex sm:justify-center sm:align-middle sm:items-center sm:flex-row">
        <span className="sm:ml-auto sm:mt-0 mt-2 flex flex-1">
          <p className="text-gray-500 text-sm text-center sm:text-center">
            &copy;2023 Intracoastal Dermatology All Rights Reserved by ICD-LTD.
          </p>
        </span>
      </div>
  </div>
  </div>
    </footer> */}

      {/* <footer className="text-white bg-[#3a3a3a] dark:bg-[#3a3a3a]">
  <div className="grid w-full mx-auto lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 justify-center border-2 border-red-500 items-start py-6 max-w-6xl gap-4">
    <div className="col-span-2">
      <div className="flex flex-col h-fit mb-10 mx-auto">
        <Link to="https://instracoastal-dermatology.com/" className="hover:scale-150">
          <img
            src={whiteLogo}
            data-aos="fade-down"
            className="max-h-64 antialiased object-fit sm:min-h-30 md:min-h-32 lg:min-h-50 sm:px-3 mx-auto"
            alt="Intracoastal Dermatology Logo"
          />
        </Link>
      </div>
    </div>

    <div className="md:justify-center md:items-center sm:col-span-1 col-span-1 lg:col-span-1 sm:justify-start w-full border-red-500">
      <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white mb-4">
        Important Links
      </h2>
      <ul>
        <li>
          <Link to="/intracoastal-derm/location/" className="hover:underline block flex-grow">
            Office Location
          </Link>
        </li>
        <li>
          <Link to="/intracoastal-derm/services/" className="hover:underline block flex-grow">
            Services
          </Link>
        </li>
        <li>
          <Link to="/intracoastal-derm/telederm/" className="hover:underline block flex-grow">
            TeleDerm
          </Link>
        </li>
        <li>
          <Link to="/intracoastal-derm/patient-portal/" className="hover:underline block flex-grow">
            Patient Portal
          </Link>
        </li>
        <li>
          <Link to="/intracoastal-derm/make-payment/" className="hover:underline block flex-grow">
            Make Payment
          </Link>
        </li>
      </ul>
    </div>

    <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 w-full">
      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase  dark:text-white">
        Documents and Forms
      </h2>
      <ul>
        <li>
          <Link to="/" className="hover:underline block flex-grow">
            Insurance Accepted
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline block flex-grow">
            Office Policies
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline block flex-grow">
            Medical Release Form
          </Link>
        </li>
      </ul>
    </div>

    <div className="sm:max-md-col-span-2 lg:col-span-1 justify-start">
      <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Follow us
      </h2>
      <ul className="mx-auto flex flex-row">
        <li className="mr-2">
          <Link
            to="/"
            className="rounded-md text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
          >
            <MdOutlineFacebook className="h-12 w-8" />
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/"
            className="rounded-md text-center text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
          >
            <LuInstagram className="h-12 w-8" />
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/"
            className="rounded-md text-center text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
          >
            <LuTwitter className="h-12 w-8" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div className="w-full flex flex-row sm:flex sm:items-center sm:justify-around">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024
      <Link to="https://intracoastal-derm/" className="px-1 hover:underline">
        Intracoastal Dermatology.
      </Link>
      All Rights Reserved.
    </span>
  </div>
</footer> */}
      <footer className="text-white bg-[#3a3a3a] dark:bg-[#3a3a3a]">
        <div className=" mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between lg:flex lg:justify-evenly">
            <div className="mb-6 flex justify-center md:mb-0">
              <Link to="/" className="hover:scale-105 hover:transition-scale hover:duration-700 hover:ease-in-out">
                <img
                  src={whiteLogo}
                  data-aos="fade-up"
                
                  className="max-h-60 antialiased object-fit sm:min-h-30 md:min-h-32 sm:px-3"
                  alt="Intracoastal Dermatology Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Important Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link
                      to="/intracoastal-derm/location/"
                      className="hover:underline block flex-grow"
                    >
                      Office Location
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/services"
                      className="hover:underline block flex-grow"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/telederm"
                      className="hover:underline block flex-grow"
                    >
                      TeleDerm
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/patient-portal"
                      className="hover:underline block flex-grow"
                    >
                      Patient Portal
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/intracoastal-derm/make-payment/"
                      className="hover:underline block flex-grow"
                    >
                      Make Payment
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Forms and Documents
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link to="/" className="hover:underline block flex-grow">
                      Insurance Accepted
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="hover:underline block flex-grow">
                      Office Policies
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/" className="hover:underline block flex-grow">
                      Medical Release Form
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-1">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                  <li className="mr-2">
                    <Link
                      to="/"
                      className="rounded-md text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
                    >
                      <MdOutlineFacebook className="h-12 w-8" />
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link
                      to="/"
                      className="rounded-md text-center text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
                    >
                      <LuInstagram className="h-12 w-8" />
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link
                      to="/"
                      className="rounded-md text-center text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700 flex-grow"
                    >
                      <LuTwitter className="h-12 w-8" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="w-full flex flex-row sm:flex sm:items-center sm:justify-around">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024
              <Link
                to="/"
                className="px-1 hover:underline"
              >
                Intracoastal Dermatology.
              </Link>
              All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
