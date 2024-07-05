import React from "react";
import Hero from "./components/Hero";
import "./index.css"
import { Suspense, lazy } from "react";
import PageLoader from "./PageLoader.jsx";
import { Outlet } from "react-router-dom";

const HeroServices = lazy(() => import("./HeroServices.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const ServicesLanding = lazy(() => import("./components/ServicesLanding.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const MeetTheTeam = lazy(() => import("./components/MeetTheTeam.jsx"));
const ContactSection = lazy(() => import("./ContactSection.jsx"));
function App() {
  return (
    
    <div>
      <Hero />
      <div className="container autoShow mx-auto">
        <div className="prose-xl mt-10 rounded-xl p-3 mx-7 bg-white  text-[#4d4d4d]">
          <h2 className="mt-3 text-center font-500 text-[#4d4d4d]">
            Welcome to Intracoastal Dermatology and Skin Surgery Clinic
          </h2>
          <p className="text-center text-[#4d4d4d]">
            We are excited to announce the opening of our new office in Leland,
            NC, on August 1st, 2024. Dr. Harris and the rest of our team of
            professionals and skincare specialists are dedicated to providing
            you with the highest level of care for all your dermatological
            needs.
          </p>
          <p className="text-center text-[#4d4d4d]">
          From routine skin checks and cosmetic treatments to advanced skin surgery, we are here to help you achieve and maintain healthy, beautiful skin. Schedule your appointment today to secure your spot and experience our expert care firsthand.
        </p>

        </div>
      </div>
      <Suspense fallback={<PageLoader />}>
        <HeroServices />
        <AboutUs />
        <ServicesLanding />
        <Testimonials />
        <MeetTheTeam />
        <ContactSection />
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
