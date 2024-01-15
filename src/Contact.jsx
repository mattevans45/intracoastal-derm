import React from 'react';

const Contact = () => {
  return (
    <section className='container max-w-4xl mx-auto p-6 z-10'>
      <div className="flex justify-center items-center mb-10 lg:flex-row">
        <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h2 className="font-semibold text-gray-900 tracking-widest text-sm">
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
          <h2 className="font-semibold text-gray-900">EMAIL</h2>
          <a
            href="mailto:example@email.com"
            className="text-sm overflow-y-auto text-[#30648B] leading-tight max-w-full break-all"
          >
            intracoastaldermatology@gmail.com
          </a>
          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">(910) 631-0301</p>
        </div>
      </div>

      <div className="justify-center rounded-lg p-4 bg-white flex flex-col mx-10">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Send us a message to schedule an appointment, consultation, or
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
            className="w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            className="w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-[#30648B] border-0 py-2 px-6 focus:outline-none hover:bg-[#30648B]/90 rounded text-lg">
          Send Message
        </button>
        <p className="text-xs text-gray-500 mt-3">Thank you!</p>
      </div>
    </section>
  );
};

export default Contact;
