import React, { useRef, useEffect, useCallback, memo } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices } from "react-icons/md";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LOGO from "./assets/images/optimizations/IntracoastalDermatologyLogo.webp";
import { RiCalendarLine, RiHealthBookLine } from "react-icons/ri";
import {
  HiOutlineOfficeBuilding,
  HiOutlineMail,
  HiOutlineIdentification,
} from "react-icons/hi";

const COLORS = {
  text: "#4d4d4d",
  bg: "bg-gray-50",
  hoverBg: "bg-gray-100",
};

const menuItems = [
  {
    icon: HiOutlineOfficeBuilding,
    text: "Location",
    to: "/location",
    description: "Find our location",
  },
  {
    icon: HiOutlineMail,
    text: "Contact",
    to: "/contact",
    description: "Contact us",
  },
  {
    icon: HiOutlineIdentification,
    text: "About Us",
    to: "/about",
    description: "Learn about us",
  },
  {
    icon: RiHealthBookLine,
    text: "Insurances Accepted",
    to: "/insurances-accepted",
    description: "View accepted insurances",
  },
  {
    icon: RiCalendarLine,
    text: "Schedule Appointment",
    to: "/schedule-appointment",
    description: "Schedule an appointment",
  },
];

const ServiceItem = memo(({ service, setMobileMenuOpen }) => (
  <div className="relative my-1 flex w-full items-center gap-x-6 rounded-lg bg-gray-100 px-7 py-1 text-sm leading-6 text-[#4d4d4d] drop-shadow-sm transition-opacity duration-300 hover:animate-pulse-slow hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-white">
    <div className="flex h-11 w-11 items-center justify-center rounded-lg group-hover:bg-slate-100">
      <service.icon className="h-6 w-fit text-[#4d4d4d]" />
    </div>
    <div className="flex-1 rounded-md p-2 hover:bg-slate-200/50">
      <Link
        onClick={() => setMobileMenuOpen(false)}
        to={service.to}
        className="font-display font-600 text-[#4d4d4d]"
      >
        {service.name}
        <p className="prose-sm mt-1 text-pretty font-display font-400 text-[#4d4d4d]">
          {service.description}
        </p>
      </Link>
    </div>
  </div>
));

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

const SidebarMenu = memo(({ mobileMenuOpen, setMobileMenuOpen, services }) => {
  const [isServicesOpen, toggleServicesOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  }, [setMobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, handleClickOutside]);

  return (
    <motion.nav
      initial={false}
      animate={mobileMenuOpen ? "open" : "closed"}
      ref={containerRef}
      className="absolute right-0 top-0 z-30 mx-auto h-screen w-full overflow-x-auto rounded-lg bg-gray-200/65 p-3 font-Playfair shadow-lg backdrop-blur-md sm:w-1/2 sm:shadow-xl sm:backdrop-blur-lg md:w-1/2"
    >
      <div className="flex items-center justify-between p-4">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img
            className="mx-auto my-4 w-full max-w-48 object-center p-1 bg-blend-multiply sm:max-h-48 sm:max-w-48 md:max-h-48 md:max-w-48"
            srcSet={`${LOGO} 1x, ${LOGO} 2x`}
            sizes="(max-width:200px) 8rem, 10rem"
            loading="lazy"
            fetchpriority="high"
            alt="Intracoastal Dermatology Logo"
          />
        </Link>
        <div className="z-50 w-fit rounded-full bg-gray-50 p-2.5 text-[#4d4d4d] drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:ring-1 hover:ring-white">
          <XMarkIcon
            onClick={() => setMobileMenuOpen(false)}
            className="h-6 w-6 text-[#4d4d4d] hover:animate-pulse-slow"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="w-full rounded-lg">
        <button
          onClick={toggleServicesOpen}
          className="mx-auto flex w-full items-center justify-center text-[#4d4d4d]"
        >
          <div className="mx-auto flex w-full items-center rounded-lg bg-gray-50 px-8 py-2 transition-all duration-300 hover:animate-pulse-slow hover:bg-gray-100 hover:ring-2 hover:ring-white">
            <MdOutlineMedicalServices className="h-6 w-7 text-[#4d4d4d]" />
            <span className="mx-auto w-full flex-grow px-7 py-2 text-left font-display font-600 capitalize leading-relaxed">
              Services
            </span>
            <ChevronDownIcon
              className={`h-6 w-7 rounded-lg bg-gray-50 text-[#4d4d4d] drop-shadow-sm transition-all duration-300 hover:bg-gray-50 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        </button>
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              className="mx-auto mt-1 flex h-full w-full flex-col flex-wrap items-center justify-between gap-x-1 rounded-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
                closed: {
                  opacity: 0,
                  y: -10,
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
              }}
              transition={{ duration: 0.2 }}
            >
              {services.map((service) => (
                <ServiceItem key={service.name} service={service} setMobileMenuOpen={setMobileMenuOpen} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mx-auto mb-1 flex flex-col items-start justify-center rounded-lg py-0.5 font-500 leading-7 text-[#4d4d4d]"
        >
          <ul className="mb-20 flex w-full flex-col flex-wrap items-stretch justify-center gap-1 rounded-lg px-0 py-1">
            {menuItems.map((item) => (
              <MenuItem key={item.text} item={item} setMobileMenuOpen={setMobileMenuOpen} />
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
});

export default SidebarMenu;