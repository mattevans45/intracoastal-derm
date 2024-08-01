import React, { memo, useMemo } from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi"; // Import chevron icon
import slugify from "./slugify";

import { CiMedicalClipboard } from "react-icons/ci";

const ServiceItem = memo(({ service, category, setMobileMenuOpen }) => {
  const slugifiedUrl = useMemo(
    () => `/services/${category}/${slugify(service.name)}`,
    [category, service.name],
  );

  return (
    <li className="flex w-full justify-self-center rounded-lg bg-gray-100 drop-shadow-sm transition-colors duration-200 hover:animate-pulse-slow hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-white">
      <Link
        onClick={() => setMobileMenuOpen(false)}
        href={slugifiedUrl}
        className="group flex w-full items-center justify-between p-3"
        aria-label={`View details for ${service.name}`}
      >
        <div className="prose flex items-center">
          <CiMedicalClipboard className="prose-xl mr-3 h-5 w-5 flex-shrink-0 text-gray-600" />
          <span className="leading-2 max-w-[200px] truncate text-pretty text-center font-500 tracking-normal transition-colors duration-200 group-hover:text-blue-600">
            {service.name}
          </span>
        </div>
        <HiChevronRight className="h-5 w-5 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" />
      </Link>
    </li>
  );
});

export default ServiceItem;
