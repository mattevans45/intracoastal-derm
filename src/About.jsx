'use client';
import Image from 'next/image';
import  { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import headshot from "./assets/images/optimized/DrHarrisHeadshotFinal.webp";
import family from "./assets/images/optimized/HarrisFamily.webp";
import aadlogo from "./assets/images/optimized/American_Academy_of_Dermatology_logo.svg.webp";
// import acms from "./assets/acms-mohs-surgeon.png";


export default function About() {
  const headerControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    headerControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2 },
    });
    contentControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    });
  }, [headerControls, contentControls]);

  return (
    <>
      {/* <Helmet>
        <title>
          About Dr. Blair Harris, DO, FAAD - Intracoastal Dermatology and Skin
          Surgery
        </title>
        <meta
          name="description"
          content="Learn about Dr. Blair Harris, a board-certified dermatologist and fellowship-trained Mohs surgeon at Intracoastal Dermatology and Skin Surgery."
        />
        <link
          rel="canonical"
          href="https://intracoastal-dermatology.com/about"
        />
        <meta
          property="og:title"
          content="Dr. Blair Harris, DO, FAAD - Intracoastal Dermatology and Skin Surgery"
        />
        <meta
          property="og:description"
          content="Learn about Dr. Blair Harris, a board-certified dermatologist and fellowship-trained Mohs surgeon at Intracoastal Dermatology and Skin Surgery."
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/about"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Blair Harris, DO, FAAD",
            jobTitle: "Dermatologist and Fellowship-Trained Mohs Surgeon",
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Intracoastal Dermatology and Skin Surgery",
              url: "https://intracoastal-dermatology.com",
            },
            url: "https://intracoastal-dermatology.com/about",
            image:
              "https://intracoastal-dermatology.com/DrHarrisHeadshotFinal.webp",
            sameAs: [
              "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
              "https://www.instagram.com/intracoastaldermatology/",
            ],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Pacific Northwest University",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "509 Olde Waterford Way Suite 103",
              addressLocality: "Leland",
              addressRegion: "NC",
              postalCode: "28451",
              addressCountry: "US",
            },
            description:
              "Dr. Blair Harris is a board-certified dermatologist and fellowship-trained Mohs surgeon at Intracoastal Dermatology and Skin Surgery.",
            medicalSpecialty: "Dermatology",
          })}
        </script>
      </Helmet> */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={headerControls}
        className="mb-1 bg-gray-100 py-8"
      >
        <div className="container px-4 lg:px-8">
          <header className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={headerControls}
              className="mb-2 font-poppins text-4xl font-medium text-[#4d4d4d] lg:text-6xl"
            >
              Dr. Blair Harris, DO, FAAD
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={headerControls}
              className="mb-7 font-poppins text-xl font-medium text-[#4d4d4d] lg:text-2xl"
            >
              Board-Certified Dermatologist, Fellowship-Trained Mohs Surgeon
              <div className="flex justify-center gap-x-8">
                <Image src={aadlogo} alt="AAD Logo" className="mx-auto w-20" />
                {/* <Image src={acms} alt = 'ACMS American College of Mohs Surgery' className="w-20 mx-auto" /> */}
              </div>
            </motion.h3>
          </header>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contentControls}
              className="w-full lg:w-1/2"
            >
              <Image
                src={headshot}
                alt="Dr. Blair Harris"
                className="mb-8 h-auto w-fit rounded-lg lg:mb-0"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={contentControls}
              className="w-full lg:w-1/2"
            >
              <p className="prose-xl prose-neutral max-w-prose leading-relaxed text-[#4d4d4d]">
                Dr. Blair Harris was born and raised in northern Utah. He
                graduated from Brigham Young University with a degree in
                Business Management with an emphasis in finance. After working
                as a financial analyst at Lockheed Martin in southern California
                for three years, he decided to pursue his lifelong dream of
                becoming a doctor. Dr. Harris attended medical school at Pacific
                Northwest University in Yakima, Washington. While in medical
                school, he was elected to a position in student government and
                enjoyed serving his fellow students. His leadership position
                enabled him to institute multiple organizational changes
                including implementing mental health resources, student support
                groups, and financial tracking instruments for the student
                government organization at PNWU.
              </p>
              <Image
                src={family}
                alt="Harris Family"
                className="mt-8 w-full rounded-lg"
              />
              <p className="prose-xl prose-neutral mt-8 max-w-prose leading-relaxed text-[#4d4d4d]">
                Dr. Harris developed a love for dermatology while volunteering
                as a camp counselor at Camp Discovery, a summer camp for
                children with dermatologic skin conditions. He completed his
                internship and residency through Campbell University, his number
                one choice. He enjoys all aspects of dermatology, but found
                special interest in procedural and surgical dermatology, which
                led him to pursue a fellowship in Mohs Micrographic Surgery.
                When he’s not working as a dermatologist, you can find Blair
                spending time with his wife and two daughters, exercising,
                enjoying the beaches, or doing projects around the house.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
