import React, { memo } from "react";
import { Link } from "react-router-dom";

const MenuItem = memo(({ item, setMobileMenuOpen }) => (
  <li className="mt-1.5 flex h-full w-full flex-col justify-items-center rounded-lg bg-gray-50 p-1.5 text-[#4d4d4d] drop-shadow-sm transition-all duration-300 hover:animate-pulse-slow hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-white">
    <Link
      onClick={() => setMobileMenuOpen(false)}
      to={item.to}
      className="group mx-0 flex w-full items-center rounded-lg px-4 py-2 hover:bg-gray-100"
    >
      {item.icon && (
        <div className="mx-4 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <item.icon
            className="h-5 w-5 text-[#4d4d4d] group-hover:bg-white"
            aria-hidden="true"
          />
        </div>
      )}
      <span className="mx-3 w-full font-display font-500 capitalize text-[#4d4d4d]">
        {item.text}
      </span>
    </Link>
  </li>
));

export default MenuItem;