'use client';

import { useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, CalendarIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

import dynamic from 'next/dynamic';
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";
import { cn } from './library/utils.js';

const ServicePopoverItem = dynamic(() => import('./ServicePopoverItem.jsx'), { ssr: false });

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

const ServicesPopover = ({ isOpen, setIsOpen }) => {
  const popoverRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div ref={popoverRef} className="relative flex flex-col bg-transparent">
      <button
        className={cn(
          "group uppercase rounded-lg h-fit w-fit px-2 py-1.5",
          "transition-all duration-300 ease-in-out",
          isOpen 
            ? "bg-[#30648B]/90 text-white" 
            : "bg-transparent text-[#4d4d4d] hover:bg-[#30648B]/90 hover:text-white"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <p className="inline-flex w-fit h-fit">SERVICES</p>
        <ChevronDownIcon className="h-5 w-5 inline-flex justify-center mt-auto gap-3" aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute start-0 z-50 mt-8 w-screen max-w-md overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="max-w-md overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {services.map((item) => (
                  <ServicePopoverItem key={item.name} item={item} onClick={() => setIsOpen(false)} />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ServicesPopover);
