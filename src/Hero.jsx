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

import image from "./assets/sean.jpg";

const Hero = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(scrollY);

  const updateFullScreen = useCallback(() => {
    if (Math.abs(scrollY - prevScrollY.current) >= 125) {
      setIsFullScreen(scrollY <= 125);
      prevScrollY.current = scrollY;
    }
    requestAnimationFrame(updateFullScreen);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateFullScreen);
  }, [updateFullScreen]);

  return (
    <>
           <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isFullScreen ? 'h-screen' : 'max-h-screen h-[800px] translate-y-[-10px] w-[67%] align-top mx-auto'
        }`}
      >
        <section className="relative mx-auto w-full h-full">
          <div  className={`relative flex bg-gray-500 h-full flex-col items-start justify-center rounded-2xl shadow-lg drop-shadow-md  hue-rotate-15 transition-all duration-500 ease-in-out ${
              isFullScreen ? '' : 'pb-10 overflow-hidden h-fit translate-y-[320px] rounded-3xl'
            }`}>
            <img
              src={boardwalk}
              loading="lazy"
              className={`absolute inset-0 z-[-20] w-full object-cover   ${
                isFullScreen ? 'h-screen w-full' : 'h-full w-full overflow-hidden rounded-2xl'
              } transition-all duration-500 ease-in-out`}
              alt="Background"
            />
        
            <div className={`z-20 h-full w-full ${
                isFullScreen ? 'mt-48' : 'my-auto mx-auto'
              } flex flex-col items-center`}>
              <h1 className="font-title2 text-gray-50 text-8xl mx-auto uppercase tracking-widest leading-tight bg-gradient-to-br from-amber-50/50 to-white bg-clip-text">Intracoastal</h1>
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
      </div>
    </>
  );
};
export default Hero;