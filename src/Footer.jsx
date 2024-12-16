import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import whiteLogo from "./assets/images/white Transparent PNG logo.png";
import footerImg from "./assets/images/optimized/erda-estremera-aSFZKeZiHPc-unsplash.webp";
import {
  ABOUT_LINKS,
  SERVICE_LINKS,
  PATIENT_RESOURCES,
  DOCUMENTS_LINKS,
  SOCIAL_LINKS,
  LEGAL_LINKS,
  CONTACT_INFO
} from "./footerLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative leading-normal uppercase overflow-hidden tracking-wide antialiased text-white z-10">
      <div className="absolute inset-0 bg-gray-500">
        <img
          src={footerImg}
          className="absolute inset-0 h-full w-full object-cover backdrop-blur-sm mix-blend-multiply z-0"
          alt="Footer background"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 px-4 py-8 mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-auto">
          <LogoSection />
          <LinkSection title="About Us" links={ABOUT_LINKS} />
          <LinkSection title="Our Services" links={SERVICE_LINKS} />
          <LinkSection title="Patient Resources" links={PATIENT_RESOURCES} />
          <LinkSection title="Forms/Documents" links={DOCUMENTS_LINKS} />
          <ContactSection info={CONTACT_INFO} socialLinks={SOCIAL_LINKS} />
        </div>
        <hr className="my-6 border-gray-200" />
        {/* <LegalLinks links={LEGAL_LINKS} /> */}
        <Copyright year={currentYear} />
      </div>
    </footer>
  );
};

const LogoSection = () => (
  <div className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 self-center mx-auto justify-self-center lg:col-span-2 mb-6 sm:mb-0">
    <Link to="/" className="flex items-center justify-center" aria-label="Go to homepage">
      <img
        src={whiteLogo}
        className="w-40 h-40 object-contain sm:w-56 sm:h-56"
        alt="Intracoastal Dermatology Logo"
      />
    </Link>
  </div>
);

const LinkSection = ({ title, links }) => (
  <nav className="flex flex-col items-center justify-self-center text-center sm:items-start sm:text-left sm:justify-self-start mb-6 sm:mb-0">
    <h2 className="text-lg font-semibold mb-3">{title}</h2>
    <ul className="text-sm">
      {links.map((link) => (
        <li key={link.to} className="mb-2">
          <Link to={link.to} target={link.target || "_self"} className="hover:underline underline-offset-4" aria-label={link.label}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const ContactSection = ({ info, socialLinks }) => (
  <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-auto">
    <h2 className="text-lg font-semibold mb-3">CONTACT US</h2>
    <address className="not-italic mb-4">
      <p className="text-sm mb-2">{info.phone}</p>
      <p className="text-sm mb-2 w-full text-nowrap">{info.email}</p>
      <p className="text-sm mb-2">{info.address}</p>
    </address>
    <Link to="/contact" className="text-sm underline hover:text-gray-200 mb-4">GET DIRECTIONS</Link>
    <h2 className="text-lg font-semibold mt-4 mb-3">FOLLOW US</h2>
    <ul className="flex justify-center sm:justify-start gap-4 mt-2">
      {socialLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="text-white hover:text-gray-200 transition-colors duration-300"
            aria-label={`Follow us on ${link.ariaLabel}`}
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const LegalLinks = ({ links }) => (
  <nav className="mt-6 text-xs">
    <ul className="flex flex-wrap justify-center sm:justify-start gap-4">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className="hover:underline underline-offset-4">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Copyright = ({ year }) => (
  <div className="text-center sm:text-left mt-6">
    <span className="text-xs">
      © {year}{" "}
      <Link to="/" className="hover:underline" aria-label="Intracoastal Dermatology">
        Intracoastal Dermatology.
      </Link>
      All Rights Reserved.
    </span>
  </div>
);

export default Footer;