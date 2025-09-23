'use client';

import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { ChevronDownIcon, CalendarIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { MdMedicalServices } from 'react-icons/md';
import Link from 'next/link';
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import Hair from "./Hair.jsx";
import { cn } from './library/utils.js';
;

export function SolarCosmeticOutline(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0zm3.5-1.5V5.618a.25.25 0 0 0-.362-.224l-2 1a.25.25 0 0 0-.138.224v3.632zm10.25-6a6.25 6.25 0 0 0-.75 12.455v2.545H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.545A6.251 6.251 0 0 0 16.5 4.25m0 11a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5" clipRule="evenodd"></path></svg>);
}
export function MaterialSymbolsLightDermatologyOutlineSharp(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 20v-9h6.5v1q0 1.042.729 1.77q.728.73 1.769.73t1.771-.73T14.5 12v-1H21v9zm1-1h16v-7h-4.5q0 1.46-1.024 2.48T12 15.5t-2.476-1.024T8.5 12H4zm8-6.5q-.214 0-.357-.144T11.5 12q0-2.601.596-5.13t2.562-4.235q.17-.121.369-.113q.198.009.339.17q.14.162.121.37t-.189.329q-1.827 1.551-2.313 3.878Q12.5 9.595 12.5 12q0 .213-.144.356t-.357.144m-6.252 2.923q.29 0 .483-.19t.193-.48t-.19-.483t-.48-.193t-.483.19t-.193.48t.19.483t.48.193m1 2.5q.29 0 .483-.19t.193-.48t-.19-.483t-.48-.193t-.483.19t-.193.48t.19.483t.48.193m11.5-2.5q.29 0 .483-.19t.193-.48t-.19-.483t-.48-.193t-.483.19t-.193.48t.19.483t.48.193M4 19h16z"></path></svg>);
}


export function HealthiconsSurgicalSterilizationOutline(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48" {...props}><g fill="none"><path d="M0 0h48v48H0z"></path><path fill="currentColor" fillRule="evenodd" d="M24 36a4 4 0 0 1 2.185.649L28.002 4l.998.056l.998-.056l1.817 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.553L28 40.03A4 4 0 1 1 24 36m5-13.944l.665 11.956h-1.33zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0M16 4.234l-1.514.909L15 6c-.514-.857-.516-.857-.516-.857l-.001.001l-.004.002l-.007.005l-.018.011a2 2 0 0 0-.206.145a6 6 0 0 0-.486.418c-.389.374-.888.946-1.395 1.775c-1.016 1.663-2.042 4.323-2.303 8.433c-.08 1.253.645 2.308 1.678 2.789A2.5 2.5 0 0 0 11 20.5v21a2.5 2.5 0 0 0 5 0v-21c0-.894-.469-1.678-1.174-2.12A3 3 0 0 0 16 16zM12.06 16.06c.236-3.714 1.132-6.025 1.94-7.394V16a1 1 0 0 1-1 1c-.569 0-.971-.454-.94-.94M14 20.586V20.5a.5.5 0 0 0-1 0v1.086zm0 2.828v1.172l-1 1v-1.172zm0 5.172v-1.172l-1 1v1.172zm0 2.828V41.5a.5.5 0 0 1-1 0v-9.086z" clipRule="evenodd"></path></g></svg>);
}
const services = [
  {
    name: "General Dermatology",
    description: "Psoriasis, Atopic Dermatitis (Eczema), Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin discoloration, and excessive sweating.",
    href: "/services/general",
    icon: MaterialSymbolsLightDermatologyOutlineSharp,
  },
  {
    name: "Cosmetic Dermatology",
    description: "Neuromodulators, Dermal Filler, and Lasers.",
    href: "/services/cosmetic",
    icon: SolarCosmeticOutline,
  },
  {
    name: "Surgical Dermatology",
    description: "Skin Cancer Removal, Mohs Surgery, Scar Revision, and Mole Removal.",
    href: "/services/surgical",
    icon: HealthiconsSurgicalSterilizationOutline,
  },
];

const callsToAction = [
  { name: 'View All Services', href: '/services', icon: MdMedicalServices },
  { name: 'Schedule an Appointment', href: '/schedule-appointment', icon: CalendarIcon },
];

const ServicesPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-x-1 text-md font-semibold leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30648B] rounded-lg px-2 py-1.5 font-display shadow-gray-400/20  transition-all duration-500 ease-in-out",
          isOpen ? "bg-[#30648B]/90 text-white" : "text-[#4d4d4d] hover:bg-[#30648B]/90 hover:text-white"
        )}
      >
        SERVICES
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-40 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {services.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#30648B]" aria-hidden="true" />
                  </div>
                  <div>
                    <Link onClick={()=> setIsOpen(!isOpen)} href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ServicesPopover);