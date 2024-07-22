import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAllCategories } from "./serviceUtils";
import Breadcrumb from "./Breadcrumb";
import { CalendarIcon } from "@heroicons/react/24/outline";
import generalDermatology from "./assets/images/optimized/amanda-dalbjorn-fvInY-Gh7sc-unsplash.webp"
import cosmeticDermatology from "./assets/images/optimized/angelo-pantazis-h0AnGGgseio-unsplash.webp"
import surgicalDermatology from "./assets/images/optimized/ozkan-guner-6E-3v5NZxMw-unsplash.webp"

const Services = () => {
  const categories = getAllCategories();

  const catgegoriesPhotos = {
    general: generalDermatology,
    cosmetic: cosmeticDermatology,
    surgical: surgicalDermatology,
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Intracoastal Dermatology</title>
        <meta
          name="description"
          content="Explore our dermatology services at Intracoastal Dermatology. Expert care for all your dermatological needs."
        />
        <link
          rel="canonical"
          href="https://intracoastal-dermatology.com/services"
        />
        <meta
          property="og:title"
          content="Our Services - Intracoastal Dermatology"
        />
        <meta
          property="og:description"
          content="Explore our dermatology services at Intracoastal Dermatology and Skin Surgery. Dr. Harris provides expert care for all your dermatological needs. From General Dermatology, Surgical Dermatology, and Cosmetic Dermatology. Read more about the services we offer right here in Leland, NC."
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/services"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...categories.flatMap((category) =>
                category.services.map((service) => ({
                  "@type": "MedicalProcedure",
                  name: service.name,
                  description: service.description,
                  url: `https://intracoastal-dermatology.com/services/${category.name}`,
                  image:
                    "https://intracoastal-dermatology.com/IntracoastalDermatologyAndSkinSurgeryMainLogo.webp",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "509 Olde Waterford Way, Suite 103",
                    addressLocality: "Leland",
                    addressRegion: "NC",
                    postalCode: "28451",
                    addressCountry: "US",
                  },
                })),
              ),
              {
                "@type": [
                  "Organization",
                  "MedicalBusiness",
                  "LocalBusiness",
                  "MedicalOrganization",
                ],
                url: "https://intracoastal-dermatology.com/",
                logo: "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
                description:
                  "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 34.21687,
                  longitude: -78.02111,
                },
                makesOffer: [
                  {
                    "@type": "Offer",
                    name: "General Dermatology",
                    description:
                      "Comprehensive skin health examinations and treatments",
                  },
                  {
                    "@type": "Offer",
                    name: "Cosmetic Dermatology",
                    description:
                      "Advanced cosmetic procedures for skin rejuvenation",
                  },
                  {
                    "@type": "Offer",
                    name: "Surgical Dermatology",
                    description:
                      "Specialized surgical treatments for skin conditions",
                  },
                ],
                potentialAction: {
                  "@type": "ReserveAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://intracoastal-dermatology.com/schedule-appointment",
                    inLanguage: "en-US",
                    actionPlatform: [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/IOSPlatform",
                      "http://schema.org/AndroidPlatform",
                    ],
                  },
                  result: {
                    "@type": "Reservation",
                    name: "Schedule an appointment",
                  },
                },
                openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-910-631-0301",
                    contactType: "appointment",
                    areaServed: "Leland",
                    availableLanguage: ["English"],
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
                  "https://www.instagram.com/intracoastaldermatology/",
                ],
                name: "Intracoastal Dermatology and Skin Surgery",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "509 Olde Waterford Way Suite 103",
                  addressLocality: "Leland",
                  addressRegion: "NC",
                  postalCode: "28451",
                  addressCountry: "US",
                },
                image:
                  "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryMainLogo.webp",
                email: "intracoastaldermatology@gmail.com",
                telephone: "+1-910-631-0301",
                priceRange: "$$",
              },
            ],
          })}
        </script>
      </Helmet>

      <motion.div
        className="services-page mx-auto flex w-full flex-col items-center justify-stretch bg-gray-50 p-4 font-Playfair"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 mt-1 text-center text-4xl font-bold">
          Our Services
        </h1>
        <p className="prose-sm mb-2 text-center text-gray-700">
          Find out more about the various services, treatments, and
          consultations we offer at Intracoastal Dermatology and Skin Surgery.
          Dr. Harris is a board-certified dermatologist with expertise in
          General, Surgical, and Cosmetic Dermatology. 
        </p>

        <div className="categories-list mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full max-w-screen-md cursor-pointer overflow-hidden rounded-3xl shadow-lg drop-shadow-lg sm:max-w-md lg:max-w-lg"
            >
              <Link
                to={`/services/${category.id}`}
                className="block h-full w-full"
              >
                
                <img
                  src={catgegoriesPhotos[category.id]}
                  loading="eager"
                  width={500}
                  height={500}
                  alt={category.name}
                  className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-72"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black/20 p-4 text-white">
                  <h2 className="text-shadow-custom mb-2 text-2xl font-bold md:text-3xl">
                    {category.name}
                  </h2>
                  <p className="text-center text-sm leading-relaxed sm:text-base">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mr-auto mt-4 flex w-full justify-center gap-x-4 rounded-md bg-neutral-200 px-2 py-2 pl-2 text-sm sm:hidden">
          <Breadcrumb />
        </div>

        <div className="mt-7 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us?</h2>
          <p className="prose mt-4 text-gray-700">
            At Intracoastal Dermatology and Skin Surgery, we are committed to
            providing the highest level of care for our patients. Our
            state-of-the-art facility and experienced team ensure that you
            receive the best treatment for your skin health.
          </p>
          <p className="prose mb-3 mt-4 text-gray-700">
            We offer personalized consultations to address your specific needs
            and concerns. Whether you're looking for general dermatology
            services, advanced cosmetic procedures, or specialized surgical
            treatments, we have you covered. Contact us today to If you have any questions
          about our services, please contact our office in Leland, NC at (910) 631-0301. We look forward to hearing from you!
          </p>
          <div className="flex  justify-around w-full gap-x-10 items-center ">
          <div className="mt-5 flex min-h-[50px] w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:flex-row">
            <Link
              to="/schedule-appointment"
              className="flex w-full items-center justify-center rounded-md bg-[#30648B] px-3 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#224966] sm:w-auto sm:min-w-[200px] sm:text-base"
              aria-label="Schedule your personalized treatment appointment"
            >
              <CalendarIcon
                className="mr-2 h-5 w-5"
                width="20"
                height="20"
                aria-hidden="true"
              />
              Schedule Appointment
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center justify-center rounded-md border bg-neutral-300 border-white/30 px-3 py-3 text-sm font-semibold leading-6 text-black transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:mt-0 sm:w-auto sm:min-w-[200px] sm:text-base"
              aria-label="Explore our range of tailored beauty treatments and services"
            >
              Contact Us
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </div>


            </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
