import React from "react";
import hero from "./assets/hero.webp";
import { Link } from "react-router-dom";
import eyes from "./assets/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg";

import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel, GiSyringe, GiHairStrands } from "react-icons/gi";
import boardwalk from "./assets/alex-CWwdzVtaGKs-unsplash.jpg";
import a from "./assets/chantal-JSTvpv0wGKc-unsplash.webp";
import HeroServices from "./HeroServices";

import image from "./assets/sean.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative mx-auto mt-1 w-full max-w-7xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="relative flex max-h-[480px] flex-col items-center justify-center rounded-3xl  shadow-lg drop-shadow-lg hue-rotate-15">
          <div className="absolute inset-0 h-full w-full rounded-3xl shadow-2xl bg-sky-800 bg-opacity-30 shadow-sky-100 drop-shadow-2xl" />
          <img
            src={a}
            loading="lazy"
            className="absolute h-[480px] w-full rounded-3xl object-cover mix-blend-color shadow-xl blur-[1.2px] brightness-75"
            alt="Background"
          />
          <div className="relative z-10 p-10 mx-auto text-white">
            
              <h1 className="font-title2 text-8xl mx-auto uppercase tracking-widest leading-tight bg-gradient-to-br from-amber-50/50 to-white bg-clip-text">Intracoastal</h1>
          
              <h2 className="font-title2 text-5xl uppercase tracking-tight leading-10 bg-gradient-to-t from-amber-50/50 to-yellow-50 text-white bg-clip-text">Dermatology and Skin Surgery</h2>
  
            <h4 className="font-cursive flex flex-col mt-5 w-48 items-start justify-center font-medium lg:h-18 pointer-events-none mx-auto max-w-96 border-collapse cursor-none rounded border-s-4 border-t-sky-100/90 pb-2 pl-1 pr-2 text-2xl text-white shadow-2xl shadow-white/30  backdrop-blur-xl backdrop-opacity-80 sm:mt-18 md:mt-10  md:text-3xl">
             <span className=" text-yellow-50/90 font-display font-light capitalize left-0">Expert care</span> <span className=" lowercase self-center">for</span> <span className="font-cursive text-5xl font-bold lowercase mx-4 ">healthy</span> <span className="lowercase text-end font-medium self-end">skin.</span> 
            </h4>
            <div className="mt-8 flex flex-col items-center justify-start gap-y-4 md:flex-row md:justify-center md:gap-x-4">
              <Link
                to="/schedule-appointment"
                className="rounded-md bg-[#30648B] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#224966]"
              >
                Schedule an Appointment
              </Link>
              <Link
                to="/intracoastal-derm/schedule-appointment"
                className="mt-4 rounded-xl p-2 text-sm font-semibold leading-6 text-gray-200 hover:bg-slate-50/10 md:mt-0 "
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto mt-1 px-4 md:px-8 lg:px-12 xl:px-16">

</section>
    </>
  );
};

export default Hero;
