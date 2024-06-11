import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function ServicesPopover() {
    return (
      <>
        <Popover className="relative flex md:text-md lg:text-md  md:flex md:flex-nowrap  md:items-baseline md:justify-center  lg:flex lg:justify-around lg:space-x-1">
            <>
              <Popover.Button className="group inline-flex gap-x-2 uppercase rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20  drop-shadow-md transition-all duration-500 focus-within:outline-none   ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-2 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50">
                  Services
                <ChevronDownIcon className="h-5 w-5 group-hover:text-white" aria-hidden="true" />
              </Popover.Button>
  
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                
                <div className="absolute shadow-2xl rounded-2xl top-7 left-0 z-50 flex flex-col ">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {services.map((item) => (
                        <div key={item.name} className="group relative flex items-center justify-start gap-x-6 rounded-lg p-4 shadow-gray-400/20  drop-shadow-md transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg  hover:border-gray-200 hover:bg-[hsla(206,49%,37%,.80)] hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50">
                          <div className="size-9 rounded-lg bg-gray-50 group-hover:bg-white ">
                            <item.icon
                              className="size-8 inline-flex text-[#4d4d4d] group-hover:text-gray-500 "
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <Link  to={item.to} className="font-semibold text-gray-800 group-hover:text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600 group-hover:text-white">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Transition>
            </>
        </Popover>
      </>
    );
  }
  