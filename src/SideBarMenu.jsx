import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineMedicalServices } from "react-icons/md";
import LOGO1 from "./assets/bestlogoupdated.webp";
import LOGO from "./assets/bestlogoupdated.png";

import {
  HiOutlineOfficeBuilding,
  HiOutlineCreditCard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineIdentification,
} from "react-icons/hi";

const menuItems = [
  {
    icon: HiOutlineOfficeBuilding,
    text: "Location",
    to: "/location",
  },
  { icon: HiOutlineMail, text: "Contact", to: "/contact" },
  {
    icon: HiOutlineIdentification,
    text: "About Us",
    to: "/about",
  }
  // },
  // {
  //   icon: HiOutlineUser,
  //   text: "Patient Portal",
  //   to: "/patientPortal",
  // },
  // { icon: HiOutlinePhone, text: "TeleDerm", to: "/telederm" },
  // {
  //   icon: HiOutlineCreditCard,
  //   text: "Make Payment",
  //   to: "/payment",
  // },
];

const SidebarMenu = ({ mobileMenuOpen, setMobileMenuOpen, services }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  



  const containerVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100%' }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="fixed top-0 right-0 overflow-x-auto h-full z-50 sm:w-1/2 md:w-1/2 mx-auto w-full  bg-gray-100 shadow"
          initial="opacity-0"
          animate="opacity-100"
  
        variants={containerVariants}
          transition={{ duration: 0.25 }}
        >
          <div className="mx-5 mb-4 flex items-center justify-between">
            <Link to="/"  onClick={() => setMobileMenuOpen(false)}>
              <img
                className="max-w-lg max-h-36 object-cover mx-auto w-full sm:w-auto"
                src={LOGO1}
                alt="Intracoastal Dermatology Logo"
              />
              <div className="absolute inset-0 mx-auto -z-50 h-screen w-full bg-gray-700/95 opacity-5 sm:w-auto"></div>
            </Link>
            <button
              type="button"
              className="rounded-full w-fit bg-gray-50 p-2.5 text-gray-700 drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 hover:shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="w-full mt-1 pb-1 rounded-lg bg-gray-200/50">
            <button
              onClick={toggleServices}
              className="flex items-center justify-center w-full mx-auto p-1.5 text-gray-700 bg-gray-50 rounded-lg drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:ring-1 hover:ring-gray-100 hover:shadow-lg"
            >
              <div className="flex items-center justify-start w-full px-8 py-2 mx-auto bg-gray-200/5 rounded-lg">
                <MdOutlineMedicalServices className="w-fit h-6 text-[#4d4d4d] hover:animate-pulse" />
                <span className="flex-grow text-left font-bold px-6 mx-auto capitalize">Services</span>
                <ChevronDownIcon
                  className={`w-7 h-6 text-gray-900 bg-gray-50 rounded-lg drop-shadow-sm transition-all duration-300 hover:bg-gray-50 hover:ring-1 hover:ring-gray-200 hover:shadow-inner ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="mt-1 w-full mx-auto h-full flex-col flex items-center justify-between bg-transparent"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center w-full gap-x-6 py-1 my-1 px-7 text-sm leading-6 text-gray-700 bg-gray-100 rounded-lg drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:ring-1 hover:ring-gray-100 hover:shadow-lg hover:scale-x-105"
                    >
                      <div className="flex items-center justify-center w-11 h-11 bg-gray-200/5 rounded-lg group-hover:bg-slate-100">
                        <item.icon className="h-6 w-6 text-[#4d4d4d] group-hover:bg-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1 p-2 rounded-md hover:bg-slate-200/50">
                        <Link
                          onClick={() => setMobileMenuOpen(false)}
                          to={item.to}
                          className="prose-sm font-semibold text-[#4d4d4d]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-[#4d4d4d]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="py-0.5 mb-10 mx-auto flex flex-col items-start justify-center font-semibold leading-7 text-[#4d4d4d]/9 bg-gray-100 rounded-lg">
            <ul className="flex flex-col items-stretch justify-center w-full gap-1 px-0 py-1 rounded-lg flex-wrap">
            {menuItems.map((item) => (
                <li
                  key={item.text}
                  className="flex mt-1.5 drop-shadow-sm transition-all duration-300  hover:bg-gray-100 p-1.5 text-gray-700 hover:ring-1 hover:ring-gray-100 hover:shadow-lg hover:scale-x-105 bg-gray-50 rounded-lg flex-col w-full h-full justify-items-center"
                >
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={item.to}
                    className="group flex items-center w-full mx-0 px-4 py-2 rounded-lg hover:bg-gray-100"
                  >
                    {item.icon && (
                      <div className="flex items-center mx-4 justify-center bg-gray-50 rounded-lg group-hover:bg-white">
                        {
                          <item.icon
                            className="h-5 w-5 text-[#4d4d4d] group-hover:bg-white"
                            aria-hidden="true"
                          />
                        }
                      </div>
                    )}
                    <span className="mx-3 font-semibold text-[#4d4d4d] w-full capitalize">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarMenu;