"use client";
import dynamic from "next/dynamic";
import Hero from "./Hero";
import PageLoader from "../PageLoader.jsx";

const HeroServices = dynamic(() => import("../HeroServices.jsx"), {
  loading: () => <PageLoader />,
});

const AboutUs = dynamic(() => import("../components/AboutUs.jsx"), {
  loading: () => <PageLoader />,
});

const ServicesLanding = dynamic(
  () => import("../components/ServicesLanding.jsx"),
  {
    loading: () => <PageLoader />,
  },
);

const Testimonials = dynamic(() => import("../components/Testimonials.jsx"), {
  loading: () => <PageLoader />,
});
const MeetTheTeam = dynamic(() => import("../components/MeetTheTeam.jsx"), {
  loading: () => <PageLoader />,
});
const ContactSection = dynamic(() => import("../ContactSection.jsx"), {
  loading: () => <PageLoader />,
});

export default function App() {
  return (
    <main>
      <Hero />
      <div className="font-playfair container mx-auto flex flex-col overflow-hidden antialiased">
        <div className="mx-2 py-5 text-zinc-800 sm:mx-5">
          <div className="mx-1 rounded-xl bg-white py-3 shadow-lg backdrop-blur-md">
            <h1 className="font-playfair mb-4 text-pretty py-2 text-center text-3xl font-700 leading-tight text-[#4d4d4d] sm:text-4xl">
              Welcome to Intracoastal Dermatology and Skin Surgery
            </h1>
            <div className="px-6 text-center">
              <p className="font-playfair mb-3 text-base leading-relaxed text-zinc-800">
                Opening August 1st, 2024 in Leland, NC, we're your premier
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

          <HeroServices />
          <AboutUs />
          <ServicesLanding />
          <Testimonials />
          <MeetTheTeam />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
