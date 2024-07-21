import {
    HiOutlineOfficeBuilding,
    HiOutlineMail,
    HiOutlineIdentification,
  } from "react-icons/hi";
  import { RiCalendarLine, RiHealthBookLine } from "react-icons/ri";
  
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
  ];
  
  export default menuItems;