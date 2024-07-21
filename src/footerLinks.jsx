import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";

export const ABOUT_LINKS = [
  { to: "/about", label: "About Dr. Harris" },
  { to: "/location", label: "Office Location" },
];

export const SERVICE_LINKS = [
  { to: "/services/cosmetic", label: "Cosmetic Procedures" },
  { to: "/services/medical", label: "Medical Dermatology" },
  { to: "/services/surgical", label: "Surgical Dermatology" }
];

export const PATIENT_RESOURCES = [
  { to: "/patient-portal", label: "Patient Portal" },
  { to: "/schedule-appointment", label: "Schedule Appointment" },
  { to: "/telemedicine", label: "Telemedicine" },
  // { to: "/patient-education", label: "Patient Education" },
];

export const DOCUMENTS_LINKS = [
  { to: "/insurances-accepted", label: "Insurance Accepted" },
  // { to: "/office-policies", label: "Office Policies" },
  { to: "/medical-release-form", label: "Medical Release Form" },
  { to: "/medical-disclaimer", label: "Medical Disclaimer" },
];

export const SOCIAL_LINKS = [
  {
    to: "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
    ariaLabel: "Follow us on Facebook",
    icon: <MdOutlineFacebook className="h-6 w-6" />,
  },
  {
    to: "https://www.instagram.com/intracoastaldermatology/",
    ariaLabel: "Follow us on Instagram",
    icon: <LuInstagram className="h-6 w-6" />,
  },
  {
    to: "https://twitter.com/intracoastalderm",
    ariaLabel: "Follow us on Twitter",
    icon: <LuTwitter className="h-6 w-6" />,
  },
];

export const LEGAL_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/accessibility", label: "Accessibility" },
  { to: "/hipaa", label: "HIPAA Compliance" },
];

export const CONTACT_INFO = {
  phone: "(910) 631-0301",
  email: "intracoastaldermatology@gmail.com",
  address: "509 Olde Waterford Way, Suite 103, Leland, North Carolina 28451",
};