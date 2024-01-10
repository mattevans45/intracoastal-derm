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
      className=" max-w-full h-screen py-2  my-auto max-h-screen w-full px-4 mx-auto overflow-x-auto"
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
        <div className="fixed w-screen top-0 right-0 z-50 bg-gray-50 mx-auto pl-3 p-2 shadow sm:max-w-sm sm:h-fit sm:ring-1 sm:ring-gray-900/10">
          <div className="mx-5 mb-4  flex items-center justify-between">
            <Link to="/">
              <img
                className="h-auto max-w-lg max-h-36 object-cover mx-auto bg-blend-lighten place-self-center"
                src={LOGO}
                alt=""
              />
              <div className="mx-auto inset-0 absolute -z-50 bg-gray-700/95 h-screen w-full sm:w-auto opacity-5"></div>
            </Link>
            <button
              type="button"
              className="rounded-full w-fit drop-shadow-sm transition-all duration-300  hover:bg-gray-100 bg-gray-50 p-2.5 text-gray-700 hover:ring-1 hover:ring-gray-200 hover:shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="w-full rounded-lg mt-1 pb-1 bg-slate-400/10">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-center items-center mx-auto w-full font-semibold leading-7 drop-shadow-sm transition-all duration-300  hover:bg-gray-100 p-1.5 text-gray-700 hover:ring-1 hover:ring-gray-100 hover:shadow-lg hover:scale-x-105 bg-gray-50 rounded-lg">
                    <div className="bg-gray-200/5 rounded-lg py-2 px-8 mx-auto flex w-full flex-1 justify-start items-start ">
                      <MdOutlineMedicalServices className="h-6 w-fit hover:animate-pulse text-[#4d4d4d]" />
                      <span className="px-6 mx-auto flex flex-grow sm:w-full capitalize">
                        Services
                      </span>
                      <ChevronDownIcon
                        className={`h-6 w-7 bg-gray-100/90 text-gray-900 rounded-lg drop-shadow-sm transition-all duration-300  hover:bg-gray-100 bg-gray-50  hover:ring-1 hover:ring-gray-200 hover:shadow-inner ${
                          open ? "rotate-180" : ""
                        }`}
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
                    <Disclosure.Panel className="shadow-xl mt-1 w-full mx-auto flex-col justify-between flex items-center">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="relative flex items-center w-full gap-x-6 mb-2 rounded-lg px-4 text-sm leading-6 drop-shadow-sm transition-all duration-300 bg-gray-100 hover:bg-gray-100  text-gray-700 hover:ring-1 hover:ring-gray-100 hover:shadow-lg hover:scale-x-105 "
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-[#4d4d4d] group-hover:bg-white"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1">
                            <Link
                              onClick={() => setMobileMenuOpen(false)}
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
          </div>

          <div className="items-start py-1 rounded-lg w-full bg-gray-100 h-full mb-10 mx-auto flex font-semibold leading-7 text-[#4d4d4d]/9">
            <ul className="flex flex-col justify-center items-stretch -my-1 flex-wrap w-full round-lg">
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
        </div>
      </Transition>
    </Menu>
  );
};

export default SidebarMenu;
