import React from "react";
import hero from "./assets/hero.webp";
import {Link} from 'react-router-dom'
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import Follicle from "./Follicle";

const Hero = () => {
  return (
    <>
     <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
             
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c7c7c7] to-[#1670e6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            
          />
    
        </div>
        <div className="mx-auto max-w-2xl py-18 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Now accepting new patients.
              <a href="#" className="font-semibold px-2 text-[#30648B]">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#4d4d4d] sm:text-6xl">
              Intracoastal Dermatology and Skin Surgery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert care for healthy skin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#30648B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#224966] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule an Appointment
              </a>
              <Link href="/intracoastal-derm/schedule-appointment" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <section className="bg-white ">
        <div className="relative overflow-hidden bg-white text-center">
        

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex lg:mt-32 sm:mt-24 lg:text-pretty lg:text-center lg:items-around  lg:justify-evenly h-full md:flex md:items-baseline items-between justify-center">
              <div className="bg-transparent">
                <h1 className="md:text-4xl sm:mt-10 mt-8 mb-32 font-thin text-pretty font-sans font-medium sm:text-2xl text-xl leading-tight  uppercase antialiased break bg-clip-text text-white ">
                  Intracoastal Dermatology and Skin Surgery
                </h1>
                <p className="mb-8 text-pretty font-md  text-left ml-10 bg-gradient-to-tl from-slate-300 via-white to-slate-200 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-6xl mt-20 sm:mt-20 leading-relaxed">
                  Expert care for healthy skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Intracoastal Dermatology
            <p className="hidden sm:block">The best feeling is feeling good</p>
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-900 mb-4 flex-shrink-0">
              <MdOutlineVaccines className="h-8 w-7 font-white bg-transparent" /> 
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Cosmetic Dermatology
                </h2>
                <p className="leading-relaxed text-base">
               Neuromodulators like Botox, Dermal Filler, and laser based treatments. 
                </p>
                <Link to="/services/cosmetic-dermatology"className="mt-3 text-[#30648B] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="#30648B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-900 mb-4 flex-shrink-0">
              <Follicle className="h-8 w-7 stroke-sky-700 fill-green-950" /> 
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  General Dermatology
                </h2>
                <p className="leading-relaxed text-base">
               Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths, Skin Discoloration, and excessive sweating.
                </p>
                <Link to="/services/general-dermatology" className="mt-3 text-[#30648B] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="#30648B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#30648B] mb-4 flex-shrink-0">
             
              <GiScalpel className="h-8 w-7 font-white bg-transparent" /> 
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Surgical Dermatology
                </h2>
                <p className="leading-relaxed text-base">
                 Skin Cancer Removal, Mohs Surgery, Scar Revision, mole removal, and more.
                </p>
                <Link to="/services/surgical-dermatology" className="mt-3 text-[#30648B] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
