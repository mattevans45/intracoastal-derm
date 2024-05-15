import hero from "./assets/hero.webp";
import { Link } from "react-router-dom";
import eyes from "./assets/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg";

import { MdOutlineVaccines } from "react-icons/md";
import { GiScalpel, GiSyringe, GiHairStrands } from "react-icons/gi";
import boardwalk from "./assets/alex-CWwdzVtaGKs-unsplash.jpg";
import image from "./assets/sean.jpg";

const HeroServices = () => {
  return (
  
    <section className="max-w-7xl w-full mx-auto relative mt-3 z-20 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="container shadow-lg rounded-xl relative flex flex-col items-start max-h-full sm:flex-col md:flex md:flex-row ">
      <div
        style={{
          inset: 0,
          zIndex: -90,
          height:"100%",
          width:"100%",
          boxShadow:"inherit",
          opacity:"90%",
          backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3))`,
        }}
        className="object-fill shadow-sm rounded-xl min-h-6xl h-full top-0 left-0 right-0 absolute"
      />
        <div className="z-35 inline-flex flex-1 p-4 ">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[#30648B] ">
            <GiSyringe className="font-white h-8 w-7 bg-transparent" />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="font-poppins font-semibold mb-2 text-2xl leading-relaxed text-slate-100">
              Cosmetic Dermatology
            </h2>
            <p className=" leading-relaxed tracking-tight font-sans font-light text-pretty text-lg text-slate-100">
              Neuromodulators like Botox, Dermal Filler, and laser based
              treatments.
            </p>
            <div className="inline-block group">

            <Link className="mt-3 inline-flex items-center text-sm font-semibold leading-6 rounded-xl p-2 text-gray-700 group-hover:text-[#30548B] group-hover:bg-slate-50/90  group-hover:transition-all ease-in-out duration-500 group-hover:shadow-lg ">

              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4 "
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-1 p-4">
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
          <h2 className="font-poppins font-semibold mb-2 text-2xl leading-relaxed text-white">
              General Dermatology
            </h2>
            <p className="leading-relaxed text-pretty text-lg text-gray-50">
              Psoriasis, Atropic Dermatitis, Bullous Diseases, Lichen Planus,
              Vitiligo, Acne, Rosacea, Skin Cancer Screening, Rash, Growths,
              Skin Discoloration, and excessive sweating.
            </p>
            <div className="inline-block group ">

         
            <Link className="mt-3 inline-flex items-center text-sm font-semibold leading-6 rounded-xl p-2 text-gray-50 group-hover:text-[#30548B] group-hover:bg-slate-50/90  group-hover:transition-all ease-in-out duration-500 group-hover:shadow-lg ">
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
        <div className="inline-flex flex-1 p-4">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-blue-900">
            <GiScalpel className="font-white h-8 w-7 bg-transparent" />
          </div>
          <div className="flex-grow pl-6">
          <h2 className="font-poppins font-semibold mb-2 text-2xl leading-relaxed text-white">
              Surgical Dermatology
            </h2>
            <p className="leading-relaxed text-pretty text-lg text-gray-50">

              Skin Cancer Removal, Mohs Surgery, Scar Revision, mole removal,
              and more.
            </p>
            <div className="inline-block group">
    
            <Link className="mt-3 inline-flex items-center text-sm font-semibold leading-6 rounded-xl p-2 text-gray-50 group-hover:text-[#30548B] group-hover:bg-slate-50/90  group-hover:transition-all ease-in-out duration-500 group-hover:shadow-lg ">

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


  );
};

export default HeroServices;
