import { PhoneIcon, MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactBar = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkDismissed = () => {
      const dismissed = sessionStorage.getItem("contactBarDismissed");
      setIsVisible(!dismissed);
      setInitialized(true);
    };

    checkDismissed();

    window.addEventListener("storage", checkDismissed);

    return () => {
      window.removeEventListener("storage", checkDismissed);
    };
  }, []);

  const dismissBar = () => {
    setIsVisible(false);
    sessionStorage.setItem("contactBarDismissed", "true");
  };

  return (
    initialized && (
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            key="contactBar"
            initial={{ height: 0, opacity: 0 }}
        
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full bg-gradient-to-r from-[#30548B] to-[#3A5F9B] font-display text-white shadow-lg ${className}`}
          >
            <div className="container mx-auto flex items-center justify-between px-2 py-2 sm:px-4 sm:py-3">
              <address className="flex flex-1 items-center text-xs not-italic sm:text-sm md:text-base">
                <MapPinIcon className="mr-1 h-4 w-4 flex-shrink-0 sm:mr-2 sm:h-5 sm:w-5" />
                <span className="hidden truncate sm:inline">
                  509 Olde Waterford Way, Suite 103, Leland, NC 28451
                </span>
                <span className="truncate sm:hidden">
                  509 Olde Waterford Way,
                  <br />
                  Suite 103, Leland, NC
                </span>
              </address>
              <div className="ml-2 flex items-center border-l border-white/30 pl-2 sm:ml-4 sm:pl-4">
                <a
                  className="flex items-center text-xs transition-colors hover:text-gray-200 sm:text-sm md:text-base"
                  href="tel:910-631-0301"
                >
                  <PhoneIcon className="mr-1 h-4 w-4 flex-shrink-0 sm:mr-2 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">(910) 631-0301</span>
                  <span className="sm:hidden">
                    <span className="sr-only">Phone: </span>
                    910-631-
                    <wbr />
                    0301
                  </span>
                </a>
              </div>
              <button
                onClick={dismissBar}
                className="ml-2 flex-shrink-0 rounded-full bg-white/10 p-1 text-white transition-colors hover:bg-white/20 sm:ml-4 sm:p-1.5"
                aria-label="Dismiss contact bar"
              >
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  );
};

export default ContactBar;
