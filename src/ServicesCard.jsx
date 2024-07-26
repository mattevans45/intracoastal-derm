'use client'; 

import React from "react";
import { motion } from "framer-motion";
import Link  from "next/link";

const ServicesCard = ({ icon: Icon, title, description, backgroundImage, to }) => {
  const firstWord = title.split(" ")[0].toLowerCase();

  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className="group relative min-h-[350px] cursor-pointer overflow-hidden mx-auto rounded-2xl bg-slate-100 shadow-xl"
    >
      <div
        className="absolute inset-0 h-full backdrop-blur-sm mix-blend-multiply bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      <div className="relative z-10 p-6 text-white bg-black bg-opacity-35 flex flex-col justify-between w-full h-full">
        <div>
          <motion.div
            className="flex items-center mb-4 text-gray-50"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Icon className="h-12 w-12 text-white drop-shadow-2xl" />
            <Link href={`services/${firstWord}`} className="ml-4 text-xl font-bold">
              {title}
            </Link>
          </motion.div>
          <p className="text-white mt-2 text-xl leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <Link
            href={to}
            className="mt-3 inline-flex items-center text-sm font-semibold leading-6 rounded-xl p-2 text-gray-100 bg-[#30548B] group-hover:text-white group-hover:bg-[#30548B]/90 group-hover:transition-all ease-in-out duration-500 group-hover:shadow-lg"
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
    </motion.div>
  );
};

export default ServicesCard;
