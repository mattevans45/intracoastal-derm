import React, { Suspense, lazy, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import Hero from "./components/Hero";
import PageLoader from "./PageLoader.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";
import { Outlet } from "react-router-dom";

const LazyLoadedComponent = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
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
        <title>Home | Intracoastal Dermatology and Skin Surgery</title>
        <link rel="canonical" href="https://intracoastal-dermatology.com/" />
        <meta
          name="description"
          content="Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today."
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
          content="Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today."
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

      <div className="container mx-auto overflow-hidden">
        <div className="mx-5 py-5 text-[#4d4d4d]">
          <div className="mx-3 rounded-xl bg-white/85 px-2 py-2 shadow-sm backdrop-blur-md">
            <h1 className="mb-5 text-pretty rounded-xl bg-white py-2 text-center font-Playfair text-4xl font-bold text-[#4d4d4d] sm:text-5xl">
              Welcome to Intracoastal Dermatology and Skin Surgery
            </h1>
            <div className="rounded-xl px-6 text-center">
              <p className="text-pretty leading-relaxed text-[#4d4d4d]">
                We are excited to announce the opening of our new office in
                Leland, NC, on August 1st, 2024. Dr. Harris and the rest of our
                team of professionals and skincare specialists are dedicated to
                providing you with the highest level of care for all your
                dermatological needs.
              </p>
              <p className="mb-4 text-pretty leading-relaxed text-[#4d4d4d]">
                From routine skin checks and cosmetic treatments to advanced
                skin surgery, we are here to help you achieve and maintain
                healthy, beautiful skin. Schedule your appointment today to
                secure your spot and experience our expert care firsthand.
              </p>
            </div>
          </div>

          <ErrorBoundary fallback={NotFound}>
            <Suspense fallback={<PageLoader />}>
              <LazyLoadedComponent Component={HeroServices} />
              <LazyLoadedComponent Component={AboutUs} />
              <LazyLoadedComponent Component={ServicesLanding} />
              <LazyLoadedComponent Component={Testimonials} />
              <LazyLoadedComponent Component={MeetTheTeam} />
              <LazyLoadedComponent Component={ContactSection} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default App;
