import { Fragment, useState, useMemo } from "react";
import AlertBar from "./components/Alertbar.jsx";
import ContactBar from "./components/ContactBar.jsx";

import { Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { MdOutlineVaccines } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import SidebarMenu from "./SideBarMenu";
import LOGO from "./assets/bestlogoupdated.webp";
import ServicesPopover from "./ServicesPopover.jsx";

import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";
import SideBar from "./backupsidebar.jsx";
import { motion } from 'framer-motion';
const services = [
  {
    name: "General Dermatology",
    description:
      "Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
    to: "/services/general-dermatology",
    icon: Hair,
  },
  {
    name: "Cosmetic Dermatology",
    description: "Neuromodulators, Dermal Filler, and Lasers.",
    to: "/services/cosmetic-dermatology",
    icon: MdOutlineVaccines,
  },

  {
    name: "Surgical Dermatology",
    description:
      "Skin Cancer Removal, Mohs Surgery, Scar Revision, and Mole Removal.",
    to: "/services/surgical-dermatology",
    icon: GiScalpel,
  },
];


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);


  return (
    <>
    <AlertBar />
    <ContactBar />
      {!mobileMenuOpen && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="navbar max-h-fit pt-24 md:pt-16 sm:pt-28 sticky top-0 z-[49] min-w-full bg-white px-2 shadow md:pr-3"
        >
          <nav
            className="mx-auto ml-auto z-50 flex items-center justify-between space-x-6 md:w-full lg:justify-around"
            aria-label="Global"
          >
            <Link to="/">
              <img
                className="relative z-40 object-center mx-auto max-w-44 sm:max-h-36 md:max-w-36 md:max-h-36 sm:max-w-36 lg:max-h-48 lg:max-w-48"
                src={LOGO}
       
                alt="Intracoastal Dermatology Logo"
              />
              <div className="inset-0 mx-auto h-full w-full bg-gray-700/95 opacity-5 sm:w-auto"></div>
            </Link>

            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-1.5 mr-2.5 flex items-center justify-end rounded-md text-[#4d4d4d] transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:drop-shadow-sm"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-10 w-10 rounded-lg bg-gray-100 text-gray-700 shadow-gray-200 drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-sm hover:ring-gray-200"
                  aria-hidden="true"
                />
              </button>
            </div>

            <DesktopMenu />
            {/* <UtilityLinks /> */}
           
          </nav>
        </motion.header>
      )}

      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={toggleMobileMenu}
            duration={0.1}
          />
          <SidebarMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            services={services}
          />
        </>
      )}
    </>
  );
};

const DesktopMenu = () => (
  <div className="md:text-md lg:text-md hidden md:justify-evenly font-display font-semibold md:flex lg:flex lg:justify-center lg:space-x-1">
    <ServicesPopover />
    <Link
      to="/location"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-1.5  focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      LOCATION
    </Link>
    <Link
      to="/contact"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-1.5  focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      CONTACT
    </Link>
    <Link
      to="/about"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-1.5 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      ABOUT
    </Link>
  </div>
);

const UtilityLinks = () => (
  <div className="md:text-md lg:text-md hidden w-fit font-display font-semibold md:flex md:flex-wrap md:items-baseline md:justify-center lg:flex lg:justify-center lg:space-x-1">
    <Link
      to="/patient-portal"
      className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center  text-[#4d4d4d] shadow-gray-400/20 transition-all duration-500  ease-in-out hover:rounded-lg hover:bg-[#30648B]/90 hover:text-white hover:drop-shadow-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      PATIENT PORTAL
    </Link>
    <Link
      to="/payment"
      className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center  text-[#4d4d4d] shadow-gray-400/20 transition-all duration-500  ease-in-out hover:rounded-lg hover:bg-[#30648B]/90 hover:text-white hover:drop-shadow-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      MAKE PAYMENT
    </Link>
    <Link
      to="/telederm"
      className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center  text-[#4d4d4d] shadow-gray-400/20 transition-all duration-500  ease-in-out hover:rounded-lg hover:bg-[#30648B]/90 hover:text-white hover:drop-shadow-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      TELEDERM
    </Link>
  </div>
);

export default Navbar;