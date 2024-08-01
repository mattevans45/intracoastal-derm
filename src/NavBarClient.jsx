"use client";

import { useState, useRef, memo, useCallback, lazy, Suspense } from "react";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import PatientResourcesPopover from "./PatientResourcesPopover";
import { cn } from "./library/utils";

const SideBarMenu = dynamic(() => import("./SideBarMenu"), { ssr: false });
const ServicesPopover = lazy(() => import("./ServicesPopover"));

const NavbarClient = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
  
    const toggleMobileMenu = useCallback(() => {
      setMobileMenuOpen((prevState) => !prevState);
    }, []);
  
    return (
      <>
        <MobileMenuButton toggleMobileMenu={toggleMobileMenu} />
        <DesktopMenu />
        <Overlay
          isVisible={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(false)}
        />
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          sidebarRef={sidebarRef}
        />
      </>
    );
  };
  
  const Overlay = memo(({ isVisible, onClick }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 bottom-0  z-[55] h-screen w-full bg-black/30 backdrop-blur-sm"
          onClick={onClick}
        
        />
      )}
    </AnimatePresence>
  ));

Overlay.displayName = "Overlay";

const NavbarLogo = memo(() => (
  <Link href="/">
     <Image
              className="z-40 h-auto w-auto object-cover"
              src={Logo}
              priority
              width={170}
              height={240}
              alt="Intracoastal Dermatology Logo"
              sizes="(max-width: 768px) 170px, (max-width: 1200px) 170px, 170px"
          
            />
  </Link>
));

NavbarLogo.displayName = "NavbarLogo";

const MobileMenuButton = memo(({ toggleMobileMenu }) => (
  <div className="flex md:hidden">
    <button
      type="button"
      className="-m-1.5 mr-2.5 flex items-center justify-end rounded-md text-[#4d4d4d] transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:drop-shadow-sm"
      onClick={toggleMobileMenu}
      aria-label="Open main menu"
    >
      <Bars3Icon
        className="h-9 w-9 rounded-lg bg-gray-100 text-gray-700 shadow-gray-200 drop-shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-sm hover:ring-gray-200"
        aria-hidden="true"
      />
    </button>
  </div>
));

MobileMenuButton.displayName = "MobileMenuButton";

const DesktopMenu = memo(() => {
  const [servicesPopoverOpen, setServicesPopoverOpen] = useState(false);

  const pathname = usePathname();
  const toggleServicesPopover = useCallback(() => {
    setServicesPopoverOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="md:text-md lg:text-md hidden max-h-fit font-display font-500 md:flex md:items-center md:justify-evenly md:text-sm lg:flex lg:items-center lg:justify-center lg:gap-4 lg:space-x-3">
      <ServicesNavItem href="/services" pathname={pathname}>
        <Suspense fallback={<div>Services</div>}>
          <ServicesPopover
            isOpen={servicesPopoverOpen}
            setIsOpen={toggleServicesPopover}
          />
        </Suspense>
      </ServicesNavItem>
      <NavItem href="" pathname={pathname}>
        <Suspense fallback={<div>Patient Resources</div>}>
          <PatientResourcesPopover
            isOpen={servicesPopoverOpen}
            setIsOpen={toggleServicesPopover}
          />
        </Suspense>
      </NavItem>
      <NavItem pathname={pathname} href="/location">
        LOCATION
      </NavItem>
      <NavItem pathname={pathname} href="/contact">
        CONTACT
      </NavItem>
      <NavItem pathname={pathname} href="/about">
        ABOUT
      </NavItem>
      <div className="mx-auto inline-flex px-3">
        <NavItem
          pathname={pathname}
          href="/schedule-appointment"
          className="schedule-appointment-button"
        >
          Schedule Appointment
        </NavItem>
      </div>
    </div>
  );
});

DesktopMenu.displayName = "DesktopMenu";

const NavItem = memo(({ href, children, className, onClick, pathname }) => (
  <span
    onClick={onClick}
    className={cn(
      `font-display rounded-lg px-2 py-1.5 text-[#4d4d4d] antialiased shadow-gray-400/20 tracking-wide transition-all duration-500 ease-in-out focus-within:outline-none hover:rounded-lg hover:border-gray-200 hover:bg-[#30648B]/90 hover:px-2 hover:py-1.5 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50`,
      className,
      {
        "active bg-[#30648B]/90 text-white ring ring-gray-200/50":
          pathname === href,
      },
    )}
  >
    {href ? (
      <Link href={href} className={cn("link", { active: pathname === href })}>
        {children}
      </Link>
    ) : (
      children
    )}
  </span>
));

NavItem.displayName = "NavItem";

const ServicesNavItem = memo(({ children, className, onClick }) => (
  <span onClick={onClick} className={`btn-nav ${className || ""}`}>
    {children}
  </span>
));

ServicesNavItem.displayName = "ServicesNavItem";

const MobileMenu = memo(({ mobileMenuOpen, setMobileMenuOpen, sidebarRef }) => (
  <AnimatePresence mode="wait">
       

    {mobileMenuOpen && (
      <motion.div
        ref={sidebarRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-0 right-0 top-0 z-[60] h-screen w-full max-w-sm bg-white shadow-lg md:hidden"
      >
     

        <SideBarMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </motion.div>
    )}
  </AnimatePresence>
));

MobileMenu.displayName = "MobileMenu";

export default memo(NavbarClient);
