import { Fragment } from "react";
import {
  Popover,
  PopoverPanel,
  Transition,
  PopoverButton,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCreditCard } from "react-icons/fa";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";

const resources = [
  {
    name: "Patient Portal",
    description: "Access your medical records and communicate with our staff.",
    href: "https://intracoastaldermatology.ema.md",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: FaUserCircle,
  },
  {
    name: "Bill Pay",
    description: "Conveniently pay your medical bills online.",
    href: "https://intracoastaldermatology.ema.md/ema/pay/online",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaCreditCard,
  },
  {
    name: "Insurances Accepted",
    description: "View our insurance policy and provider coverage.",
    href: "/insurances-accepted",
    icon: FaHouseMedicalCircleCheck,
  },
];

export default function PatientResourcesPopover() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <PopoverButton className="text-md inline-flex items-center gap-x-1 rounded-lg px-2 py-1.5 font-display font-semibold leading-6 text-[#4d4d4d] shadow-gray-400/20 drop-shadow-md transition-all duration-500 ease-in-out hover:bg-[#30648B]/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30648B]">
            PATIENT RESOURCES
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-[#30648B]"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <div onClick={() => close()}>
                          <Link
                          rel={item.rel}
                          target={item.target}
                            to={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
