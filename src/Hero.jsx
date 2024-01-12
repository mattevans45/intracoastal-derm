import React from "react";
import hero from "./assets/hero.webp";
import { Link } from "react-router-dom";
import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel, GiSyringe, GiHairStrands } from "react-icons/gi";
import image from "./assets/sean.jpg";
const Hero = () => {
  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        > 

          <div className="relative z-50 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c7c7c7] to-[#1670e6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <img
          src={image}
          className="absolute -z-40 inset-0 mx-auto object-cover saturate-50 opacity-95 blur-sm"
        />
      
       
      <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
        <div className="mx-auto max-w-2xl sm:py-48 md:py-20 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Now accepting new patients.
              <Link to="/" className="px-2 font-semibold text-[#30648B]">
                <span className="absolute inset-0" aria-hidden="true" />
                Find out more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1 className="z-5 mt-5 h-40 font-poppins text-4xl font-bold tracking-tighter text-[#383838] drop-shadow-2xl sm:mt-14  sm:text-6xl">
              Intracoastal Dermatology and Skin Surgery
            </h1>
            <p className="mt-6 text-2xl leading-8 text-[#4d4d4d] drop-shadow-2xl">
              Expert care for healthy skin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/schedule-appointment"
                className="z-10 rounded-md bg-[#30648B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#224966] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule an Appointment
              </Link>
              <Link
                href="/intracoastal-derm/schedule-appointment"
                className="w-30 z-10 h-fit text-sm font-semibold leading-6 text-gray-800 hover:bg-slate-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        
        </div>
    
       

      <section className="bg-white ">
        <div className="relative overflow-hidden bg-white text-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="lg:items-around items-between flex h-full justify-center sm:mt-24 md:mt-20  md:flex md:items-baseline lg:mt-32 lg:justify-evenly lg:text-pretty lg:text-center">
              <div className="bg-transparent">
                <h1 className="font-thin break mb-32 mt-8 text-pretty bg-clip-text font-sans text-xl font-medium uppercase leading-tight  text-white antialiased sm:mt-10 sm:text-2xl md:text-4xl ">
                  Intracoastal Dermatology and Skin Surgery
                </h1>
                <p className="font-md mb-8 ml-10  mt-20 text-pretty bg-gradient-to-tl from-slate-300 via-white to-slate-200 bg-clip-text text-left text-2xl leading-relaxed text-transparent sm:mt-20 sm:text-3xl md:text-6xl">
                  Expert care for healthy skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <h1 className="mb-20 text-center font-poppins text-2xl font-medium text-gray-900 sm:text-3xl">
            Intracoastal Dermatology
            <p className="hidden sm:block md:block">
              The best feeling is feeling good
            </p>
          </h1>

          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-blue-900">
                <GiSyringe className="font-white h-8 w-7 bg-transparent" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Cosmetic Dermatology
                </h2>
                <p className="text-base leading-relaxed">
                  Neuromodulators like Botox, Dermal Filler, and laser based
                  treatments.
                </p>
                <Link
                  to="/services/cosmetic-dermatology"
                  className="mt-3 inline-flex items-center text-[#30648B]"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="#30648B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-blue-900">
                <svg
                  version="1.1"
                  viewBox="0 0 992 784"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    d="m478.62 637.81c-28.515-4.5912-50.116-27.37-54.008-55.957-1.8519-13.6 0.19452-26.478 4.9377-39.142 18.279-48.803 34.407-98.329 49.957-148.06 25.546-81.695 66.676-154.77 122.07-219.94 21.401-25.179 44.422-48.739 69.019-70.781 1.2394-1.1107 2.5618-2.1285 3.8404-3.1958 2.3407-1.9538 4.7904-2.4616 7.1315-0.14947 2.3882 2.3587 1.6747 4.6738-0.25256 7.0636-6.2717 7.7772-12.662 15.472-18.623 23.485-46.324 62.264-79.459 131.05-101.42 205.37-7.6998 26.059-13.434 52.535-16.685 79.489-2.9368 24.343-3.1568 48.794-1.6275 73.289 1.3196 21.138 5.1744 41.863 8.835 62.659 2.679 15.22 2.5776 30.477-2.4784 45.39-8.0215 23.659-29.693 38.794-55.306 40.918-4.9569 0.41113-9.9884 0.44702-15.392-0.43652z"
                    fill="#30648B"
                  />
                  <path
                    d="m590.64 355.72c12.438-18.767 30.71-25.503 51.718-25.688 41.494-0.36426 82.994-0.16476 124.49-0.16492 6.2275 0 11.632 1.9001 14.421 7.9635 2.3229 5.0508 1.863 10.111-1.5167 14.634-3.5753 4.7851-8.8182 5.5359-14.315 5.5328-26.665-0.015075-53.33-0.042419-79.994-0.013336-15.664 0.01709-31.332-0.05777-46.991 0.25906-13.722 0.27762-23.251 6.8385-28.273 19.868-5.0616 13.132-6.3697 26.932-6.6676 40.712-0.55469 25.662 1.8457 51.19 5.4839 76.59 2.9933 20.897 7.2695 41.697 8.8063 62.698 2.7212 37.188-7.6385 70.9-31.784 99.757-20.892 24.97-47.641 40.424-79.992 43.724-52.863 5.3922-98.088-9.307-129.35-55.04-12.268-17.946-17.867-38.37-19.147-60.164-1.6394-27.916 6.2299-53.486 16.996-78.717 14.245-33.383 28.257-66.897 38.97-101.64 3.7703-12.228 7.3671-24.575 7.3042-37.584-0.043579-9.007-1.5394-10.481-10.459-10.478-57.496 0.025452-114.99 0.054962-172.49 0.039704-2.6477-7.02e-4 -5.3611-0.12384-7.9299-0.69891-6.3423-1.4198-10.499-6.843-10.634-13.408-0.12801-6.2507 3.8026-11.581 10.08-13.249 2.2188-0.5896 4.6029-0.7753 6.9117-0.77628 57.83-0.024201 115.66-0.002625 173.49 0.02298 5.6885 0.002502 11.323 0.58542 16.729 2.431 12.929 4.4143 21.178 16.547 21.87 31.123 0.96191 20.242-4.6831 39.212-10.789 58.078-12.115 37.436-27.763 73.509-42.714 109.85-9.1389 22.214-12.944 45.263-7.6431 68.9 9.0748 40.463 35.505 63.8 75.27 72.203 23.591 4.985 47.133 4.0429 69.294-6.9335 32.06-15.879 50-42.302 56.944-76.914 3.7595-18.74 0.72369-37.082-2.2824-55.512-3.8287-23.475-7.1203-47.016-8.9152-70.764-1.1431-15.124-2.3152-30.239-1.679-45.394 0.74854-17.832 2.4136-35.567 9.906-52.136 1.3671-3.0234 3.1172-5.8735 4.8793-9.1125z"
                    fill="#30648B"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  General Dermatology
                </h2>
                <p className="text-base leading-relaxed">
                  Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen
                  Planus, Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash,
                  Growths, Skin Discoloration, and excessive sweating.
                </p>
                <Link
                  to="/services/general-dermatology"
                  className="mt-3 inline-flex items-center text-[#30648B]"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="#30648B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[#30648B]">
                <GiScalpel className="font-white h-8 w-7 bg-transparent" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Surgical Dermatology
                </h2>
                <p className="text-base leading-relaxed">
                  Skin Cancer Removal, Mohs Surgery, Scar Revision, mole
                  removal, and more.
                </p>
                <Link
                  to="/services/surgical-dermatology"
                  className="mt-3 inline-flex items-center text-[#30648B]"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
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
