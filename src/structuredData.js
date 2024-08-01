// public/structuredData.js
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = `
{
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness", "LocalBusiness", "Dermatology"],
  "url": "https://intracoastal-dermatology.com/",
  "logo": "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
  "description": "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.216870,
    "longitude": -78.021110
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "General Dermatology",
      "description": "Comprehensive skin health examinations and treatments"
    },
    {
      "@type": "Offer",
      "name": "Cosmetic Dermatology",
      "description": "Advanced cosmetic procedures for skin rejuvenation"
    },
    {
      "@type": "Offer",
      "name": "Surgical Dermatology",
      "description": "Specialized surgical treatments for skin conditions"
    }
  ],
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
  },
  "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-910-631-0301",
      "contactType": "appointment",
      "areaServed": "Leland",
      "availableLanguage": ["English"]
    }
  ],
  "name": "Intracoastal Dermatology and Skin Surgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "509 Olde Waterford Way Suite 103",
    "addressLocality": "Leland",
    "addressRegion": "NC",
    "postalCode": "28451",
    "addressCountry": "US"
  },
  "image": "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
  "email": "intracoastaldermatology@gmail.com",
  "telephone": "+1-910-631-0301",
  "priceRange": "$$",
  "title": "Intracoastal Dermatology and Skin Surgery"
}
`;
document.head.appendChild(script);
