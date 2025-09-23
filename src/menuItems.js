import {
  HiOutlineOfficeBuilding,
  HiOutlineMail,
  HiOutlineIdentification,
} from "react-icons/hi";
import { RiCalendarLine, RiAccountBoxLine } from "react-icons/ri";
import { FaCreditCard } from 'react-icons/fa';

const menuItems = [
  {
    id: 'about',
    icon: HiOutlineIdentification,
    text: "About Us",
    to: "/about",
    description: "Learn about us",
    category: 'information',
    priority: 1
  },
  {
    id: 'services',
    icon: HiOutlineOfficeBuilding,
    text: "Our Services",
    to: "/services",
    description: "View our services",
    category: 'information',
    priority: 2
  },
  {
    id: 'location',
    icon: HiOutlineOfficeBuilding,
    text: "Location",
    to: "/location",
    description: "Find our location",
    category: 'information',
    priority: 3
  },
  {
    id: 'contact',
    icon: HiOutlineMail,
    text: "Contact",
    to: "/contact",
    description: "Contact us",
    category: 'information',
    priority: 4
  },
  {
    id: 'appointment',
    icon: RiCalendarLine,
    text: "Request Appointment",
    to: "/schedule-appointment",
    description: "Schedule an appointment",
    category: 'action',
    priority: 1
  },
  {
    id: 'pay',
    icon: FaCreditCard,
    text: "Pay Bill Online",
    to: "https://intracoastaldermatology.ema.md/ema/pay/online",
    description: "Pay Bill Online",
    target: "_blank",
    category: 'action',
    priority: 2
  },
  {
    id: 'portal',
    icon: RiAccountBoxLine,
    text: "Patient Portal",
    to: "https://intracoastaldermatology.ema.md",
    description: "Link to external Patient Portal Application",
    target: "_blank",
    category: 'action',
    priority: 3
  },
];

export default menuItems;