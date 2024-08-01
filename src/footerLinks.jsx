import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";

export const ABOUT_LINKS = [
  { to: "/about", label: "About Dr. Harris", isExternal: false },
  { to: "/location", label: "Office Location",isExternal: false },
];

export const SERVICE_LINKS = [
  { to: "/services/cosmetic", label: "Cosmetic Procedures" ,isExternal: false},
  { to: "/services/general", label: "General Dermatology", isExternal: false },
  { to: "/services/surgical", label: "Surgical Dermatology", isExternal: false },

];

export const PATIENT_RESOURCES = [
  {
    label: "Pay Bill Online",
    to: "https://intracoastaldermatology.ema.md/ema/pay/online",

    target: "_blank",
    isExternal: true,
  },
  {
    to: "https://intracoastaldermatology.ema.md",
    label: "Patient Portal",
    target: "_blank",
    isExternal: true,
  },
  { to: "/schedule-appointment", label: "Schedule Appointment", isExternal: false, },
  
  // { to: "/telemedicine", label: "Telemedicine" },
];

export const DOCUMENTS_LINKS = [
  { to: "/insurances-accepted", label: "Insurance Accepted" , isExternal: false},
  // { to: "/medical-release-form", label: "Medical Release Form" },
  { to: "/medical-disclaimer", label: "Medical Disclaimer", isExternal: false },
];

export const SOCIAL_LINKS = [
  {
    to: "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
    ariaLabel: "Follow us on Facebook",
    icon: <MdOutlineFacebook className="h-6 w-6" />,
    isExternal: true,
  },
  {
    to: "https://www.instagram.com/intracoastaldermatology/",
    ariaLabel: "Follow us on Instagram",
    icon: <LuInstagram className="h-6 w-6" />,
    isExternal: true,
  },
  {
    to: "https://twitter.com/intracoastalderm",
    ariaLabel: "Follow us on Twitter",
    icon: <LuTwitter className="h-6 w-6" />,
    isExternal: true,
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
