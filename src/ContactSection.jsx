import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const ContactSection = () => {
  const address = "509 Olde Waterford Way Suite 103, Leland, NC 28451";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const subject = encodeURIComponent('Website Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:intracoastaldermatology@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', message: '' });
  };

  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <section className="container w-full mx-auto overflow-hidden text-gray-600 body-font">
      <div className="py-10 mx-5">
        <div className="rounded-xl relative mb-4 lg:mb-0">
          <iframe
            className="block top-0 w-full h-[90dvh] rounded-lg"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus"
            title="Intracoastal Dermatology Office Location"
            allowFullScreen=""
          ></iframe>
          {minimized ? (
            <div className="bg-white z-30 flex flex-nowrap items-center justify-end mx-auto absolute bottom-0 w-full py-2 rounded shadow-md transition-all duration-300 ease-in-out">
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
            <div className="bg-white flex flex-wrap z-30 items-start absolute bottom-0  w-full rounded shadow-md transition-all duration-300 ease-in-out">
              <div className="lg:w-1/2 py-2 px-6">
                <button
                  onClick={toggleMinimize}
                  className="text-white absolute right-0 top-0 bg-slate-500/75 border-0 py-2 px-3  focus:outline-none hover:bg-slate-600 rounded text-lg"
                >
                  <LuChevronDown />
                </button>

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
                  href="mailto:intracoastaldermatology@gmail.com"
                  className="text-sm text-[#30648B] leading-tight"
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
        <div className="rounded-xl mt-10 p-4 bg-white">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Send us a message to schedule an appointment, consultation, or
            anything else!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-[#30648B] border-0 py-2 px-6 focus:outline-none hover:bg-[#30648B]/90 rounded text-lg">
              Send Message
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Thank you!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
