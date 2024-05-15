import { Fragment, useState } from "react";

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
import LOGO from "./assets/bestlogoupdated.png";
import ServicesPopover from "./ServicesPopover.jsx";

import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";
import SideBar from "./SideBar.jsx";

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
const callsToAction = [
  { name: "Watch demo", to: "/", icon: PlayCircleIcon },
  { name: "Schedule A Consultation", to: "/", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <Transition
        show={!mobileMenuOpen}
        as={Fragment}
        enter="transition-all transform duration-200"
        enterFrom="opacity-0 translate-y-[-10px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all transform duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10px]"
      >
        <Menu>
          <header
            className={`container ${
              mobileMenuOpen
                ? "hidden"
                : "max-h-34 sticky left-0 top-0 z-[100] min-w-full  bg-white/90 px-2 shadow md:pr-3"
            }`}
          >
            <nav
              className="max-w-screen z-50 flex items-center justify-between mx-auto space-x-6 md:w-full lg:justify-around"
              aria-label="Global"
            >
              {!mobileMenuOpen && (
                <Link to="/">
                  <img
                    className="relative z-40 h-36 max-h-36 max-w-sm object-cover object-center bg-blend-lighten lg:max-h-36 lg:max-w-lg "
                    src={LOGO}
                    alt="Intracoastal Dermatology Logo"
                  />
                  <div className="inset-0 mx-auto h-full w-full bg-gray-700/95 opacity-5 sm:w-auto"></div>
                </Link>
              )} 
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="-m-1.5 mr-2.5 flex items-center justify-end rounded-md text-[#4d4d4d] transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:drop-shadow-sm"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className="hover:ring-3 h-10 w-10 rounded-lg bg-gray-100 text-gray-700 shadow-gray-200 drop-shadow-sm  transition-all duration-300  hover:bg-gray-100 hover:shadow-sm hover:ring-gray-200 "
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="md:text-md lg:text-md hidden font-display font-semibold  md:flex md:flex-nowrap  md:items-baseline md:justify-center  lg:flex lg:justify-around lg:space-x-1">
                <Link to="/services">
                  <ServicesPopover />
                </Link>

                <Link
                  to="/location"
                  className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500   ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                >
                  LOCATION
                </Link>

                <Link
                  to="/contact"
                  className="rounded-lg px-2 py-2 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                >
                  CONTACT
                </Link>
                <Link
                  to="/about"
                  className="rounded-lg px-2 py-2 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                >
                  ABOUT
                </Link>
              </div>

              <div className="md:text-md lg:text-md hidden w-fit font-display font-semibold md:flex md:flex-wrap  md:items-baseline md:justify-center  lg:flex lg:justify-center lg:space-x-1">
                <Link
                  to="/patient-portal"
                  className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                >
                  PATIENT PORTAL
                </Link>
                <Link
                  to="/payment"
                  className=" lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center  text-[#4d4d4d] shadow-gray-400/20 transition-all duration-500  ease-in-out hover:rounded-lg hover:bg-[#30648B]/90 hover:text-white hover:drop-shadow-md focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
                >
                  MAKE PAYMENT
                </Link>
                <Link
                  to="/telederm"
                  className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
                >
                  TELEDERM
                </Link>
              </div>
            </nav>
          </header>
        </Menu>
      </Transition>

      <SidebarMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        services={services}
      />
    </>
  );
}
