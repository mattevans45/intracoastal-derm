import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { MdFace, MdOutlineVaccines } from "react-icons/md";
import { LuPill, LuBaby } from "react-icons/lu";
import logo from "./assets/blackandwhite.svg";
import logo2 from "./assets/Asset 3.webp";
import logo3 from "./assets/image.svg";
import Logo from "./assets/3dlogo.jpg";
import LogoBest from "./assets/bestlogo.png";
import LOGO from "./assets/bestlogoupdated.png";

import SkinCare from "./Skincare";

const services = [
  {
    name: "Skin Surgery",
    description: "Surgically remove unwanted blemishes and moles",
    href: "#",
    icon: MdFace,
  },
  {
    name: "Injectables",
    description: "Botox and lip-fillers",
    href: "#",
    icon: MdOutlineVaccines,
  },
  {
    name: "Cosmetic Care",
    description: "Get the care you deserve",
    href: "#",
    icon: SkinCare,
  },
  {
    name: "Acne",
    description: "You don't have to deal with acne alone. Get help!",
    href: "#",
    icon: LuBaby,
  },
  {
    name: "Blemishes",
    description: "Get help to fix blemishes",
    href: "#",
    icon: LuPill,
  },
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
        enter="transition-all transform duration-250"
        enterFrom="opacity-0 translate-y-[-10px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all transform duration-250"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10px]"
      >
        <header
          className={`header ${
            mobileMenuOpen
              ? "hidden"
              : "bg-white z-50 left-0 sticky mx-auto  top-0 w-full"
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
                  enter="transition-all transform duration-250"
                  enterFrom="opacity-0 translate-y-[-10px]"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all transform duration-250"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-[-10px]"
                >
                  <Popover.Panel className="absolute -left-8 mx-auto top-full z-50 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-2 ring-gray-900/5">
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
                </Transition>
              </Popover>

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
                className="transition w-40 hover:duration-700 ease-in-out rounded-lg  text-[#4d4d4d] md:text-lg xl:text-xl hover:bg-[#4d4d4d]/10 py-2 px-4 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
              >
                ABOUT US
              </a>
            </Popover.Group>
            <div className="hidden w-18 lg:flex gap-4  lg:justify-end lg:items-center">
              <a
                href="#"
                className="rounded-lg md:text-md px-4 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 "
              >
                PATIENT PORTAL <span aria-hidden="true"></span>
              </a>
              <a href="#" className="rounded-lg px-2 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 ">
           MAKE PAYMENT <span aria-hidden="true"></span>
          </a>
          <a href="#" className="rounded-lg px-2 py-2 border-2 bg-[#30648B]/5 border-[#4d4d4d] border-opacity-5 text-[#4d4d4d] transition duration-150 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50 ">
           TELEDERM <span aria-hidden="true"></span>
          </a>
            </div>
          </nav>
        </header>
      </Transition>

      <div className="z-50 sticky top-0">
        <Transition
          show={mobileMenuOpen}
          as={Fragment}
          enter="transition-all transform duration-500"
                  enterFrom="opacity-0 translate-y-[-10px]"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all transform duration-500"
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
                  <Disclosure.Button className="flex px-5 py-2 justify-between rounded-lg w-full text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100">
                    Services
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition-all transform duration-250"
                    enterFrom="opacity-0 translate-y-[-10px]"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all transform duration-250"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-[-10px]"
                  >
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...services].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 mx-2 text-[#4d4d4d]/90 hover:bg-gray-100"
            >
              Features
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 mx-2 text-[#4d4d4d]/90 hover:bg-gray-100"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 mx-2 text-[#4d4d4d]/90 hover:bg-gray-100"
            >
              Company
            </a>
            <div className="py-6">
              <a
                href="#"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 mx-2 text-[#4d4d4d]/90 hover:bg-gray-100"
              >
                Patient Portal
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
