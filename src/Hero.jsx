import React from "react";
import hero from "./assets/hero.webp";
import { Link } from "react-router-dom";
import eyes from "./assets/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg";

import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel, GiSyringe, GiHairStrands } from "react-icons/gi";
import boardwalk from "./assets/alex-CWwdzVtaGKs-unsplash.jpg";
import a from "./assets/chantal-JSTvpv0wGKc-unsplash.webp";

import image from "./assets/sean.jpg";
import HeroServices from "./HeroServices";
const Hero = () => {
  return (
    <>
<section className="relative max-w-7xl w-full mx-auto mt-1 px-4 md:px-8 lg:px-12 xl:px-16">
  <div className="relative flex flex-col items-center max-h-[400px] justify-center rounded-3xl bg-sky-800 bg-opacity-40 shadow-lg drop-shadow-lg hue-rotate-15">

    <div
      className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl drop-shadow-2xl shadow-sky-100"
    />
    <img
      src={a}
      loading="lazy"
      className="absolute brightness-75 blur-[1.2px] mix-blend-color w-full h-[400px] rounded-3xl shadow-xl object-cover"
      alt="Background"
    />
    <div className="relative flex flex-col items-center justify-center z-10 w-full mx-auto text-center text-white py-20">
      <h1 className="mx-auto prose break-words font-title2 text-4xl sm:text-6xl text-center text-wrap  font-semibold md:text-6xl uppercase bg-gray-50 bg-clip-text text-transparent sm:mt-5">
        <span>Intracoastal</span>
        <br />
        <span className="text-3xl">Dermatology and Skin Surgery</span>
      </h1>
      <p className="sm:mt-14 mt-0  mr-2 py-4 sm:p-0  backdrop-opacity-80 z-30 text-2xl leading-10 font-cursive md:text-3xl border-collapse border-s-4 w-fit lg:h-18 border-t-sky-100/90  shadow-white/30 rounded shadow-2xl  text-sky-100">
        Expert care for healthy skin.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-start md:justify-center gap-y-4 md:gap-x-4">
        <Link
          to="/schedule-appointment"
          className="rounded-md bg-[#30648B] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#224966]"
        >
          Schedule an Appointment
        </Link>
        <Link
          to="/intracoastal-derm/schedule-appointment"
          className="mt-4 md:mt-0 text-sm font-semibold leading-6 rounded-xl p-2 text-gray-200 hover:bg-slate-50/10 "
        >
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </div>
</section>

<div className="container mx-auto">
  <HeroServices></HeroServices>
</div>

    </>
  );
};

export default Hero;
