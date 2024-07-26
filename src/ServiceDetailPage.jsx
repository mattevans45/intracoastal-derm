'use client'
import React, { useMemo } from "react";
import Image from "next/image";
import Link  from "next/link";
// import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound.jsx";
import CategoryList from "./CategoryList.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import servicesData from "./servicesData.json";
import slugify from "./slugify.js";
import cream from "./assets/images/optimized/kelsey-curtis-kD9qprR6HBI-unsplash.webp";

const useServiceData = (categoryId, serviceName) => {
  return useMemo(() => {
    const categories = Object.keys(servicesData).map((key) => ({
      id: key,
      name: key.charAt(0).toUpperCase() + key.slice(1),
      services: servicesData[key],
    }));

    const category = categories.find((cat) => cat.id === categoryId);
    const service = category
      ? category.services.find((s) => slugify(s.name) === serviceName)
      : null;

    return { categories, category, service };
  }, [categoryId, serviceName]);
};

const Section = React.memo(({ title, content }) => {
  if (!content) return null;
  return (
    <section className="mb-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
      <h3 className="mb-2 text-xl font-semibold text-[#30548B] sm:mb-3 sm:text-2xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#2C3E50] sm:text-base">
        {content}
      </p>
    </section>
  );
});

const List = React.memo(({ items }) => (
  <ul className="mt-2 list-none pl-4">
    {items.map((item, index) => (
      <li key={index} className="mb-2 flex items-start">
        <span className="mr-2 flex-shrink-0 text-[#45B7A9]">•</span>
        <span className="text-sm text-[#2C3E50] sm:text-base">{item}</span>
      </li>
    ))}
  </ul>
));

const Types = React.memo(({ types }) => {
  if (!types || types.length === 0) return null;
  return (
    <ul className="mt-2 list-none pl-4">
      {types.map((type, index) => (
        <li key={index} className="mb-4">
          <span className="mb-1 block text-sm font-semibold text-[#4A7AB8] sm:text-base">
            {type.name}
          </span>
          <p className="border-l-2 border-[#E6EDF7] pl-3 text-sm text-[#2C3E50] sm:text-base">
            {type.description}
          </p>
        </li>
      ))}
    </ul>
  );
});

const Treatments = React.memo(({ treatments }) => {
  if (!treatments || treatments.length === 0) return null;

  const overview = treatments.overview || null;
  const items = treatments.items || treatments;

  return (
    <div className="mt-4 space-y-4 sm:space-y-6">
      {overview && (
        <div className="rounded-lg bg-[#E6EDF7] p-3 shadow-sm sm:p-4">
          <h4 className="mb-2 text-lg font-semibold text-[#30548B] sm:text-xl">
            {overview.name}
          </h4>
          <p className="mb-3 text-sm text-[#2C3E50] sm:text-base">
            {overview.description}
          </p>
        </div>
      )}
      {items &&
        items.map((treatment, index) => (
          <div
            key={index}
            className="rounded-lg bg-[#E6EDF7] p-3 shadow-sm sm:p-4"
          >
            <h4 className="mb-2 text-lg font-semibold text-[#30548B] sm:text-xl">
              {treatment.name}
            </h4>
            <p className="mb-3 text-sm text-[#2C3E50] sm:text-base">
              {treatment.description}
            </p>
            {treatment.examples && (
              <div className="rounded bg-white p-2 sm:p-3">
                <h5 className="mb-2 text-sm font-medium text-[#4A7AB8] sm:text-base">
                  Examples:
                </h5>
                <List items={treatment.examples} />
              </div>
            )}
            {treatment.types && (
              <div className="mt-3 rounded bg-white p-2 sm:p-3">
                <Types types={treatment.types} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
});

const Causes = React.memo(({ causes }) => {
  if (!causes) return null;

  if (Array.isArray(causes)) {
    return (
      <section className="mb-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
        <h3 className="mb-2 text-xl font-semibold text-[#30548B] sm:mb-3 sm:text-2xl">
          Causes
        </h3>
        <Types types={causes} />
      </section>
    );
  }

  return <Section title="Causes" content={causes} />;
});

const ServiceDetailPage = () => {
  const { category, serviceName } = useParams();
  const { categories, category: selectedCategory, service } = useServiceData(category, serviceName);

  if (!selectedCategory || !service) {
    return <NotFound />
  }

 
  return (
    <>
      {/* <Helmet>
        <title>{`${service.name} - Intracoastal Dermatology`}</title>
        <meta
          name="description"
          content={`Learn about our ${service.name} service at Intracoastal Dermatology. ${service.shortDescription}`}
        />
        <link
          rel="canonical"
          href={`https://intracoastal-dermatology.com/services/${category}/${serviceName}`}
        />
        <meta
          property="og:title"
          content={`${service.name} - Intracoastal Dermatology`}
        />
        <meta property="og:description" content={service.shortDescription} />
        <meta
          property="og:url"
          content={`https://intracoastal-dermatology.com/services/${category}/${serviceName}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalProcedure",
                name: `${service.name}`,
                description: `${service.description}`,
                url: `https://intracoastal-dermatology.com/services/${category}/${serviceName}`,
                image:
                  "https://intracoastal-dermatology.com/IntracoastalDermatologyAndSkinSurgeryMainLogo.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "509 Olde Waterford Way, Suite 103",
                  addressLocality: "Leland",
                  addressRegion: "NC",
                  postalCode: "28451",
                  addressCountry: "US",
                },
              },
              {
                "@type": [
                  "Organization",
                  "MedicalBusiness",
                  "LocalBusiness",
                  "MedicalOrganization",
                ],
                url: "https://intracoastal-dermatology.com/",
                logo: "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
                description:
                  "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 34.21687,
                  longitude: -78.02111,
                },
                makesOffer: [
                  {
                    "@type": "Offer",
                    name: "General Dermatology",
                    description:
                      "Comprehensive skin health examinations and treatments",
                  },
                  {
                    "@type": "Offer",
                    name: "Cosmetic Dermatology",
                    description:
                      "Advanced cosmetic procedures for skin rejuvenation",
                  },
                  {
                    "@type": "Offer",
                    name: "Surgical Dermatology",
                    description:
                      "Specialized surgical treatments for skin conditions",
                  },
                ],
                potentialAction: {
                  "@type": "ReserveAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://intracoastal-dermatology.com/schedule-appointment",
                    inLanguage: "en-US",
                    actionPlatform: [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/IOSPlatform",
                      "http://schema.org/AndroidPlatform",
                    ],
                  },
                  result: {
                    "@type": "Reservation",
                    name: "Schedule an appointment",
                  },
                },
                openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-910-631-0301",
                    contactType: "appointment",
                    areaServed: "Leland",
                    availableLanguage: ["English"],
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/people/Intracoastal-Dermatology-and-Skin-Surgery/61561782743005/",
                  "https://www.instagram.com/intracoastaldermatology/",
                ],
                name: "Intracoastal Dermatology and Skin Surgery",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "509 Olde Waterford Way Suite 103",
                  addressLocality: "Leland",
                  addressRegion: "NC",
                  postalCode: "28451",
                  addressCountry: "US",
                },
                image:
                  "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryMainLogo.webp",
                email: "intracoastaldermatology@gmail.com",
                telephone: "+1-910-631-0301",
                priceRange: "$$",
              },
            ],
          })}
        </script>
      </Helmet> */}
      <div className="services-page min-h-screen bg-gradient-to-b from-[#E6EDF7] to-white py-8 sm:py-1">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 sm:mb-1">
            <CategoryList
              categories={Object.keys(servicesData)}
              currentCategoryId={category}
              currentServiceId={slugify(service.name, { lower: true })}
            />
          </div>
          <div className="mx-auto place-self-start overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="bg-[#30548B] p-4 text-white sm:p-6">
              <Breadcrumb categories={categories} />
              <h2 className="mt-2 text-2xl font-bold sm:mt-4 sm:text-4xl">
                {service.name}
              </h2>
              <p className="mt-3 pl-3 italic">
                What is it? What treatments are available? Read below to find
                more.
              </p>
            </div>
            <div className="p-2.5 sm:p-3">
              <Image
                src={service.photoUrl || cream}
                alt={service.name}
                className="mb-4 h-48 w-full rounded-lg object-cover sm:mb-8 sm:h-64"
              />
              <Section title="Description" content={service.description} />
              <Section title="Overview" content={service.overview} />
              <Causes causes={service.causes} />
              {service.types && service.types.length > 1 && (
                <section className="mb-6 rounded-xl bg-white p-3 shadow-md sm:p-5">
                  <h3 className="mb-2 text-xl font-semibold text-[#30548B] sm:mb-3 sm:text-2xl">
                    Types
                  </h3>
                  <Types types={service.types} />
                </section>
              )}
              <section className="mb-6 rounded-xl bg-white p-3 shadow-md sm:p-5">
                <h3 className="mb-2 text-xl font-semibold text-[#30548B] sm:mb-3 sm:text-2xl">
                  Treatments
                </h3>
                <Treatments treatments={service.treatments} />
              </section>
              <section className="mb-6 rounded-lg bg-white p-3 shadow-md sm:p-5">
                <h3 className="mb-2 text-xl font-semibold text-[#30548B] sm:mb-3 sm:text-2xl">
                  Lifestyle Remedies
                </h3>
                <Types types={service.lifestyleRemedies} />
              </section>
              <Section title="Management" content={service.management} />
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link
              to={`/services/${category}`}
              className="sm:text-md inline-flex items-center rounded-full bg-[#30548B] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:bg-[#30548B] hover:text-white hover:shadow-lg sm:px-6 sm:py-3"
            >
              &larr; Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
