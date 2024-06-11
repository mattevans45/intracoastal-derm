import React, { useState } from 'react';
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { motion, AnimatePresence } from 'framer-motion';
import GoogleMap from './components/GoogleMap'; // Import the GoogleMap component

const Location = () => {
    const address = "509 Olde Waterford Way Suite 103, Leland, NC 28451";
    const [minimized, setMinimized] = useState(false);

    const toggleMinimize = () => {
        setMinimized(!minimized);
    };

    return (
        <section className="h-[100dvh] px-4 md:px-10 font-display bg-slate-100 flex flex-col md:flex-row justify-center items-start mx-auto w-full">
            <div className="prose text-center flex flex-col justify-center items-center md:text-left md:mr-10 md:w-1/2">
                <h1 className="prose-2xl md:text-3xl text-[#4d4d4d] text-center font-semibold mt-5">Office Location</h1>
                <address className="mt-2 text-[#4d4d4d]">
                    {address}
                </address>
                <p className="mt-4 font-display prose-xl font-semibold text-[#4d4d4d]">Hours of Operation</p>
                <p className="text-[#4d4d4d]">M-F 8AM - 5PM</p>
            </div>

            <div className="p-4 my-4 md:p-0 flex flex-col justify-center items-center mx-auto md:w-1/2 relative">
                <h1 className="prose-2xl md:text-3xl text-[#4d4d4d] font-semibold mb-5">Office Location on Map</h1>
                <div className="w-full h-[20rem] md:h-[40rem] rounded-lg overflow-hidden relative">
                <iframe
                        className="absolute inset-0 w-full h-full border-0 z-0"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        title="Intracoastal Dermatology Office Location"
                        allowFullScreen=""
                    ></iframe>
                    <motion.div
                        className={`absolute bottom-0 right-0 left-0 w-full py-2 bg-white z-30 flex flex-nowrap items-center justify-between rounded shadow-md transition-all duration-300 ease-in-out ${minimized ? 'md:mx-0 md:hidden' : 'md:w-full md:visible'}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h5 className="title-font font-semibold text-center md:text-left transition-all duration-300 ease-in-out text-[#4d4d4d] tracking-widest mx-4">
                            Intracoastal Dermatology
                        </h5>
                        <button
                            onClick={toggleMinimize}
                            className="text-white flex bg-slate-500/75 border-0 py-0 w-10 h-7 justify-center items-center mr-4 px-3 focus:outline-none hover:bg-slate-600 rounded text-lg"
                        >
                            {minimized ? <LuChevronUp /> : <LuChevronDown />}
                        </button>
                    </motion.div>

                    <AnimatePresence>
                        {!minimized && (
                            <motion.div
                                className="bg-white flex z-20 items-start absolute top-0 left-0 right-0 py-6 rounded shadow-md transition-all duration-300 ease-in-out"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="lg:w-1/2 py-2 px-6">
                                    <button
                                        onClick={toggleMinimize}
                                        className="text-white absolute -right-3 top-1 bg-slate-500/75 border-0 py-2 mr-4 px-3 w-10 h-18 focus:outline-none hover:bg-slate-600 rounded text-lg"
                                    >
                                        <LuChevronDown />
                                    </button>

                                    <h2 className="font-semibold text-[#4d4d4d] tracking-widest text-sm">
                                        OFFICE ADDRESS
                                    </h2>
                                    <p className="mt-1 text-[#4d4d4d]">
                                        509 Olde Waterford Way
                                        <br />
                                        Suite 103 <br />
                                        Leland, NC 28451
                                    </p>
                                </div>
                                <div className="flex flex-col lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="font-semibold text-[#4d4d4d] ">EMAIL</h2>
                                    <a
                                        href="mailto:example@email.com"
                                        className="text-sm overflow-y-auto text-[#30648B] leading-tight max-w-full break-all"
                                    >
                                        intracoastaldermatology@gmail.com
                                    </a>
                                    <h2 className="font-semibold text-[#4d4d4d] tracking-widest text-xs mt-4">
                                        PHONE
                                    </h2>
                                    <p className="leading-relaxed">(910) 631-0301</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Location;
