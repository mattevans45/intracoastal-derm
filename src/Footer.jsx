import React from "react";
import { useEffect } from "react";
import logo from "./assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import ContactSection from "./ContactSection";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.duration = 1200;
  }, []);

  return (
    <footer className="mt-auto mx-0 pt-5 text-white bg-[#3a3a3a] sm:py-12">
      <div className="container flex flex-col w-full mx-auto self-start justify-center">
        <div className="text-center w-fit mx-auto md:text-left md:ml-4 lg:flex lg:flex-row lg:gap-12 lg:justify-center xl:flex xl:flex-row xl:self-stretch xl:mx-14 xl:content-stretch md:flex-row md:flex md:w-fit md:mx-auto md:justify-center">
          <a className="flex font-medium w-fit md:justify-start text-gray-900 mb-4">
            <img
              className="object-fill w-[320px] md:min-w-[180px] md:w-[350px] xl:w-[400px] max-w-full"
              data-aos="fade-down"
              src={logo}
              alt="Intracoastal Dermatology Logo"
            />
          </a>

          <div className="container w-full md:w-auto text-center md:text-left md:ml-1 flex flex-col md:flex-row">
            <div className="lg:w-fit lg:flex sm:justify-center md:justify-center md:h-fit lg:flex-col lg:justify-start lg:content-center md:w-1/4 md:flex-wrap w-full px-1 mx-auto xl:mx-20 pt-0 mb-4 md:mb-0">
              <h5
                className="font-bold text-white tracking-widest text-lg mt-10 mb-3"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom">
              
                Important Links
              </h5>
              <nav className="list-none mb-10">
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
            </div>
            <div className="lg:w-fit lg:flex md:h-fit lg:flex-col md:mt-10 lg:mt-10 px-6 lg:justify-start lg:content-center md:w-1/4 md:flex-wrap w-full pt-0 mb-4 md:mb-0">
              <h2
                className="title-font text-lg font-bold text-white tracking-widest mb-3"
                data-aos="slide-down"
                data-aos-anchor-placement="top-bottom">
              
                About
              </h2>
              <nav className="list-none footer-links" data-aos="slide-right">
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
            </div>

            <div className="lg:w-fit lg:flex lg:flex-col md:w-fit px-6 mt-10 lg:justify-start lg:content-center md:flex-wrap w-full pt-0 mb-4 md:mb-0">
              <h2
                className="title-font font-bold text-lg text-white tracking-widest mb-3"
                data-aos="slide-down"
              >
                Contact Us
              </h2>
              <nav className="list-none footer-links">
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
            </div>
            <div className="container flex flex-col items-center py-10">

           
              <h2 className="text-lg font-bold mb-6 sm:text-center xl:text-left">
                Follow Us
              </h2>
              <div className="flex flex-row justify-start items-center flex-wrap sm:justify-center xl:justify-start">
                <a
                  href=""
                  className="w-11 h-11 flex justify-center rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                >
                  <MdOutlineFacebook className="w-full h-full flex justify-center" />
                </a>
                <a
                  href=""
                  className="w-11 h-11 flex justify-center rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                >
                  <LuInstagram className="w-full h-full flex justify-center" />
                </a>
                <a
                  href=""
                  className="w-11 h-11 flex justify-center rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                >
                  <LuTwitter className="w-full h-full flex justify-center" />
                </a>
        
            </div>
            </div>

          </div>
        </div>
      </div>

    
      <div className="container py-4 px-5 static justify-center mx-auto sm:flex sm:justify-center sm:align-middle sm:items-center sm:flex-row">
        <span className="sm:ml-auto sm:mt-0 mt-2 flex flex-1">
          <p className="text-gray-500 text-sm text-center sm:text-center">
            &copy;2023 Intracoastal Dermatology All Rights Reserved by ICD-LTD.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
