import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const MedicalDisclaimer = () => {
  const headerControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    headerControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } });
    contentControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } });
  }, [headerControls, contentControls]);

  return (
    <>
    <Helmet>
      <title>Medical Disclaimer - Intracoastal Dermatology and Skin Surgery</title>
      <meta name="description" content="Read the medical disclaimer for Intracoastal Dermatology and Skin Surgery. Understand the terms and conditions governing the use of our website." />
      <link rel="canonical" href="https://intracoastal-dermatology.com/medical-disclaimer" />
      <meta property="og:title" content="Medical Disclaimer - Intracoastal Dermatology and Skin Surgery" />
      <meta property="og:description" content="Read the medical disclaimer for Intracoastal Dermatology and Skin Surgery. Understand the terms and conditions governing the use of our website." />
      <meta property="og:url" content="https://intracoastal-dermatology.com/medical-disclaimer" />
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
          Intracoastal Dermatology Medical Disclaimer
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={contentControls}>
          <h3 className="text-xl mb-2">Introduction</h3>
          <p className="mb-4">
            Welcome to the website for Intracoastal Dermatology and Skin Surgery. Before accessing or using any information provided on this platform, it is essential to understand the following disclaimer. This disclaimer outlines the terms and conditions governing the use of our website and the information contained herein. By accessing this website, you agree to abide by the terms of this disclaimer:
          </p>

          <h3 className="text-xl mb-2">Educational Purpose</h3>
          <p className="mb-4">
            The content provided on this website is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <h3 className="text-xl mb-2">Consultation with Healthcare Professionals</h3>
          <p className="mb-4">
            Users are encouraged to seek the advice of qualified healthcare professionals regarding any medical condition or treatment plan. The information provided on this website should not be construed as medical advice or a replacement for consultation with a healthcare provider.
          </p>

          <h3 className="text-xl mb-2">User Responsibility</h3>
          <p className="mb-4">
            Users engage with the content on this website at their own risk. The website owner, contributors, authors, or affiliates shall not be held liable for any consequences arising from the use of information provided on this platform.
          </p>

          <h3 className="text-xl mb-2">No Doctor-Patient Relationship</h3>
          <p className="mb-4">
            Accessing this website does not establish a doctor-patient relationship between the user and the website owner or contributors. Any communication or interaction with the website does not constitute medical advice or consultation.
          </p>

          <h3 className="text-xl mb-2">Accuracy and Completeness</h3>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information provided. Users are advised to verify the information independently.
          </p>

          <h3 className="text-xl mb-2">Medical Emergencies</h3>
          <p className="mb-4">
            In case of a medical emergency, users are urged to seek immediate medical assistance by contacting their local emergency services or healthcare provider.
          </p>

          <h3 className="text-xl mb-2">External Links</h3>
          <p className="mb-4">
            This website may contain links to third-party websites for additional information or resources. The inclusion of external links does not imply endorsement or validation of the content on those websites. Users are advised to review the terms and conditions of those websites before accessing their content.
          </p>

          <h3 className="text-xl mb-2">Modifications to Disclaimer</h3>
          <p className="mb-4">
            The website owner reserves the right to modify, amend, or update this disclaimer at any time without prior notice. Users are encouraged to review this disclaimer periodically for any changes.
          </p>

          <p className="mb-4">
            By accessing this website, you acknowledge that you have read, understood, and agreed to the terms of this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using this website.
          </p>

          <p className="mb-4">
            For any questions or concerns regarding this disclaimer, please contact us at (910) 631-0301.
          </p>

          <p className="mb-4">Date of Last Update: 07-14-2024</p>

          <p className="mb-4">
            Thank you for taking the time to review this medical disclaimer. We value transparency and integrity in providing health-related information to our users. By adhering to the terms outlined in this disclaimer, we aim to promote informed decision-making and responsible health management among our audience.
          </p>
        </motion.div>
      </motion.div>
    </div>
          </>
  );
};

export default MedicalDisclaimer;
