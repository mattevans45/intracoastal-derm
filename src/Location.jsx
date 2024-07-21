import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Location = () => {
  const address = "509 Olde Waterford Way Suite 103, Leland, NC 28451";
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Helmet>
        <title>Our Location - Intracoastal Dermatology and Skin Surgery</title>
        <meta
          name="description"
          content="Find Intracoastal Dermatology and Skin Surgery at 509 Olde Waterford Way, Suite 103, Leland, NC 28451. Visit us for expert dermatology care."
        />
        <link rel="canonical" href="https://intracoastal-dermatology.com/location" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dermatology",
            name: "Intracoastal Dermatology and Skin Surgery",
            image:
              "https://intracoastal-dermatology.com/IntracoastalDermatologyAndSkinSurgeryMainLogo.webp",
            "@id": "https://intracoastal-dermatology.com",
            url: "https://intracoastal-dermatology.com",
            telephone: "(910) 631-0301",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "509 Olde Waterford Way Suite 103",
              addressLocality: "Leland",
              addressRegion: "NC",
              postalCode: "28451",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 34.2167209,
              longitude: -78.02116389999999,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "14:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
              "https://www.instagram.com/intracoastaldermatology/",
            ],
          })}
        </script>
        <meta
          property="og:title"
          content="Our Location - Intracoastal Dermatology and Skin Surgery"
        />
        <meta
          property="og:description"
          content="Find Intracoastal Dermatology and Skin Surgery at 509 Olde Waterford Way, Suite 103, Leland, NC 28451. Visit us for expert dermatology care."
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/location"
        />
      </Helmet>

      <section className="mx-auto flex h-full w-full flex-col items-center justify-center bg-gray-100  px-4 pt-10 font-display md:px-10">
        <div className="prose flex flex-col items-center justify-center text-center md:mr-10 md:w-1/2 md:text-left">
          <h1 className="prose-2xl mt-5 text-center font-semibold text-[#4d4d4d] md:text-3xl">
            Office Location
          </h1>
          <address className="mt-2 text-[#4d4d4d]">{address}</address>
          <p className="prose-xl mt-4 font-display font-semibold text-[#4d4d4d]">
            Hours of Operation
          </p>
          <p className="text-[#4d4d4d]">M-F 8AM - 5PM</p>
        </div>

        <div className="relative mx-auto my-4 flex flex-col items-center justify-center p-4 md:w-1/2 md:p-0">
          <h1 className="prose-2xl mb-5 font-semibold text-[#4d4d4d] md:text-3xl">
            Office Location on Map
          </h1>
          <div className="relative h-[20rem] w-full overflow-hidden rounded-lg md:h-[40rem]">
            <iframe
              className="absolute inset-0 z-0 h-full w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus"
              width="100%"
              height="100%"
              title="Intracoastal Dermatology Office Location"
              allowFullScreen=""
            ></iframe>
            <motion.div
              className={`absolute bottom-0 left-0 right-0 z-30 flex w-full flex-nowrap items-center justify-between rounded bg-white py-2 shadow-md ${minimized ? "md:mx-0 md:hidden" : "md:visible md:w-full"}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mapVariants}
            >
              <h5 className="title-font mx-4 text-center font-semibold tracking-widest text-[#4d4d4d] md:text-left">
                Intracoastal Dermatology
              </h5>
              <button
                onClick={toggleMinimize}
                className="mr-4 flex h-7 w-10 items-center justify-center rounded border-0 bg-slate-500/75 px-3 py-0 text-lg text-white hover:bg-slate-600 focus:outline-none"
              >
                {minimized ? <LuChevronUp /> : <LuChevronDown />}
              </button>
            </motion.div>

            <AnimatePresence>
              {!minimized && (
                <motion.div
                  className="absolute left-0 right-0 top-0 z-20 flex items-start rounded bg-white py-6 shadow-md"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={detailsVariants}
                >
                  <div className="px-6 py-2 lg:w-1/2">
                    <button
                      onClick={toggleMinimize}
                      className="h-18 absolute -right-3 top-1 mr-4 w-10 rounded border-0 bg-slate-500/75 px-3 py-2 text-lg text-white hover:bg-slate-600 focus:outline-none"
                    >
                      <LuChevronDown />
                    </button>

                    <h2 className="text-sm font-semibold tracking-widest text-[#4d4d4d]">
                      OFFICE ADDRESS
                    </h2>
                    <p className="mt-1 text-[#4d4d4d]">
                      509 Olde Waterford Way
                      <br />
                      Suite 103 <br />
                      Leland, North Carolina 28451
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col px-6 lg:mt-0 lg:w-1/2">
                    <h2 className="font-semibold text-[#4d4d4d]">EMAIL</h2>
                    <a
                      href="mailto:example@email.com"
                      className="max-w-full overflow-y-auto break-all text-sm leading-tight text-[#30648B]"
                    >
                      intracoastaldermatology@gmail.com
                    </a>
                    <h2 className="mt-4 text-xs font-semibold tracking-widest text-[#4d4d4d]">
                      PHONE
                    </h2>
                    <p className="leading-relaxed">(910) 631-0301</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
