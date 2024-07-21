import React, { useRef, useMemo, useCallback, memo, lazy, Suspense } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices } from "react-icons/md";
import ServicesList from "./ServicesList";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LOGO from "./assets/images/optimized/IntracoastalDermatologyandSkinSurgeryLogo.webp";
import menuItems from "./menuItems";
import MenuItem from "./MenuItem";
import useClickOutside from "./hooks/useClickOutside";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";


const MemoizedMenuItem = memo(MenuItem);


const SidebarMenu = memo(({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isServicesOpen, toggleServicesOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setMobileMenuOpen(false), mobileMenuOpen);
  useBodyScrollLock(mobileMenuOpen);

  const handleToggleServices = useCallback(() => {
    toggleServicesOpen();
  }, [toggleServicesOpen]);

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);

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

  const renderMenuItems = useMemo(() => 
    menuItems.map((item) => (
      <MemoizedMenuItem
        key={item.text}
        item={item}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    ))
  , [menuItems, setMobileMenuOpen]);

  return (
    <motion.nav
      initial={false}
      animate={mobileMenuOpen ? "open" : "closed"}
      variants={menuVariants}
      ref={containerRef}
      className="absolute right-0 top-0 z-30 mx-auto h-screen w-full overflow-x-auto rounded-lg bg-gray-200/65 p-3 font-display shadow-lg backdrop-blur-md sm:w-1/2 sm:shadow-xl sm:backdrop-blur-lg md:w-1/2"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between p-4">
        <Link to="/" onClick={handleCloseMobileMenu}>
          <img
            className="mx-auto my-2 max-h-48 w-full max-w-48 object-center p-1 bg-blend-multiply sm:max-h-52 sm:max-w-52 md:max-h-52 md:max-w-52"
            srcSet={`${LOGO} 1x, ${LOGO} 2x`}
            sizes="(max-width:300px) 10rem, 15rem"
            loading="lazy"
            alt="Intracoastal Dermatology Logo"
          />
        </Link>
        <AnimatePresence>
      {mobileMenuOpen && (
        <motion.button
          className="z-50 w-fit rounded-full bg-gray-50 p-2.5 text-[#4d4d4d] drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:ring-1 hover:ring-white"
          onClick={handleCloseMobileMenu}
          aria-label="Close menu"
          initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1, y:-10 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <XMarkIcon
            className="h-7 w-7 text-[#4d4d4d]"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
      </div>

      <div className="w-full rounded-lg">
        <button
          onClick={handleToggleServices}
          className="mx-auto flex w-full items-center justify-center text-[#4d4d4d]"
          aria-expanded={isServicesOpen}
          aria-controls="services-list"
        >
          <div className="mx-auto flex w-full items-center rounded-lg bg-gray-50 px-9 py-2 transition-all duration-300 hover:animate-pulse-slow hover:bg-gray-100 hover:ring-2 hover:ring-white">
            <MdOutlineMedicalServices className="h-6 w-7 text-[#4d4d4d]" />
            <span className="mx-auto w-full flex-grow px-7 py-2 text-left font-display font-600 capitalize leading-relaxed">
            Our Services
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
              id="services-list"
              className="mx-auto mt-1 flex h-full w-full flex-col flex-wrap items-center justify-between gap-x-1 rounded-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={servicesListVariants}
            >
              <Suspense fallback={<div>Loading...</div> }>
                <div className="w-full">
                  <ServicesList setMobileMenuOpen={setMobileMenuOpen} />
                </div>
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.ul
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mb-20 flex w-full flex-col flex-wrap items-stretch justify-center gap-1 rounded-lg px-0 py-1"
        >
          {renderMenuItems}
        </motion.ul>
      </div>
    </motion.nav>
  );
});

export default SidebarMenu;