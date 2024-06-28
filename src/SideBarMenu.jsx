import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices } from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LOGO1 from "./assets/bestlogoupdated.webp";
import { RiCalendarLine, RiHealthBookLine } from "react-icons/ri";

import {
  HiOutlineOfficeBuilding,
  HiOutlineMail,
  HiOutlineIdentification,

} from "react-icons/hi";


const menuItems = [
  {
    icon: HiOutlineOfficeBuilding,
    text: "Location",
    to: "/location",
    description: "Find our location",
  },
  {
    icon: HiOutlineMail,
    text: "Contact",
    to: "/contact",
    description: "Contact us",
  },
  {
    icon: HiOutlineIdentification,
    text: "About Us",
    to: "/about",
    description: "Learn about us",
  },

  {
    icon: RiHealthBookLine,
    text: "Insurances Accepted",
    to: "/insurances-accepted",
    description: "View accepted insurances",
  },
  {
    icon: RiCalendarLine,
    text:"Schedule Appointment",
    to: "/schedule-appointment",
    description: "Schedule an appointment",
  }
  
];

const SidebarMenu = ({ mobileMenuOpen, setMobileMenuOpen, services }) => {
  const [isServicesOpen, toggleServicesOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; 
    };
  }, [mobileMenuOpen]);


  return (
    <motion.nav
      initial={false}
      animate={mobileMenuOpen ? "open" : "closed"}
      ref={containerRef}
      className="absolute top-0 right-0 font-Playfair overflow-x-auto h-screen z-30 sm:w-1/2 md:w-1/2 mx-auto w-full p-3 bg-gray-200/65 rounded-lg shadow-lg sm:shadow-xl backdrop-blur-md sm:backdrop-blur-lg"
    >
      <div className="flex p-4 items-center justify-between">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img
            className="max-w-48 bg-blend-multiply object-center sm:max-h-48 sm:max-w-48 md:max-h-48 md:max-w-48 mx-auto my-4 p-1 w-full"
            src={LOGO1}
            loading="lazy"
            alt="Intracoastal Dermatology Logo"
          />
        </Link>
        <div className="rounded-full w-fit z-50 bg-gray-50 p-2.5 text-[#4d4d4d] drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:ring-1 hover:ring-white hover:shadow-lg">
          <XMarkIcon
            onClick={() => setMobileMenuOpen(false)}
            className="h-6 w-6 text-[#4d4d4d] hover:animate-pulse-slow"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="w-full  rounded-lg">
        <button
          onClick={toggleServicesOpen}
          className="flex items-center justify-center w-full mx-auto text-[#4d4d4d]"
        >
          <div className="flex w-full items-center px-8 bg-gray-50 py-2 mx-auto transition-all duration-300 hover:bg-gray-100 hover:ring-2 hover:animate-pulse-slow hover:ring-white rounded-lg">
            <MdOutlineMedicalServices className="w-7 h-6 text-[#4d4d4d]" />
            <span className="flex-grow w-full font-display text-left leading-relaxed font-600 py-2 px-7 mx-auto capitalize">
              Services
            </span>
            <ChevronDownIcon
              className={`w-7 h-6 text-[#4d4d4d] bg-gray-50 rounded-lg drop-shadow-sm transition-all duration-300 hover:bg-gray-50 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        </button>
        {isServicesOpen && (
          <>
        
          <motion.div
            className="mt-1 w-full mx-auto h-full flex-col flex items-center justify-between gap-x-1 rounded-lg flex-wrap"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { opacity: 1, transition: { staggerChildren: 0.2 } },
              closed: { opacity: 0, transition: { staggerChildren: 0.2 } },
            }}
            transition={{ duration: 0.1 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                className="relative flex items-center w-full gap-x-6 py-1 my-1 px-7 text-sm leading-6 text-[#4d4d4d] bg-gray-100 rounded-lg drop-shadow-sm transition-all duration-300 hover:animate-pulse-slow hover:bg-gray-100 hover:ring-2 hover:ring-white hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg group-hover:bg-slate-100">
                  <service.icon className="w-fit h-6 text-[#4d4d4d]" />
                </div>
                <div className="flex-1 p-2 rounded-md hover:bg-slate-200/50">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={service.to}
                    className="font-display font-600 text-[#4d4d4d]"
                  >
                    {service.name}
                  
                  <p className="mt-1 font-display text-pretty font-400 prose-sm text-[#4d4d4d]">{service.description}</p>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </>
        )}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="py-0.5 mb-1 mx-auto flex flex-col items-start justify-center font-500 leading-7 text-[#4d4d4d] rounded-lg"
        >
          <ul className="flex flex-col items-stretch justify-center mb-20 w-full gap-1 px-0 py-1 rounded-lg flex-wrap">
            {menuItems.map((item) => (
              <li
                key={item.text}
                className="flex mt-1.5 drop-shadow-sm transition-all duration-300 hover:animate-pulse-slow hover:bg-gray-100 p-1.5 text-[#4d4d4d] hover:ring-2 hover:ring-white hover:shadow-lg bg-gray-50 rounded-lg flex-col w-full h-full justify-items-center"
              >
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to={item.to}
                  className="group flex items-center w-full mx-0 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  {item.icon && (
                    <div className="flex items-center mx-4 justify-center bg-gray-50 rounded-lg group-hover:bg-white">
                      <item.icon
                        className="h-5 w-5 text-[#4d4d4d] group-hover:bg-white"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <span className="mx-3 font-display font-500 text-[#4d4d4d] w-full capitalize">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default SidebarMenu;
