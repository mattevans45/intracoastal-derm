import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Menu, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineMedicalServices } from "react-icons/md";

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
  },
  {
    icon: HiOutlineUser,
    text: "Patient Portal",
    to: "/patientPortal",
  },
  { icon: HiOutlinePhone, text: "TeleDerm", to: "/telederm" },
  {
    icon: HiOutlineCreditCard,
    text: "Make Payment",
    to: "/payment",
  },
];

const SidebarMenu = ({ mobileMenuOpen, setMobileMenuOpen, services }) => {
  return (
    <Menu
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      className="min-h-full  max-w-full max-h-screen w-full overflow-y-auto overflow-x-hidden"
    >
      <Transition
        show={mobileMenuOpen}
        as={Fragment}
        enter="transition-all transform duration-200"
        enterFrom="opacity-0 translate-y-[-10px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all transform duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10px]"
      >
        <div className="fixed w-screen top-0 right-0 z-50 bg-white mx-auto pl-3 p-2 sm:max-w-sm sm:h-fit sm:ring-1 sm:ring-gray-900/10">
          <div className="mx-auto flex items-center justify-between">
            <Link to="/">
              <img
                className="w-60 object-fit object-center mx-0 hover:scale-95"
                src={LOGO}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="rounded-full w-fit shadow-inner transition-all duration-300  hover:bg-gray-100 bg-gray-50 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Disclosure >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex  bg-gray-50 justify-center items-center mx-auto px-8 py-2  rounded-lg w-full text-base font-semibold leading-7 text-[#4d4d4d]/90 hover:bg-gray-100 ">
                  <div className="transition-all duration-200 hover:scale-105 flex w-30 flex-1 justify-center items-start">

                  <MdOutlineMedicalServices
             
                    className="h-6 w-fit hover:animate-pulse text-[#4d4d4d]"
                  />
                  <span className="px-6 mx-auto flex self-start flex-grow sm:w-fit capitalize">
                    Services
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 bg-gray-100/90 ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                  </div>

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
                        className="relative flex items-center  gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-[#4d4d4d] group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
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
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <div className=" items-start bg-white py-1 rounded-lg  w-full h-fit flex font-semibold leading-7 text-[#4d4d4d]/9 ">
            <ul className="flex flex-col justify-center items-stretch  flex-wrap w-full round-lg">
              {menuItems.map((item) => (
                <li key={item.text} className="flex mt-1.5 transition-all duration-200 hover:scale-x-105 bg-gray-50 rounded-lg flex-col w-full h-full justify-items-center">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    to={item.to}
                    className="flex items-center w-full mx-0 px-4 py-2 rounded-lg hover:bg-gray-100"
                  >
                    {item.icon && (
                      <div className="flex items-center mx-4 justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100">
                        {
                          <item.icon
                            className="h-5 w-5 text-[#4d4d4d] group-hover:text-gray-500"
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
        </div>
      </Transition>
    </Menu>
  );
};

export default SidebarMenu;
