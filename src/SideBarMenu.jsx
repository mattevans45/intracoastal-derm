"use client";

import React, { useRef, useMemo, useCallback, useEffect, useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MdOutlineMedicalServices } from "react-icons/md";
import ServicesList from "./ServicesList";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import LOGO from "./assets/images/optimized/IntracoastalDermatologyandSkinSurgeryLogo.webp";
import menuItems from "./menuItems";
import MenuItem from "./MenuItem";
import useClickOutside from "./hooks/useClickOutside";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import Image from "next/image";
import { cn } from "./library/utils";

const SideBarMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
 
  const [isServicesOpen, toggleServicesOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useClickOutside(containerRef, () => setMobileMenuOpen(false), mobileMenuOpen);
  useBodyScrollLock(mobileMenuOpen);

  const handleToggleServices = useCallback(() => {
    toggleServicesOpen();
  }, [toggleServicesOpen]);

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      setShowScrollToTop(scrollContainerRef.current.scrollTop > 200);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const menuVariants = useMemo(
    () => ({
      open: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      },
      closed: {
        opacity: 0,
        x: "100%",
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    }),
    []
  );

  const servicesListVariants = useMemo(
    () => ({
      open: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" },
      },
      closed: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    }),
    []
  );

  const renderMenuItems = useMemo(
    () =>
      menuItems.map((item) => (
        <MenuItem
          key={item.text}
          item={item}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )),
    [setMobileMenuOpen]
  );

  return (
    <motion.nav
      initial="hidden"
      animate={mobileMenuOpen ? "open" : "closed"}
      variants={menuVariants}
      ref={containerRef}
      className="fixed top-0 right-0 h-screen z-30 w-full max-w-sm bg-gray-200/85 p-6 shadow-xl backdrop-blur-lg sm:max-w-md flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between">
      
      <Link href="/" onClick={handleCloseMobileMenu} className="focus:outline-none focus:ring-2 focus:ring-neutral-500">
          <Image
            className="h-full w-56 object-cover p-1 sm:w-56"
            src={LOGO}
            height={175}
            width={200}
            sizes="(max-width: 640px) 10rem, 12rem"
            alt="Intracoastal Dermatology Logo"
          />
        </Link>
        <CloseButton onClick={handleCloseMobileMenu} />
      </div>
      <div ref={scrollContainerRef} className="mt-8 flex-grow overflow-y-auto">
        <div className="space-y-2">
          <ServicesButton
            isOpen={isServicesOpen}
            onClick={handleToggleServices}
          />
          <AnimatePresence>
            {isServicesOpen && (
              <ServicesList
                setMobileMenuOpen={setMobileMenuOpen}
                variants={servicesListVariants}
              />
            )}
          </AnimatePresence>
          <motion.ul
            className="space-y-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderMenuItems}
          </motion.ul>
        </div>
      </div>
      <AnimatePresence>
        {showScrollToTop && <ScrollToTopButton onClick={scrollToTop} />}
      </AnimatePresence>
    </motion.nav>
  );
};
const CloseButton = ({ onClick }) => (
  <AnimatePresence>
    <motion.button
      className="rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Close menu"
      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </motion.button>
  </AnimatePresence>
);

const ScrollToTopButton = ({ onClick }) => (
  <AnimatePresence>
 
    <motion.button
      className="fixed bottom-8 right-8 rounded-full bg-gray-50 p-4 text-gray-400 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
    </motion.button>
  
</AnimatePresence>
);

const ServicesButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center justify-between w-full px-3 py-4 rounded-lg bg-gray-50 text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:ring-1 focus-within:bg-neutral-200 hover:ring-white",
      isOpen ? "bg-blue-200" : ""
    )}
    aria-expanded={isOpen}
    aria-controls="services-list"
  >
    <div className="flex items-center gap-x-7 justify-evenly">
      <MdOutlineMedicalServices className="h-5 w-5 ml-5" />
      <span className="font-medium">Our Services</span>
    </div>
    <ChevronDownIcon
      className={`h-5 w-5 transform transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    />
  </button>
);

export default React.memo(SideBarMenu);
