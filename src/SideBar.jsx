// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import chevron icons from a library

// const Sidebar = () => {
 

//   const toggleCategory = (category) => {
//     setCategories((prevCategories) => ({
//       ...prevCategories,
//       [category]: !prevCategories[category],
//     }));
//   };

//   return (
//     <div className="grid grid-cols-3 h-screen">
//       {/* Sidebar */}
//       <div className="col-span-1 bg-gray-200 p-4 overflow-y-auto">
//         {/* Category 1 */}
//         <div className="mb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleCategory('category1')}
//           >
//             <p className="font-bold">Category 1</p>
//             {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category1 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 2
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Category 2 */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleCategory('category2')}
//           >
//             <p className="font-bold">Category 2</p>
//             {categories.category2 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category2 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 3
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 4
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="col-span-2 p-4">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronLeft, FaChevronUp, FaBars } from 'react-icons/fa'; // Import icons from a library

// const Sidebar = () => {
//     const toggleCategory = (category) => {
//             setCategories((prevCategories) => ({
//               ...prevCategories,
//               [category]: !prevCategories[category],
//             }));
//           };
        

//     const [categories, setCategories] = useState({
//         category1: false,
//         category2: false,
//       });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className={`flex h-screen ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
//       {/* Sidebar */}
//       <div
//         className={`bg-gray-200 p-4 overflow-y-auto transition-all ${
//           isSidebarOpen ? 'w-64' : 'w-0'
//         }`}
//       >
//         <div className="mb-4">
//           <div className="flex justify-between items-center cursor-pointer" onClick={toggleSidebar}>
//             {isSidebarOpen ? (
//               <FaChevronLeft className="text-xl" />
//             ) : (
//               <FaBars className="text-xl" />
//             )}
//           </div>
//         </div>

//         {/* Your sidebar content goes here */}

// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';

// const Sidebar = () => {


//         const toggleCategory = (category) => {
//             setCategories((prevCategories) => ({
//               ...prevCategories,
//               [category]: !prevCategories[category],
//             }));
//           };
        
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//       const [categories, setCategories] = useState({
//         category1: false,
//         category2: false,
//       });

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (

    
    // <div className="flex h-screen overflow-hidden">
    //   {/* Backdrop */}
    //   <div
    //     className={`fixed inset-0 bg-black opacity-50 z-50 transition-opacity ${
    //       isSidebarOpen ? 'block' : 'hidden'
    //     }`}
    //     onClick={toggleSidebar}
    //   ></div>

    //   {/* Sidebar */}
    //   <div
    //     className={`bg-gray-200 p-4 overflow-y-auto transition-all z-50 ${
    //       isSidebarOpen ? 'w-64' : 'w-0'
    //     }`}
    //   >
    //     <div className="mb-4">
    //       <div
    //         className="flex justify-between items-center cursor-pointer"
    //         onClick={toggleSidebar}
    //       >
    //         {isSidebarOpen ? (
    //           <FaChevronUp className="text-xl" />
    //         ) : (
    //           <FaBars className="text-xl" />
    //         )}
    //       </div>
    //     </div>

    //     {/* Your sidebar content goes here */}

    //     {/* For example, Category 1 */}
    //     <div className={`${isSidebarOpen ? 'block' : 'hidden'} mb-4`}>
    //       <div
    //         className="flex justify-between items-center cursor-pointer"
    //         onClick={() => toggleCategory('category1')}
    //       >
    //         <p className="font-bold">Category 1</p>
    //         {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
    //       </div>
    //       <ul
    //         className={`ml-4 transition-all ${
    //           categories.category1 ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
    //         } overflow-hidden`}
    //       >
    //         <li>
    //           <a href="#" className="text-blue-500 hover:underline">
    //             Link 1
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="text-blue-500 hover:underline">
    //             Link 2
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1 p-4 overflow-y-auto">
    //     {/* Your main content goes here */}
    //   </div>
    // </div>
//   );
// };

// export default Sidebar;


//         {/* For example, Category 1 */}
//         <div className={`${isSidebarOpen ? 'block' : 'hidden'} mb-4`}>
//           <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleCategory('category1')}>
//             <p className="font-bold">Category 1</p>
//             {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category1 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 2
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import { Outlet } from 'react-router'

// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function SideBar() {
//   return (
    

//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-800">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-8 w-8"
//                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                         alt="Your Company"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-gray-900 text-white'
//                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                               'rounded-md px-3 py-2 text-sm font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">Open user menu</span>
//                             <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-0.5" />
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pb-3 pt-4">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>

//         <header className="bg-white shadow">
//           <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//           </div>
//         </header>
//         <main>
//           <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            
//             <Outlet />
//           </div>
//         </main>
//       </div>

//   )
// }


import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


import { Popover } from "@headlessui/react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { MdOutlineVaccines, MdOutlineMedicalServices } from "react-icons/md";
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



const navigation = [

  { name: 'Location', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Patient Portal', href: '#', current: false },

  { name: 'TeleDerm', href: '#', current: false },
  { name: 'Make Payment', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar() {
  return (
    <>
      <Disclosure as="nav" className="fixed z-[504]  py-2 min-h-fit mb-18 my-auto  w-full px-4 mx-auto overflow-x-auto  max-w-full bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-40 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        className="relative mx-0 h-auto max-h-36 max-w-lg object-cover object-center bg-blend-lighten"
                        src={LOGO}
                        alt=""
                      />
                      <div className="absolute inset-0 -z-50 mx-auto h-full w-full bg-gray-700/95 opacity-5 sm:w-auto"></div>
                    </Link>
                  </div>

                  <div className="hidden md:block">
                    <div className="mx-auto flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>

            {/* Dropdown for Services */}
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
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

                {services.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center w-full gap-x-6 mb-2 rounded-lg px-4 text-sm leading-6 drop-shadow-sm transition-all duration-300 bg-gray-100 hover:bg-gray-100 text-gray-700 hover:ring-1 hover:ring-gray-100 hover:shadow-lg hover:scale-x-105"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-[#4d4d4d] group-hover:bg-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                    
                        to={item.to}
                        className="block font-semibold text-[#4d4d4d]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-[#4d4d4d]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}