import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

import headshot from "./assets/images/optimized/DrHarrisHeadshotFinal.webp";
import family from "./assets/images/optimized/HarrisFamily.webp";
import aadlogo from "./assets/images/optimized/American_Academy_of_Dermatology_logo.svg.webp";
import asdsLogo from "./assets/images/optimized/logo-asds-cmyk.png";
import abdlogo from "./assets/images/optimized/DrHarrisABD-transformed.webp"
// import acms from "./assets/acms-mohs-surgeon.png";

const Image = ({ src, alt, className }) => (
  <img
    src={src}
    srcSet={`${src} 1x, ${src} 2x`}
    sizes="(max-width: 500px) 50vw, 100vw"
    alt={alt}
    className={className}
  />
);
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
      <Helmet>
        <title>
          About Dr. Blair Harris, DO, FAAD
        </title>
        <meta
          name="description"
          content="Learn about Dr. Blair Harris, DO, FAAD, a board-certified dermatologist and fellowship-trained Mohs surgeon at Intracoastal Dermatology and Skin Surgery."
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
      </Helmet>
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        animate={headerControls}
        className="mb-1 bg-gray-100 py-8"
      >
        <div className="container px-4 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={headerControls}
              className="mb-2 font-poppins text-4xl font-medium text-[#4d4d4d] lg:text-6xl"
            >
              Dr. Blair Harris, DO, FAAD
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={headerControls}
              className="mb-7 font-poppins text-xl font-medium text-[#4d4d4d] lg:text-2xl"
            >
              Board-Certified Dermatologist, Fellowship-Trained Mohs Surgeon
              <div className="flex justify-center items-center gap-x-8">
                <Image src={aadlogo} alt="AAD Logo" className="w-20" />
                <Image src={asdsLogo} alt="ASDS Logo" className="w-20" />
                <Image src= {abdlogo}  className="w-20" alt="American Board of Dermatology Micographic Dermatologic Surgery Certified"/>
                {/* <Image src={acms} alt = 'ACMS American College of Mohs Surgery' className="w-20 mx-auto" /> */}
              </div>
            </motion.h2>
          </div>

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

            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={contentControls}
              className="w-full lg:w-1/2"
            >
              <p className="prose-xl prose-neutral max-w-prose leading-relaxed text-[#4d4d4d]">
              A native of northern Utah, Dr. Blair Harris graduated from Brigham Young University with a degree in Business Management emphasizing in finance. Though he enjoyed his years working as a financial analyst at Lockheed Martin in Southern California, his lifelong dream of becoming a doctor persisted, leading him to Pacific Northwest University in Yakima, WA. During medical school, Blair was elected to a student government position which enabled him to institute multiple organizational changes for the benefit of his peers. These changes included: implementing mental health resources, creating student support groups, and introducing financial tracking instruments for the student government organization.
              </p>

              <p className="prose-xl prose-neutral mt-8 max-w-prose leading-relaxed text-[#4d4d4d]">
              Blair became inspired to pursue dermatology while volunteering as a camp counselor at Camp Discovery, a summer camp for young children suffering from various skin disorders. Upon completion of his internship and residency through Campbell University, Blair secured a coveted fellowship position in Micrographic Surgery and Dermatologic Oncology. Now a board-certified, fellowship-trained physician, Dr. Harris is thrilled to open his very own office to serve the people in North Carolina he has grown to love.
              </p>
              <Image
                src={family}
                alt="Harris Family"
                className="mt-8 w-full rounded-lg"
              />
              <p className="prose-xl prose-neutral mt-8 max-w-prose leading-relaxed text-[#4d4d4d]">
              When he is not in his office, Dr. Harris is either spending time with his wife and two daughters, shark tooth hunting, or working on projects around the house.
              </p>
            </motion.span>
          </div>
        </div>
      </motion.section>
    </>
  );
}
