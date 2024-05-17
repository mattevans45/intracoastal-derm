import React from "react";
import hero from "./assets/hero.webp";
import { Link } from "react-router-dom";
import { useEffect, useState,useRef, useCallback } from "react";
import eyes from "./assets/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg";

import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel, GiSyringe, GiHairStrands } from "react-icons/gi";
import boardwalk from "./assets/alex-CWwdzVtaGKs-unsplash.jpg";
import a from "./assets/chantal-JSTvpv0wGKc-unsplash.webp";
import wave from "./assets/matt-hardy-tt2Oui1hKAM-unsplash.jpg"
import HeroServices from "./HeroServices";
import logo from "./assets/white Transparent PNG logo.png";

import image from "./assets/sean.jpg";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="relative will-change-auto h-[80dvh] sm:h-[90dvh] w-full overflow-hidden">
    <div
      className={`will-change-auto absolute inset-0 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'w-full sm:w-[80%] md:w-[80%] lg:w-[70%] mx-auto rounded-2xl lg:mt-25 md:mt-32 shadow-lg drop-shadow-lg'
          : 'w-full h-full rounded-lg mx-auto shadow-2xl drop-shadow-2xl'
      }`}
    >
      <img
        src={boardwalk}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
          isScrolled ? 'rounded-2xl' : ''
        }`}
        alt="Background"
      />
    </div>
    <div className={`relative z-20 flex ${isScrolled ? 'backdrop-blur-0' : 'backdrop-blur-sm'} flex-col items-center justify-center h-full drop-shadow-2xl shadow-2xl`}>
      <div className={`absolute will-change-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] place-self-center z-10 transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={logo}
          loading="lazy"
          className="will-change-auto rounded-md p-2 object-contain w-full h-full"
          alt="Logo"
        />
      </div>
      <div className={`bg-black bg-opacity-30 bg-blend-lighten p-4 md:p-8 rounded-3xl shadow-lg transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-fit">
          <h1 className="text-center relative font-title2 text-gray-50 text-4xl sm:text-5xl lg:text-6xl mx-auto uppercase tracking-widest leading-tight bg-gradient-to-br from-amber-50/50 to-white bg-clip-text z-10">
            Intracoastal
          </h1>
        </div>
        <h2 className="font-title2 text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-center leading-8 sm:leading-10 bg-gradient-to-t from-amber-50/50 to-yellow-50 text-white bg-clip-text">
          Dermatology and Skin Surgery
        </h2>
        <div className="font-cursive flex flex-col w-fit mt-5 items-center justify-center transition-all duration-75 ease-in-out  sm:w-1/1 md:w-1/3 font-medium pointer-events-none mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-white bg-slate-50 rounded-xl backdrop-blur-xl bg-opacity-10">
          <span className="text-yellow-50/90 font-display font-light capitalize">
            Expert care
          </span>
          <span className="lowercase">for</span>
          <span className="font-cursive text-4xl sm:text-5xl font-bold lowercase mx-4">
            healthy
          </span>
          <span className="lowercase text-end font-medium">skin.</span>
        </div>
        <div className="mt-4 sm:mt-8 flex flex-col items-center gap-y-2 sm:gap-y-4 sm:flex-row sm:justify-center sm:gap-x-4">
          <Link
            to="/schedule-appointment"
            className="rounded-md bg-[#30648B] px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#224966]"
          >
            Schedule an Appointment
          </Link>
          <Link
            to="/intracoastal-derm/schedule-appointment"
            className="mt-2 sm:mt-0 rounded-md px-4 py-2 text-sm sm:text-base font-semibold leading-6 text-gray-200 hover:bg-slate-50/10"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;

