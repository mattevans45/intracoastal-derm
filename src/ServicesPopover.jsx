import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, CalendarIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";
import { doc } from 'prettier';

const services = [
  {
    name: "General Dermatology",
    description: "Psoriasis, Atopic Dermatitis (Eczema), Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
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
    description: "Skin Cancer Removal, Mohs Surgery, Scar Revision, and Mole Removal.",
    to: "/services/surgical",
    icon: GiScalpel,
  },
];

const callsToAction = [
  { name: 'Learn More', href: '/services', icon: QuestionMarkCircleIcon },
  { name: 'Schedule an Appointment', href: '/schedule-appointment', icon: CalendarIcon },
];

const menuVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: .1, staggerChildren: 0.1 } },
};

export default function ServicesPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverRef]);


  return (
    <motion.div initial="hidden"
    animate="visible"
    variants={menuVariants}
    ref={popoverRef} className="relative z-40 flex sm:hidden md:text-md lg:text-md md:flex md:flex-nowrap md:items-baseline md:justify-center lg:flex lg:justify-around lg:space-x-1">
      <div className="group inline-flex gap-x-2 uppercase rounded-lg px-2 py-1.5 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:text-white hover:px-2 hover:py-1.5 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
        onClick={() => setIsOpen(!isOpen)}>
        <span>Services</span>
        <ChevronDownIcon className="h-5 w-5 group-hover:text-white" aria-hidden="true" />
      </div>
      {isOpen && (
        <div

          className="absolute rounded-2xl top-7 left-0 z-50 flex flex-col gap-y-1.5 bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {services.map((item) => (
                <motion.div
                  key={item.name}
                  className="group relative flex items-center justify-start gap-x-6 rounded-lg p-4 transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[hsla(206,49%,37%,.80)] hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                  initial="hidden"
                  animate="visible"
                  variants={menuVariants}
                >
                  <div className="size-9 rounded-md bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="size-9 inline-flex text-[#4d4d4d] group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div onClick={() => setIsOpen(!isOpen)}>
                    <Link to={item.to} className="font-semibold prose text-gray-800 group-hover:text-white">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-500 group-hover:text-white">{item.description}</p>
                  </div>
                </motion.div>
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
      )}
    </motion.div>
  );
}