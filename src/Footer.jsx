import React from "react";
import { useEffect } from "react";
import logo from "./assets/logo.svg";
import whiteLogo from "./assets/white Transparent PNG logo.png"
import AOS from "aos";

import "aos/dist/aos.css";
import { MdOutlineFacebook } from "react-icons/md";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import logo2 from "./assets/blackandwhite.svg";


const Footer = () => {
  useEffect(() => {
    AOS.init();
    (AOS.duration = 1200), (AOS.easing = "ease-in-out-back");
  }, []);

  return (
    <>
      {/* <footer className="w-full mx-auto pt-5 text-white bg-[#3a3a3a] sm:py-12">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
     
        <a className="basis-3 font-medium mx-auto md:justify-start text-gray-900 mb-4">
          <img
            className="lg:min-w-24 object-fill w-[320px] md:min-w-[180px] md:w-[350px] xl:w-[400px]"
            data-aos="fade-down"
            src={logo}
            alt="Intracoastal Dermatology Logo"
          />
        </a>

       
        <nav
              className="w-full mx-auto list-none mb-2"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
            <h5
              className="font-bold text-white tracking-widest text-lg mt-10 mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Important Links
            </h5>
           
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Office Location
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Services Provided
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Another resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Final resource
                </a>
              </li>
            </nav>
   
          <nav
              className="list-none footer-links"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
            <h2
              className="title-font text-lg font-bold text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              About
            </h2>
          
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Placeholder
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Terms
                </a>
              </li>
            </nav>
       

          <nav className="list-none footer-links" data-aos="slide-right">
            <h2
              className="title-font font-bold text-lg text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Contact Us
            </h2>
          
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  (910) 631-0301
                </a>
              </li>
              <li className="mb-2">
                <a className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">
                  icderm@gmail.com
                </a>
              </li>
            </nav>
            <h2
              className="title-font self-center font-bold text-lg text-white tracking-widest mb-3"
              data-aos="slide-right"
              data-aos-anchor-placement="top-right"
            >
              Follow Us
            </h2>
            <div className="inline-flex self-center flex-row bg-red-500 flex-wrap mx-auto justify-center  gap-1 sm:justify-center">
    
              <a
                href=""
                className="w-11 h-11 rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <MdOutlineFacebook className="w-full h-full" />
              </a>
              <a
                href=""
                className="w-11 h-11   rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <LuInstagram className="w-full h-full" />
              </a>
              <a
                href=""
                className="w-11 h-11 rounded-md text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
              >
                <LuTwitter className="w-full h-full" />
              </a>
    
          </div>

          
          
   

      <div className="container py-4 px-5 static justify-center mx-auto sm:flex sm:justify-center sm:align-middle sm:items-center sm:flex-row">
        <span className="sm:ml-auto sm:mt-0 mt-2 flex flex-1">
          <p className="text-gray-500 text-sm text-center sm:text-center">
            &copy;2023 Intracoastal Dermatology All Rights Reserved by ICD-LTD.
          </p>
        </span>
      </div>
  </div>
  </div>
    </footer> */}
     
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
            <p class="leading-relaxed text-base mb-4">FingestrokeWidthrstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a class="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a class="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a class="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <a class="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </section>
     
      
     <section class="text-gray-600 body-font">
       <div class="container px-5 py-24 mx-auto">
         <div class="flex flex-wrap w-full mb-20">
           <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
             <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Intracoastal Dermatology</h1>
             <div class="h-1 w-20 bg-indigo-500 rounded"></div>
           </div>
           <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
         </div>
         <div class="flex flex-wrap -m-4">
           <div class="xl:w-1/4 md:w-1/2 p-4">
             <div class="bg-gray-100 p-6 rounded-lg">
               <img class="h-40 rounded w-full object-cover object-center mb-6" src={logo} alt="content"/>
               <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
               <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
               <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
             </div>
           </div>
           <div class="xl:w-1/4 md:w-1/2 p-4">
             <div class="bg-gray-100 p-6 rounded-lg">
               <img class="h-40 rounded w-full object-cover object-center mb-6" src={logo2} alt="content"/>
               <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">she Really is!</h3>
               <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Anna is Awesome</h2>
               <p class="leading-relaxed text-base">HE will heal your face!!!!!!!!!!!!!!.</p>
             </div>
           </div>
           <div class="xl:w-1/4 md:w-1/2 p-4">
             <div class="bg-gray-100 p-6 rounded-lg">
               <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
               <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
               <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
               <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
             </div>
           </div>
           <div class="xl:w-1/4 md:w-1/2 p-4">
             <div class="bg-gray-100 p-6 rounded-lg">
               <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
               <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
               <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
               <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
             </div>
           </div>
         </div>
       </div>
     </section>
      

    
<div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
    <div className="flex flex-col justify-center">
        <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8">
                Hate forms? Send us an&nbsp;
                <a className="underline" href="mailto:someone@gmail.com">
                    email
                </a>
                instead.
            </div>
        </div>
        <div className="mt-12 text-center">
            <img src="https://dummyimage.com/500x300" alt="Contact" />
        </div>
    </div>
    <form> 
        <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
            </span>
            <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="text"
                placeholder="Enter your Name"
                required
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
                Email
            </span>
            <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter your email address"
                required
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
                Phone Number
            </span>
            <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="phone"
                placeholder="Enter your Phone Number including country code"
                required
            />
        </div>
        <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
                Message
            </span>
            <textarea
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your Message"
                required
            ></textarea>
        </div>
        <div className="mt-8">
            <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                type="submit"
            >
                Send Message
            </button>
        </div>
    </form>
</div>
 
 
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>
 
      <footer className="text-white bg-[#3a3a3a] dark:bg-[#3a3a3a]">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="w-full mx-auto sm:flex sm:justify-center md:flex md:justify-around">
            <div className="mb-6 md:mb-0">
              <a
                href="https://instracoastal-dermatology.com/"
                className="hover:scale-150"
              >
                <img
                  src={whiteLogo}
                  data-aos="fade-down"
                  className="h-60 object-fit sm:min-h-52 md:min-h-52 sm:px-3"
                  alt="Intracoastal Dermatology Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div data-aos="slide-right"
                  data-aos-anchor-placement="top-right">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                 >
                  Important Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://intracoastal-dermatology.com/office-location/"
                      className="hover:underline"
                    >
                      Office Location
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://intracoastal-dermatology.com/services/"
                      className="hover:underline"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://intracoastal-dermatology.com/office-location/"
                      className="hover:underline"
                    >
                      Office Location
                    </a>
                  </li>
                  
                </ul>
              </div>
  
              <div data-aos="slide-right"
              data-aos-anchor-placement="top-right">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-start dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div data-aos="slide-right"
              data-aos-anchor-placement="top-right">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 text-start dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 flex flex-row justify-start dark:text-gray-400 font-medium">
                    <li className="mr-2">
                    <a
                    href=""
                    className="rounded-md text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                  >
                    <MdOutlineFacebook className="h-12 w-8" />
                  </a>
                    </li>
                 
                    <li className="mr-2">
                  <a
                    href=""
                    className="rounded-md text-center  text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                  >
                    <LuInstagram className="h-12 w-8" />
                  </a>
                  </li>
                  <li className="mr-2">
                  <a
                    href=""
                    className="rounded-md text-center  text-gray-300 hover:text-white hover:bg-gray-600 hover:border-gray-700"
                  >
                    <LuTwitter className="h-12 w-8" />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center  dark:text-gray-400">
              © 2024
              <a   href="https://intracoastal-dermatology.com/" className="px-1 hover:underline">
                Intracoastal Dermatology.
              </a>
              All Rights Reserved.
            </span>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
