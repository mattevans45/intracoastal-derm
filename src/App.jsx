import React, { Suspense, lazy, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import Hero from "./components/Hero";
import PageLoader from "./PageLoader.jsx";


import "./index.css";
import { Outlet } from "react-router-dom";

const LazyLoadedComponent = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px",
  });

  return (
    <div ref={ref}>
      {inView && <Component />}
    </div>
  );
};

const HeroServices = lazy(() => import("./HeroServices.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const ServicesLanding = lazy(() => import("./components/ServicesLanding.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const MeetTheTeam = lazy(() => import("./components/MeetTheTeam.jsx"));
const ContactSection = lazy(() => import("./ContactSection.jsx"));


const App = () => {
  const ref = useRef(null);

  return (
    <>
      <Helmet>
        <title>Intracoastal Dermatology and Skin Surgery</title>
        <link rel="canonical" href="https://intracoastal-dermatology.com/" />
        <meta
          name="description"
          content="Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. We are excited to see you at out our new office in Leland, NC. Schedule your consultation with Dr. Blair Harris, DO, FAAD, today."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
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
                  "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. Come check out our new office in Leland, NC. Schedule your consultation today.",

                
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
                openingHours: "Mo,Tu,We,Th,Fr 07:00-16:00",
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
                email: "skin@intracoastal-dermatology.com",
                telephone: "+1-910-631-0301",
                priceRange: "$$",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Appointment Scheduling",
                "description": "Schedule an appointment with Dr. Harris at Intracoastal Dermatology and Skin Surgery.",
                "provider": {
                  "@type": "MedicalBusiness",
                  "name": "Intracoastal Dermatology and Skin Surgery"
                },
                "url": "https://intracoastal-dermatology.com/schedule-appointment",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png"
                },
                "potentialAction": {
                  "@type": "ReserveAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://intracoastal-dermatology.com/schedule-appointment",
                    "inLanguage": "en-US",
                    "actionPlatform": [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/IOSPlatform",
                      "http://schema.org/AndroidPlatform"
                    ]
                  },
                  "result": {
                    "@type": "Reservation",
                    "name": "Dermatology Appointment"
                  }
                }
              }
            ],
          })}
        </script>
        <meta
          property="og:title"
          content="Intracoastal Dermatology and Skin Surgery"
        />
        <meta
          property="og:description"
          content="Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology.Come check out our new office in Leland, NC. Schedule your consultation today."
        />
        <meta
          property="og:image"
          content="https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png"
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/"
        />
        
      </Helmet>

      <Hero />

      <div className="font-playfair container mx-auto flex flex-col overflow-hidden antialiased">
        <div className="mx-2 py-5 text-zinc-800 sm:mx-5">
          <div className="mx-1 rounded-xl bg-white py-3 shadow-lg backdrop-blur-md">
            <h1 className="font-playfair mb-4 text-pretty py-2 text-center text-3xl font-700 leading-tight text-[#4d4d4d] sm:text-4xl">
              Welcome to Intracoastal Dermatology and Skin Surgery
            </h1>
            <div className="px-6 text-center">
              <p className="font-playfair mb-3 text-base leading-relaxed text-zinc-800">
                Our office in Leland, NC, is now open! We're your premier
                destination for comprehensive skin care. Our expert team, led by
                Dr. Harris, combines cutting-edge technology with personalized
                attention to deliver exceptional dermatological services.
              </p>
              <ul className="mb-3 inline-block text-left text-sm text-zinc-800">
                <li>✓ State-of-the-art facility and equipment</li>
                <li>✓ Comprehensive skin health services</li>
                <li>✓ Latest cosmetic treatments available</li>
                <li>✓ Experienced, board-certified dermatologist</li>
                <li>✓ Personalized treatment plans</li>
              </ul>
              <p className="font-playfair text-base leading-relaxed text-zinc-800">
                From routine checks to advanced procedures, we're committed to
                your skin's health and beauty. Schedule your appointment today
                and experience the Intracoastal difference.
              </p>
            </div>
          </div>

         
            <Suspense fallback={<PageLoader />}>
              <LazyLoadedComponent Component={HeroServices} />
              <LazyLoadedComponent Component={AboutUs} />
              <LazyLoadedComponent Component={ServicesLanding} />
              <LazyLoadedComponent Component={Testimonials} />
              <LazyLoadedComponent Component={MeetTheTeam} />
              <LazyLoadedComponent Component={ContactSection} />
            </Suspense>
       
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default App;
