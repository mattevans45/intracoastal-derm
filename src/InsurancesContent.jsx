"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const InsurancesContent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: .6,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container max-w-4xl rounded-lg bg-slate-100 p-6 text-[#4d4d4d]"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            variants={itemVariants}
            className="mb-4 text-center text-3xl"
          >
            Insurances Accepted
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 50 }} variants={itemVariants}>
            <p className="mb-5 text-center leading-relaxed text-gray-600">
              We accept a wide range of insurance plans to ensure that our
              services are accessible to as many patients as possible. Below is
              a list of insurance providers that we currently accept.
            </p>

            <ul className="mb-4 list-inside list-disc" aria-label="List of accepted insurance providers">
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

            <p className="my-5 text-center leading-relaxed text-gray-600">
              If you don't see your insurance provider listed, please contact
              our office at (910) 631-0301 to verify if we accept your insurance
              plan.
            </p>

            <p className="mb-5 text-center leading-relaxed text-gray-600">
              We also offer flexible payment options for those without
              insurance. Your health and well-being are our top priority, and we
              strive to provide affordable and accessible care to all our
              patients.
            </p>

            <p className="mb-5 text-center leading-relaxed text-gray-600">
              For any questions regarding insurance or payment options, feel
              free to reach out to our billing department at
              intracoastaldermatology@gmail.com.
            </p>

            <p className="mb-5 text-center leading-relaxed text-gray-600">
              Thank you for choosing Intracoastal Dermatology for your skincare
              needs. We look forward to serving you!
            </p>

            <p className="mt-3 text-center text-xs text-gray-500">
              Date of Last Update: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
          </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default InsurancesContent;
