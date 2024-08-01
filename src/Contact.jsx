'use client';

import  { useState, useEffect } from "react";

const Contact = () => {
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

  const LazyIframe = () => {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 100) {
          setShouldLoad(true);
          window.removeEventListener("scroll", onScroll);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!shouldLoad)
      return (
        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
          <p className="px-4 text-center text-lg text-gray-600">
            Scroll to load appointment form...
          </p>
        </div>
      );

    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUZCOgPHXlIyHcbbIIInU8Ud6PeUqt_3h-pxqk2_LTXihmtA/viewform?embedded=true"
        className="h-[600px] w-full rounded-lg shadow-md"
        title="Appointment Form"
        loading="lazy"
      >
        Loading…
      </iframe>
    );
  };

  return (
    <section className="container mx-auto max-w-7xl bg-gray-100 p-4 sm:p-6">
      {/* <Helmet>
        <title>Contact - Intracoastal Dermatology</title>
        <link
          rel="canonical"
          href="https://intracoastal-dermatology.com/contact"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "MedicalOrganization"],
            name: "Intracoastal Dermatology and Skin Surgery",
            url: "https://intracoastal-dermatology.com/",
            logo: "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
            description:
              "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
            medicalSpecialty: ["Dermatology"],
            availableService: [
              {
                "@type": "MedicalProcedure",
                name: "General Dermatology",
                description:
                  "Comprehensive skin health examinations and treatments",
              },
              {
                "@type": "MedicalProcedure",
                name: "Cosmetic Dermatology",
                description:
                  "Advanced cosmetic procedures for skin rejuvenation",
              },
              {
                "@type": "MedicalProcedure",
                name: "Surgical Dermatology",
                description:
                  "Specialized surgical treatments for skin conditions",
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 34.21687,
              longitude: -78.02111,
            },
            potentialAction: {
              "@type": "ReserveAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://intracoastal-dermatology.com/schedule-appointment",
                inLanguage: "en-US",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/IOSPlatform",
                  "http://schema.org/AndroidPlatform",
                ],
              },
              result: {
                "@type": "Reservation",
                name: "Schedule an appointment",
              },
            },
            openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-910-631-0301",
                contactType: "appointment",
                areaServed: "Leland",
                availableLanguage: ["English"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
              "https://www.instagram.com/intracoastaldermatology/",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "509 Olde Waterford Way Suite 103",
              addressLocality: "Leland",
              addressRegion: "NC",
              postalCode: "28451",
              addressCountry: "US",
            },
            image:
              "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryMainLogo.webp",
            email: "intracoastaldermatology@gmail.com",
            telephone: "+1-910-631-0301",
            priceRange: "$$",
          })}
        </script>
        <meta
          name="description"
          content="Contact Intracoastal Dermatology to schedule an appointment, consultation, or for any inquiries."
        />
        <meta
          property="og:title"
          content="Contact - Intracoastal Dermatology and Skin Surgery"
        />
        <meta
          property="og:description"
          content="Contact Intracoastal Dermatology to schedule an appointment, consultation, or for any inquiries."
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/contact"
        />
      </Helmet> */}

      <h1 className="mb-8 text-center font-playfair text-3xl font-bold text-gray-800 sm:mb-12 sm:text-4xl">
        Contact Us
      </h1>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-4 font-playfair text-xl font-semibold text-gray-800 sm:mb-6 sm:text-2xl">
            Office Information
          </h2>
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-700 sm:text-lg">
              Address
            </h3>
            <address className="font-playfair not-italic text-gray-600">
              509 Olde Waterford Way
              <br />
              Suite 103
              <br />
              Leland, NC 28451
            </address>

            <h3 className="text-base font-medium text-gray-700 sm:text-lg">
              Email
            </h3>
            <a
              href="mailto:intracoastaldermatology@gmail.com"
              className="break-all text-blue-600 hover:underline"
            >
              intracoastaldermatology@gmail.com
            </a>

            <h3 className="text-base font-medium text-gray-700 sm:text-lg">
              Phone
            </h3>
            <p className="text-gray-600">(910) 631-0301</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800 sm:mb-6 sm:text-2xl">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#30548B] px-4 py-2 text-white transition duration-300 hover:bg-[hsla(216,50%,20%,1)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mb-12 rounded-lg bg-white p-1 shadow-md sm:p-2">
        <h2 className="mb-4 text-xl font-semibold text-gray-800 sm:mb-6 sm:text-2xl">
          Appointment Form
        </h2>
        <LazyIframe />
      </div>
    </section>
  );
};

export default Contact;
