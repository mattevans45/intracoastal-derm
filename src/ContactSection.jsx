import React from "react";
import { useState } from "react";
import { LuChevronDown, LuChevronUp, LuChevronUpCircle } from "react-icons/lu";


const ContactSection = () => {
  const address = "509 Olde Waterford Way Suite 103, Leland, NC 28451";


  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-20 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 sm:w-view overflow-x-auto rounded-lg  min-h-[39rem] sm:mr-10 py-16 px-8 transition-all duration-500 ease flex flex-1 items-end justify-start relative">
          <iframe
            className="absolute inset-0 border-0 z-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus"
            width="100%"
            height="100%"
            title="Intracoastal Dermatology Office Location"
            allowFullScreen=""
          ></iframe>
          {minimized ? (
            <div className="bg-white z-30 md:mx-10 flex flex-nowrap sm:h-fit sm:mx-auto relative w-80 py-2 rounded shadow-md transition-all duration-300 ease-in-out">
              <h5 className="title-font font-semibold text-center transition-all duration-300 ease-in-out text-gray-900 tracking-widest mx-4 ">
                Intracoastal Dermatology
              </h5>
              <button
                onClick={toggleMinimize}
                className="text-white flex bg-slate-500/75 border-0 py-0 w-10 h-7 justify-center items-center mr-4 px-3 focus:outline-none hover:bg-slate-600 rounded text-lg"
              >
                <LuChevronUp />
              </button>
            </div>
          ) : (
            <div className="bg-white flex z-20  items-start relative py-6 rounded shadow-md transition-all duration-300 ease-in-out">
              <div className="lg:w-1/2 py-2 px-6">
                <button
                  onClick={toggleMinimize}
                  className="text-white absolute -right-3 top-1 bg-slate-500/75 border-0 py-2 mr-4 px-3 w-10 h-18 focus:outline-none hover:bg-slate-600 rounded text-lg"
                >
                  <LuChevronDown />
                </button>

                <h2 className="font-semibold  text-gray-900 tracking-widest text-sm">
                  OFFICE ADDRESS
                </h2>
                <p className="mt-1 text-gray-950">
                  509 Olde Waterford Way
                  <br />
                  Suite 103 <br />
                  Leland, NC 28451
                </p>
              </div>
              <div className="flex flex-col lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-gray-900 ">EMAIL</h2>
                <a
                  href="mailto:example@email.com"
                  className="text-sm overflow-y-auto text-[#30648B] leading-tight  max-w-full break-all"
                >
                  intracoastaldermatology@gmail.com
                </a>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">(910) 631-0301</p>
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 rounded-lg p-4 bg-white flex flex-col md:py-10 sm:mt-0 mt-4 xs:mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Send us a message to schedule an appointment, consulation, or
            anything else!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-[#30648B] border-0 py-2 px-6 focus:outline-none hover:bg-[#30648B]/90 rounded text-lg">
            Send Message
          </button>
          <p className="text-xs text-gray-500 mt-3">Thank you!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
