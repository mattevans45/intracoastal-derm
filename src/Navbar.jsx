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
import Follicle from "./Follicle";

const services = [
  {
    name: "General Dermatology",
    description:
      "Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
    to: "/services/general-dermatology",
    icon: Follicle,
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
                : "z-50 mx-auto min-w-full bg-white/90 max-h-40 px-4 left-0 sticky top-0 shadow md:pr-3"
            }`}
          >
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
            <nav
              className="flex lg:justify-evenly justify-between max-w-screen max-w-full md:w-full items-center"
              aria-label="Global"
            >
              {!mobileMenuOpen ? (
                <div className="left-0 z-4 top-0">
                  <Link to="/">
                    <img
                      className="h-auto max-w-lg max-h-36 object-cover relative object-center bg-blend-lighten mx-0 "
                      src={LOGO}
                      alt=""
                    />
                    <div className="mx-auto inset-0 absolute -z-50 bg-gray-700/95 h-full w-full sm:w-auto opacity-5"></div>
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
                  className="-m-1.5  flex items-center rounded-md mr-2.5 justify-end content-center transition-all duration-300 hover:drop-shadow-sm hover:scale-105 text-[#4d4d4d] hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className="h-10 w-fit shadow-gray-200 rounded-lg hover:shadow-sm drop-shadow-sm transition-all duration-300  hover:bg-gray-100 bg-gray-100  text-gray-700 hover:ring-3 hover:ring-gray-200 "
                    aria-hidden="true"
                  />
                </button>
              </div>
              <Popover.Group className="hidden z-20 lg:flex md:items-center md:gap-4 lg:justify-between lg:items-center lg:gap-r-2">
                <Popover className="relative">
                  <Popover.Button className="flex z-20 items-center justify-center bg-slate-400/10 shadow-gray-400/20 shadow-md  drop-shadow-md font-display font-semibold pl-2 md:text-lg xl:text-lg ml-0 place-self-center  transition hover:duration-700 ease-in-out rounded-lg hover:border-gray-200 text-[#4d4d4d] hover:bg-gray-200 py-2 px-1 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/90">
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
                    <Popover.Panel className="absolute mx-auto flex flex-col min-h-fit mt-1 pt-4 pb-6 z-50 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-2 ring-gray-900/5">
                      <Popover.Button>
                        {services.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white hover:rounded-3xl">
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
                <div className="hidden lg:flex md:text-lg lg:space-x-3  lg:justify-center lg:font-semibold font-display  md:flex md:justify-center md:items-baseline">
                  <Link
                    to="/location"
                    className="transition hover:duration-700 ease-in-out rounded-lg bg-slate-600/5 shadow-gray-400/20 shadow-md  drop-shadow-md  text-[#4d4d4d] hover:bg-[#4d4d4d]/10  py-2 px-1.5 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    LOCATION
                  </Link>
                  <Link
                    to="/contact"
                    className="transition hover:duration-700 ease-in-out px-2 py-2  shadow-gray-400/20 drop-shadow-md  text-[#4d4d4d] hover:rounded-lg hover:py-2 hover:px-2 hover:bg-[#4d4d4d]/10 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    CONTACT
                  </Link>
                  <Link
                    to="/about"
                    className="transition hover:duration-700 ease-in-out px-2 py-2  shadow-gray-400/20 drop-shadow-md  text-[#4d4d4d] hover:rounded-lg hover:py-2 hover:px-2 hover:bg-[#4d4d4d]/10 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  >
                    ABOUT
                  </Link>
                </div>
              </Popover.Group>
              <div className="hidden lg:flex justify-end lg:items-center md:items-center  flex-wrap md:text-md lg:text-lg font-display font-medium">
                <div className="flex w-fit h-full justify-center gap-x-2 lg:mr-1 md:mr-2">
                  <Link
                    to="/patient-portal"
                    className="rounded-lg min-w-fit lg:text-md text-center px-1.5 py-1 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
                  >
                    PATIENT PORTAL
                  </Link>
                  <Link
                    to="/payment"
                    className="rounded-lg min-w-fit lg:text-md text-center px-1.5 py-1 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
                  >
                    MAKE PAYMENT
                  </Link>
                  <Link
                    to="/telederm"
                    className="rounded-lg min-w-fit lg:text-md text-center px-1.5 py-1 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
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
