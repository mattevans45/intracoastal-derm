import { useState, useRef, useEffect } from "react";
import AlertBar from "./components/Alertbar.jsx";
import ContactBar from "./components/ContactBar.jsx";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { MdOutlineVaccines } from "react-icons/md";
import { Link } from "react-router-dom";
import SidebarMenu from "./SideBarMenu";
import LOGO from "./assets/bestlogoupdated.webp";
import ServicesPopover from "./ServicesPopover.jsx";

import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";

import { motion, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MenuToggle.jsx";
const services = [
  {
    name: "General Dermatology",
    description:
      "Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
    to: "/services/general",
    icon: Hair,
  },
  {
    name: "Cosmetic Dermatology",
    description: "Neuromodulators, Dermal Filler, and Lasers.",
    to: "/services/cosmetic",
    icon: MdOutlineVaccines,
  },

  {
    name: "Surgical Dermatology",
    description:
      "Skin Cancer Removal, Mohs Surgery, Scar Revision, and Mole Removal.",
    to: "/services/surgical",
    icon: GiScalpel,
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prevState) => !prevState);


  return (
    <div
      className={
        !mobileMenuOpen
          ? "backdrop-saturate-125 sticky top-0 z-40 mx-auto flex w-full flex-col bg-white/80 backdrop-blur-[2.5px]"
          : "sticky top-0 z-40 mx-auto flex flex-col bg-white/90 bg-clip-text mix-blend-normal"
      }
    >
      <AlertBar />
      <ContactBar />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="navbar sticky z-[50] bg-white/90 px-2 shadow md:pr-3"
      >
        <nav
          className="z-50 mx-auto ml-auto flex items-center justify-between space-x-6 md:w-full lg:justify-around"
          aria-label="Global"
        >
          <Link to="/">
            <img
              className="relative z-40 mx-auto max-w-44 sm:max-h-40 sm:max-w-40 md:max-h-40 md:max-w-40 lg:max-h-48 lg:max-w-48"
              src={LOGO}
              alt="Intracoastal Dermatology Logo"
            />
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
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 overflow-y-auto h-screen z-50 w-full p-3 bg-gray-200/65 rounded-lg shadow-lg backdrop-blur-md"
            ref={sidebarRef}
          >
            <SidebarMenu
              toggle={toggleMobileMenu}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              services={services}
            >
              <MenuToggle></MenuToggle>
            </SidebarMenu>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopMenu = () => (
  <div className="md:text-md lg:text-md hidden font-display font-500 md:flex md:justify-evenly lg:flex lg:justify-center lg:space-x-1">
    <ServicesPopover />
    <Link
      to="/location"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 ease-in-out focus-within:outline-none hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:px-2 hover:py-1.5 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      LOCATION
    </Link>
    <Link
      to="/contact"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 ease-in-out focus-within:outline-none hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:px-2 hover:py-1.5 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      CONTACT
    </Link>
    <Link
      to="/about"
      className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 ease-in-out focus-within:outline-none hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:px-2 hover:py-1.5 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
    >
      ABOUT
    </Link>
    <div className="inline-flex pl-20 pr-20 gap-20">
      <Link
        to="/schedule-appointment"
        className="lg:text-md lg:space-x-20 space-x-5 uppercase rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center text-[#4d4d4d] shadow-gray-400/20 transition-all duration-500 ease-in-out hover:rounded-lg hover:bg-[#30648B]/90 hover:text-white hover:drop-shadow-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
      >
        Schedule an Appointment
      </Link>
    </div>
  </div>
);

export default Navbar;
