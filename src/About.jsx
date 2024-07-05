import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import headshot from "./assets/images/optimizations/DrHarrisHeadshotFinal.webp";
import family from "./assets/images/optimizations/HarrisFamily.webp";
import aadlogo from "./assets/images/optimizations/American_Academy_of_Dermatology_logo.svg.webp";
// import acms from "./assets/acms-mohs-surgeon.png";

const Image = ({ src, alt, className }) => (
  <img
    src={src}
    srcSet={`${src} 1x, ${src} 2x`}
    sizes="(max-width: 600px) 100vw, 100vw"
    alt={alt}
    className={className}
  />
);
export default function About() {
  const headerControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    headerControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
    contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } });
  }, [headerControls, contentControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={headerControls}
      className="py-8 mb-1 bg-gray-100"
    >
      <div className="container px-4 lg:px-8">
        <header className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={headerControls}
            className="font-poppins text-4xl lg:text-6xl font-medium text-[#4d4d4d] mb-2"
          >
            Dr. Blair Harris, DO, FAAD
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            animate={headerControls}
            className="font-poppins text-xl lg:text-2xl font-medium text-[#4d4d4d] mb-7"
          >
            Board-Certified Dermatologist, Fellowship-Trained Mohs Surgeon
            <div className='flex justify-center gap-x-8'>
              <Image src={aadlogo} alt="AAD Logo" className="w-20 mx-auto" />
              {/* <Image src={acms} alt = 'ACMS American College of Mohs Surgery' className="w-20 mx-auto" /> */}
            </div>
            
          </motion.h3>
        </header>

        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentControls}
            className="w-full lg:w-1/2"
          >
            <Image src={headshot} alt="Dr. Blair Harris" className="w-fit h-auto rounded-lg mb-8 lg:mb-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contentControls}
            className="w-full lg:w-1/2"
          >
            <p className="text-[#4d4d4d] max-w-prose prose-xl prose-neutral leading-relaxed">
              Dr. Blair Harris was born and raised in northern Utah. He graduated from Brigham Young University with a degree in Business Management with an emphasis in finance. After working as a financial analyst at Lockheed Martin in southern California for three years, he decided to pursue his lifelong dream of becoming a doctor. Dr. Harris attended medical school at Pacific Northwest University in Yakima, Washington. While in medical school, he was elected to a position in student government and enjoyed serving his fellow students. His leadership position enabled him to institute multiple organizational changes including implementing mental health resources, student support groups, and financial tracking instruments for the student government organization at PNWU.
            </p>
            <Image src={family} alt="Harris Family" className="w-full rounded-lg mt-8" />
            <p className="text-[#4d4d4d] max-w-prose prose-xl prose-neutral leading-relaxed mt-8">
              Dr. Harris developed a love for dermatology while volunteering as a camp counselor at Camp Discovery, a summer camp for children with dermatologic skin conditions. He completed his internship and residency through Campbell University, his number one choice. He enjoys all aspects of dermatology, but found special interest in procedural and surgical dermatology, which led him to pursue a fellowship in Mohs Micrographic Surgery. When he’s not working as a dermatologist, you can find Blair spending time with his wife and two daughters, exercising, enjoying the beaches, or doing projects around the house.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
