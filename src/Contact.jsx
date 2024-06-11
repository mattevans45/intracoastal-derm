import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <section className='container max-w-4xl mx-auto p-6 z-10'>
       <div className="flex justify-center mb-10 lg:flex-row">
        <div className="title-font text-center transition-all duration-300 ease-in-out text-gray-900 tracking-widest mx-4">
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
            className="text-md overflow-y-auto text-[#30648B] leading-tight max-w-full break-all"
          >
            intracoastaldermatology@gmail.com
          </a>
          <h2 className="font-semibold text-gray-900 tracking-widest text-sm mt-4">
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
    </section>
  );
};

export default Contact;
