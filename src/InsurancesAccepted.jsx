import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const InsurancesAccepted = () => {
  const headerControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    headerControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
    contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } });
  }, [headerControls, contentControls]);

  return (
    <>
    <Helmet>
      <title>Insurances Accepted - Intracoastal Dermatology and Skin Surgery</title>
      <meta name="description" content="Intracoastal Dermatology accepts a wide range of insurance plans to ensure that our services are accessible to as many patients as possible." />
      <link rel="canonical" href="https://intracoastal-dermatology.com/insurances-accepted" />
      <meta property="og:title" content="Insurances Accepted - Intracoastal Dermatology and Skin Surgery" />
      <meta property="og:description" content="Intracoastal Dermatology accepts a wide range of insurance plans to ensure that our services are accessible to as many patients as possible." />
      <meta property="og:url" content="https://intracoastal-dermatology.com/insurances-accepted" />
    </Helmet>
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={headerControls}
        className="max-w-4xl container p-6 text-[#4d4d4d] bg-slate-100 rounded-lg"
        >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={contentControls}
          className="text-3xl mb-4 text-center"
          >
          Insurances Accepted
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={contentControls}>
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            We accept a wide range of insurance plans to ensure that our services are accessible to as many patients as possible. Below is a list of insurance providers that we currently accept.
          </p>

          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Aetna</li>
            <li className="mb-2">Blue Cross Blue Shield of North Carolina</li>
            <li className="mb-2">Cigna</li>
            <li className="mb-2">Humana</li>
            <li className="mb-2">Medicare</li>
            <li className="mb-2">THREE RIVERS PROVIDER NETWORK (TRPN)</li>
            <li className="mb-2">TRICARE - Humana Military - East</li>
            <li className="mb-2">MEDCOST</li>
            <li className="mb-2">MULTIPLAN</li>
            <li className="mb-2">PHCS</li>
            <li className="mb-2">UMR</li>
            <li className="mb-2">United Health Care</li>
            <li className="mb-2">VA Community Care Network</li>
            <li className="mb-2">Coventry-Wellpath Healthcare</li>
          </ul>

          <p className="leading-relaxed my-5 text-gray-600 text-center">
            If you don't see your insurance provider listed, please contact our office at (910) 631-0301 to verify if we accept your insurance plan.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            We also offer flexible payment options for those without insurance. Your health and well-being are our top priority, and we strive to provide affordable and accessible care to all our patients.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            For any questions regarding insurance or payment options, feel free to reach out to our billing department at intracoastaldermatology@gmail.com.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Thank you for choosing Intracoastal Dermatology for your skincare needs. We look forward to serving you!
          </p>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Date of Last Update: 06-20-2024
          </p>
        </motion.div>
      </motion.div>
    </div>
          </>
  );
};

export default InsurancesAccepted;
