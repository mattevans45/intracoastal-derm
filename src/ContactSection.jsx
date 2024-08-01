"use client";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const ContactSection = () => {
  const address = "509 Olde Waterford Way Suite 103, Leland, NC 28451";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent("Website Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    const mailtoUrl = `mailto:intracoastaldermatology@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormData({ name: "", email: "", message: "" });
  };

  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <section className="mx-auto mt-10 w-full text-gray-600">
      <h2 className="mx-3 mb-8 text-center text-4xl font-bold text-gray-600">
        Contact Us
      </h2>

      <div className="mx-4 flex flex-1 flex-col justify-center gap-4 lg:flex-row">
        <div className="relative w-full rounded-xl">
          <iframe
            className="top-0 block h-[50vh] w-full rounded-lg lg:h-[90dvh]"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus"
            title="Intracoastal Dermatology Office Location"
            allowFullScreen=""
          ></iframe>
          {minimized ? (
            <div className="absolute bottom-1/2 right-0 z-30 mx-auto flex flex-nowrap items-center justify-between rounded bg-white px-2 py-2 shadow-md transition-all duration-300 ease-in-out lg:left-auto lg:w-48">
              <h5 className="title-font mx-2 text-center text-sm font-semibold tracking-widest text-gray-900 transition-all duration-300 ease-in-out lg:text-base">
                Intracoastal Dermatology
              </h5>
              <button
                onClick={toggleMinimize}
                aria-label="Expand Contact Information"
                className="mr-4 flex h-7 w-10 items-center justify-center rounded border-0 bg-slate-500/75 px-3 py-0 text-lg text-white hover:bg-slate-600 focus:outline-none"
              >
                <LuChevronUp />
              </button>
            </div>
          ) : (
            <div className="absolute bottom-0 z-30 flex w-full flex-wrap items-start rounded bg-white shadow-md transition-all duration-300 ease-in-out">
              <div className="px-6 py-2 lg:w-1/2">
                <button
                  onClick={toggleMinimize}
                  className="absolute right-0 top-0 rounded border-0 bg-slate-500/75 px-3 py-2 text-lg text-white hover:bg-slate-600 focus:outline-none"
                >
                  <LuChevronDown />
                </button>

                <h2 className="text-sm font-semibold tracking-widest text-gray-900">
                  OFFICE ADDRESS
                </h2>
                <p className="mt-1 text-gray-950">{address}</p>
              </div>
              <div className="mt-4 flex w-full flex-col px-6 pb-4 lg:mt-0 lg:w-1/2 lg:pb-0">
                <h2 className="w-full font-semibold text-gray-900">EMAIL</h2>
                <a
                  href="mailto:intracoastaldermatology@gmail.com"
                  className="break-words text-sm leading-tight text-[#30648B]"
                >
                  intracoastaldermatology@gmail.com
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  PHONE
                </h2>
                <p className="leading-relaxed">(910) 631-0301</p>
              </div>
            </div>
          )}
        </div>
        <div className="h-full w-full rounded-xl bg-white p-4 lg:w-auto">
          <h2 className="mb-1 text-lg font-700 text-gray-900">Contact</h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Send us an email to schedule an appointment, consultation, or ask
            questions regarding our services.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded border-0 bg-[#30648B] px-6 py-2 text-lg text-white hover:bg-[#30648B]/90 focus:outline-none"
            >
              Send an Email
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">Thank you!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
