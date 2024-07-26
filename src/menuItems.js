import {
    HiOutlineOfficeBuilding,
    HiOutlineMail,
    HiOutlineIdentification,
  
  } from "react-icons/hi";
  import { RiCalendarLine, RiHealthBookLine, RiBillLine, RiAccountPinBoxLine } from "react-icons/ri";
  
  const menuItems = [
    {
      icon: HiOutlineOfficeBuilding,
      text: "Location",
      to: "/location",
      description: "Find our location",
    },
    {
      icon: HiOutlineMail,
      text: "Contact",
      to: "/contact",
      description: "Contact us",
    },
    {
      icon: HiOutlineIdentification,
      text: "About Us",
      to: "/about",
      description: "Learn about us",
    },
    {
      icon: RiHealthBookLine,
      text: "Insurances Accepted",
      to: "/insurances-accepted",
      description: "View accepted insurances",
    },
    {
      icon: RiCalendarLine,
      text: "Schedule Appointment",
      to: "/schedule-appointment",
      description: "Schedule an appointment",
    },

    {
      icon: RiBillLine,
      text: "Pay Bill Online",
      to: "https://intracoastaldermatology.ema.md/ema/pay/online",
      description: "Pay Bill Online",
      target:"_blank"
    },
    {
      icon: RiAccountPinBoxLine,
      text: "Patient Portal",
      to: "https://intracoastaldermatology.ema.md",
      description: "Link to external Patient Portal Application",
      target:"_blank"
    },
  ];
  
  export default menuItems;