import React from "react";
import { Helmet } from "react-helmet-async";

const ScheduleAppointment = () => {
  return (
    <>
      <Helmet>
        <title>
          Schedule Appointment | Intracoastal Dermatology and Skin Surgery
        </title>
        <link rel="canonical" href="https://intracoastal-dermatology.com/schedule-appointment" />
        <meta
          name="description"
          content="Schedule an appointment with Intracoastal Dermatology for expert care in general, cosmetic, and surgical dermatology."
        />
        <link
          rel="canonical"
          href="https://intracoastal-dermatology.com/schedule-appointment"
        />
        <meta
          property="og:title"
          content="Schedule Appointment | Intracoastal Dermatology and Skin Surgery"
        />
        <meta
          property="og:description"
          content="Schedule an appointment with Intracoastal Dermatology for expert care in general, cosmetic, and surgical dermatology."
        />
        <meta
          property="og:url"
          content="https://intracoastal-dermatology.com/schedule-appointment"
        />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Schedule an appointment",
    "description": "Submit the form below to schedule an appointment with Dr. Harris.",
    "url": "https://intracoastal-dermatology.com/schedule-appointment",
    "image": {
      "@type": "ImageObject",
      "url": "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://intracoastal-dermatology.com/schedule-appointment",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Schedule an appointment"
      }
    }
  })}
</script>

      </Helmet>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-700">
          Appointment Form
        </h2>
        <h3 className="mb-8 text-center text-xl font-medium text-gray-600">
          Submit the form below to schedule an appointment with Dr. Harris.
        </h3>
        <div className="w-full max-w-4xl rounded-lg bg-white p-1 shadow-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScUZCOgPHXlIyHcbbIIInU8Ud6PeUqt_3h-pxqk2_LTXihmtA/viewform?embedded=true"
            className="h-[100vh] w-full rounded-lg"
            title="Appointment Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default ScheduleAppointment;
