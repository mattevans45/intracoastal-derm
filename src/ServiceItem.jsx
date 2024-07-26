'use client'; 

import React, { memo } from "react";
import Link  from "next/link";
import { HiChevronDown, HiChevronRight } from "react-icons/hi"; // Import chevron icon
import slugify from "./slugify";
import { HiPencilSquare } from "react-icons/hi2";
import { GoAlert, GoCheckCircle, GoDash, GoDot, GoPaperAirplane } from "react-icons/go";
import { ServerIcon } from "@heroicons/react/24/outline";
import { GrServices } from "react-icons/gr";
import { GiMedicalPack } from "react-icons/gi";
import { CiMedicalClipboard } from "react-icons/ci";


const ServiceItem = memo(({ service, category, setMobileMenuOpen }) => (
  <li className="w-full rounded-lg bg-gray-100 flex justify-self-center  drop-shadow-sm hover:animate-pulse-slow hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-white transition-colors duration-200">
    <Link
      onClick={() => setMobileMenuOpen(false)}
      href={`/services/${category}/${slugify(service.name)}`}
      className="flex items-center justify-between p-3 w-full group" // Added group for hover effects
    >
      <div className="flex prose items-center">
        <CiMedicalClipboard className="h-5 w-5 mr-3 prose-xl text-gray-600 flex-shrink-0" />
        <span className=" group-hover:text-blue-600 transition-colors font-500 leading-3 tracking-normal text-center text-pretty font-lato duration-200">
          {service.name}
        </span>
      </div>
      <HiChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
    </Link>
  </li>
));

export default ServiceItem;