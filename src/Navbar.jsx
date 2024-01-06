import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
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
import { LuPill, LuBaby, LuHome, LuEggOff } from "react-icons/lu";
import logo from "./assets/blackandwhite.svg";
import logo2 from "./assets/Asset 3.webp";
import logo3 from "./assets/image.svg";
import Logo from "./assets/3dlogo.jpg";
import LogoBest from "./assets/bestlogo.png";
import LOGO from "./assets/bestlogoupdated.png";
import follicle from "./assets/hair-follicle-icon.jpg";
import { GiScalpel } from "react-icons/gi";
import Follicle from "./Follicle";
import {
  HiOutlineOfficeBuilding,
  HiOutlineCreditCard,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineServer,
} from "react-icons/hi";

const services = [
  {
    name: "General Dermatology",
    description:
      "Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
    href: "#",
    icon: Follicle,
  },
  {
    name: "Cosmetic Dermatology",
    description: "Neuromodulators, Dermal Filler, and Lasers.",
    href: "#",
    icon: MdOutlineVaccines,
  },
  // {
  //   name: "Cosmetic Care",
  //   description: "Get the care you deserve",
  //   href: "#",
  //   icon: SkinCare,
  // },
  {
    name: "Surgical Dermatology",
    description:
      "Skin Cancer Removal, Mohs Surgery, Scar Revision, and Mole Removal.",
    href: "#",
    icon: GiScalpel,
  },
  // {
  //   name: "Blemishes",
  //   description: "Get help to fix blemishes",
  //   href: "#",
  //   icon: LuPill,
  // },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Schedule A Consultation", href: "#", icon: PhoneIcon },
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
<header
          className={`header ${
            mobileMenuOpen ? "hidden" : "bg-white z-50 left-0 sticky top-0"
          }`}
        >
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          <nav
            className="mx-auto w-full h-full transition-all duration-200 ease-in-out flex justify-between items-center md:w p-3 lg:px-6"
            aria-label="Global"
          >
            {!mobileMenuOpen ? (
              <div className="">
                <a href="#">
                  <img
                    className=" w-60 object-fit object-center mx-0"
                    src={LOGO}
                    alt=""
                  />
                </a>
              </div>
            ) : (
              <div></div>
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
                className="-m-1.5 flex items-center rounded-md justify-end content-center text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="pr-2 justify-center">Menu</span>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-10 w-10 hover:border-gray-200 text-[#4d4d4d] hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  aria-hidden="true"
                />
              </button>
            </div>
            <Popover.Group className="hidden z-20 lg:flex items-center lg:justify-evenly lg:gap-x-4">
              <Popover className="relative">
                <Popover.Button className="flex z-20 items-center justify-center md:text-lg xl:text-xl ml-0  -mb-1 transition hover:duration-700 ease-in-out rounded-lg hover:border-gray-200 text-[#4d4d4d] hover:bg-gray-200 py-2 px-4 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50">
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
                  <div className="container">
                    <Popover.Panel className="absolute -left-8 mx-auto flex flex-col min-h-fit pb-5 z-50 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-2 ring-gray-900/5">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-[#4d4d4d] group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-[#4d4d4d]"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-[#4d4d4d]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#4d4d4d] hover:bg-gray-100"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-[#4d4d4d]"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </div>
                </Transition>
              </Popover>
      <div className="hidden lg:flex gap-4 w-fit items-center">
        <a
          href="#"
          className="transition hover:duration-700 ease-in-out rounded-lg  text-[#4d4d4d] hover:bg-[#4d4d4d]/10 md:text-lg xl:text-xl py-2 px-4 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
        >
          LOCATION
        </a>
        <a
          href="#"
          className="transition hover:duration-700 ease-in-out rounded-lg text-[#4d4d4d] hover:bg-[#4d4d4d]/10 md:text-lg xl:text-xl py-2 px-4 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
        >
          CONTACT
        </a>
        <a
          href="#"
          className="transition hover:duration-700 ease-in-out rounded-lg  text-[#4d4d4d] md:text-lg xl:text-xl hover:bg-[#4d4d4d]/10 py-2 px-4 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
        >
          ABOUT US
        </a>
      </div>
    </Popover.Group>
    <div className="hidden w-fit lg:flex gap-4 lg:justify-end lg:items-center">
      <a
        href="#"
        className="rounded-lg md:text-md px-4 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
      >
        PATIENT PORTAL
      </a>
      <a
        href="#"
        className="rounded-lg px-2 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
      >
        MAKE PAYMENT
      </a>
      <a
        href="#"
        className="rounded-lg px-2 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
      >
        TELEDERM
      </a>
    </div>
  </nav>
</header>
      </Transition>

      <div className="z-20 sticky top-0">
        <Transition
          show={mobileMenuOpen}
          as="div"
          enter="transition-all transform duration-200"
          enterFrom="opacity-0 translate-y-[-10px]"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all transform duration-200"
          leaveFrom="opacity-60 translate-x-5 translate-y-5"
          leaveTo="opacity-0 translate-x-[-10px] translate-y-[-10px]"
        >
          <div className="fixed top-0 right-0 z-50 w-screen bg-white m-0 p-1 sm:max-w-sm sm:h-screen sm:ring-1 sm:ring-gray-900/10">
            <div className="mx-4 flex items-center justify-between">
              <a href="#">
                <img
                  className="w-60 object-fit object-center mx-0"
                  src={LOGO}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center sm:px-8 sm:mx-1 sm:mt-5 px-4 py-2 rounded-lg w-full text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100 ">
                    <MdOutlineMedicalServices stroke = "#4d4d4d" fill="#4d4d4d" className="h-6 w-6 text-[#4d4d4d]" />
                    <span className="px-3 sm:px-6 capitalize mr-40">Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-grow"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition-all transform duration-200"
                    enterFrom="opacity-0 translate-y-[-10px]"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all transform duration-200"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-[-10px]"
                  >
                    <Disclosure.Panel className="mt-2 flex-col justify-between flex items-start">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-[#4d4d4d] group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-[#4d4d4d]"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-[#4d4d4d]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <div className="mt-2 flex-col justify-between flex items-start px-2 sm:px-5 min-h-fit h-full">
            <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlineOfficeBuilding className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="w-full flex-grow rounded-lg px-5 py-2 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    Location
                  </a>
                </li>
              </ul>

              <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlineMail className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="w-full inline-block flex-grow rounded-lg px-5 py-2 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlineUser className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="block flex-grow rounded-lg px-5 py-2 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    About Us
                  </a>
                </li>
              </ul>

              <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlineUser className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="block flex-grow rounded-lg px-5 py-2.5 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    Patient Portal
                  </a>
                </li>
              </ul>

              <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlinePhone className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="flex-grow rounded-lg px-5 py-2.5 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    TeleDerm
                  </a>
                </li>
              </ul>

              <ul className="w-full">
                <li className="rounded-lg px-4 text-sm leading-6 hover:bg-gray-50 flex items-center">
                  <HiOutlineCreditCard className="h-6 w-6 text-[#4d4d4d]" />
                  <a
                    href="#"
                    className="block flex-grow rounded-lg px-5 py-2.5 text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                  >
                    Make Payment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
