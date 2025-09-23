import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaCreditCard } from 'react-icons/fa';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaHouseMedicalCircleCheck } from 'react-icons/fa6';

const resources = [
  {
    name: 'Patient Portal',
    description: 'Access your medical records and communicate with our staff.',
    href: 'https://intracoastaldermatology.ema.md',
    isExternal: true,
    icon: FaUserCircle,
  },
  {
    name: 'Bill Pay',
    description: 'Conveniently pay your medical bills online.',
    href: 'https://intracoastaldermatology.ema.md/ema/pay/online',
    isExternal: true,
    icon: FaCreditCard,
  },
  {
    name: 'Insurances Accepted',
    description: 'View our insurance policy and provider coverage.',
    href: '/insurances-accepted',
    isExternal: false,
    icon: FaHouseMedicalCircleCheck,
  },
];

export default function PatientResourcesPopover() {
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
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-x-1 text-md font-semibold leading-6 "
      >
        PATIENT RESOURCES
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition ease-out duration-200">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {resources.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#30648B]" aria-hidden="true" />
                  </div>
                  <div>
                    {item.isExternal ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    ) : (
                      <Link href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    )}
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}