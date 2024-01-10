import { Fragment, useState } from "react";

import { Menu, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  MdFace,
  MdOutlineMedicalServices,
  MdOutlineVaccines,
} from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import SidebarMenu from "./SideBarMenu";
import LOGO from "./assets/bestlogoupdated.png";

import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
                : "sticky left-0 top-0 z-50 mx-auto max-h-40 min-w-full bg-white/90 px-4 shadow md:pr-3"
            }`}
          >
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
            <nav
              className="max-w-screen flex max-w-full items-center justify-between md:w-full lg:justify-evenly"
              aria-label="Global"
            >
              {!mobileMenuOpen ? (
                <div className="z-4 left-0 top-0">
                  <Link to="/">
                    <img
                      className="relative mx-0 h-auto max-h-36 max-w-lg object-cover object-center bg-blend-lighten "
                      src={LOGO}
                      alt=""
                    />
                    <div className="absolute inset-0 -z-50 mx-auto h-full w-full bg-gray-700/95 opacity-5 sm:w-auto"></div>
                  </Link>
                </div>
              ) : (
                <></>
              )}

              <div className="flex lg:hidden">
                {mobileMenuOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-60"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                )}

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

              <Popover.Group className="lg:gap-r-2 z-20 hidden md:items-center md:gap-4 lg:flex lg:items-center lg:justify-between">
                <Popover className="relative">
                  <Popover.Button className="z-20 ml-0  flex items-center  justify-center place-self-center  rounded-lg px-2 py-2 font-display  font-semibold text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all  duration-500 ease-in-out hover:rounded-lg   hover:border-gray-200 hover:bg-[#4d4d4d]/10  hover:bg-gray-200 hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 md:text-lg xl:text-lg">
                    SERVICES
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-[#4d4d4d]"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition-all transform duration-200"
                    enterFrom="opacity-0 translate-y-[-10px]"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all transform duration-200"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-[-10px]"
                  >
                    <Popover.Panel className="absolute z-50 mx-auto mt-1 flex min-h-fit w-screen max-w-md flex-col rounded-3xl bg-white pb-6 pt-4 shadow-lg ring-2 ring-gray-900/5">
                      <Popover.Button>
                        {services.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 hover:rounded-3xl group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-[#4d4d4d] group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            </div>

                            <div className="flex-auto">
                              <Link
                                onClick={() => set(false)}
                                to={item.to}
                                className="block font-semibold text-[#4d4d4d]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-[#4d4d4d]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </Popover.Button>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#4d4d4d] hover:bg-gray-100"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-[#4d4d4d]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <div className="hidden font-display md:flex md:items-baseline  md:justify-center md:text-lg lg:flex  lg:justify-center lg:space-x-3 lg:font-semibold">
                  <Link
                    to="/location"
                    className="rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500   ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#4d4d4d]/10 hover:bg-gray-200 hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    LOCATION
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-lg px-2 py-2 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500   ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#4d4d4d]/10 hover:bg-gray-200 hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    CONTACT
                  </Link>
                  <Link
                    to="/about"
                    className="rounded-lg px-2 py-2 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500   ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#4d4d4d]/10 hover:bg-gray-200 hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    ABOUT
                  </Link>
                </div>
              </Popover.Group>
              <div className="md:text-md hidden flex-wrap justify-end font-display font-medium md:items-center lg:flex lg:items-center lg:text-lg">
                <div className="flex h-full w-fit justify-center gap-x-2 md:mr-2 lg:mr-1">
                  <Link
                    to="/patient-portal"
                    className="lg:text-md min-w-fit rounded-lg border-2 border-[#4d4d4d] border-opacity-5 bg-[#30648B]/5 px-1.5 py-1 text-center text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
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
