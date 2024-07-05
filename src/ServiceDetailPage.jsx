import React from "react";
import { useParams, Link } from "react-router-dom";
import CategoryList from "./CategoryList.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import servicesData from "./servicesData.json";
import slugify from "./slugify.js";
import cream from "./assets/images/optimizations/kelsey-curtis-kD9qprR6HBI-unsplash.webp";

const categories = [
  {
    id: "general",
    name: "General Dermatology",
    services: servicesData.general,
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dermatology",
    services: servicesData.cosmetic,
  },
  {
    id: "surgical",
    name: "Surgical Dermatology",
    services: servicesData.surgical,
  },
];

const ServiceDetailPage = () => {
  const { categoryId, serviceSlug } = useParams();

  const category = categories.find((cat) => cat.id === categoryId);
  const categoryServices = category ? category.services : [];
  const service = categoryServices.find((s) => slugify(s.name) === serviceSlug);

  if (!service) {
    return (
      <div className="p-6 text-center text-red-500">Service not found</div>
    );
  }

  const renderSection = (title, content) => {
    if (!content) return null;
    return (
      <section className="mb-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
        <h3 className="font-semibold mb-2 text-xl text-[#30548B] sm:mb-3 sm:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#2C3E50] sm:text-base">
          {content}
        </p>
      </section>
    );
  };

  const renderList = (items) => (
    <ul className="mt-2 list-none pl-4">
      {items.map((item, index) => (
        <li key={index} className="mb-2 flex items-start">
          <span className="mr-2 flex-shrink-0 text-[#45B7A9]">•</span>
          <span className="text-sm text-[#2C3E50] sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );

  const renderTypes = (types) => {
    if (!types || types.length === 0) return null;
    return (
      <ul className="mt-2 list-none pl-4">
        {types.map((type, index) => (
          <li key={index} className="mb-4">
            <span className="font-semibold mb-1 block text-sm text-[#4A7AB8] sm:text-base">
              {type.name}
            </span>
            <p className="border-l-2 border-[#E6EDF7] pl-3 text-sm text-[#2C3E50] sm:text-base">
              {type.description}
            </p>
          </li>
        ))}
      </ul>
    );
  };

  const renderTreatments = (treatments) => {
    if (!treatments || treatments.length === 0) return null;
  
    const overview = treatments.overview || null;
    const items = treatments.items || treatments; // if no items key, assume treatments is the items array
  
    return (
      <div className="mt-4 space-y-4 sm:space-y-6">
        {overview && (
          <div className="bg-[#E6EDF7] rounded-lg p-3 sm:p-4 shadow-sm">
            <h4 className="font-semibold text-lg sm:text-xl mb-2 text-[#30548B]">{overview.name}</h4>
            <p className="text-[#2C3E50] mb-3 text-sm sm:text-base">{overview.description}</p>
          </div>
        )}
        {items && items.map((treatment, index) => (
          <div key={index} className="bg-[#E6EDF7] rounded-lg p-3 sm:p-4 shadow-sm">
            <h4 className="font-semibold text-lg sm:text-xl mb-2 text-[#30548B]">{treatment.name}</h4>
            <p className="text-[#2C3E50] mb-3 text-sm sm:text-base">{treatment.description}</p>
            {treatment.examples && (
              <div className="bg-white rounded p-2 sm:p-3">
                <h5 className="font-medium text-[#4A7AB8] mb-2 text-sm sm:text-base">Examples:</h5>
                {renderList(treatment.examples)}
              </div>
            )}
            {treatment.types && (
              <div className="bg-white rounded p-2 sm:p-3 mt-3">
                {renderTypes(treatment.types)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  

  const renderCauses = (causes) => {
    if (!causes) return null;

    // Check if causes is an array of objects
    if (Array.isArray(causes)) {
      return (
        <section className="mb-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h3 className="font-semibold mb-2 text-xl text-[#30548B] sm:mb-3 sm:text-2xl">
            Causes
          </h3>
          <ul className="mt-2 list-none pl-4">
            {causes.map((cause, index) => (
              <li key={index} className="mb-4">
                <span className="font-semibold mb-1 block text-sm text-[#4A7AB8] sm:text-base">
                  {cause?.name}
                </span>
                <p className="border-l-2 border-[#E6EDF7] pl-3 text-sm text-[#2C3E50] sm:text-base">
                  {cause?.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      );
    }

    return renderSection("Causes", causes);
  };

  return (
    <div className="services-page min-h-screen bg-gradient-to-b from-[#E6EDF7] to-white py-8 sm:py-1">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 sm:mb-1">
          <CategoryList
            categories={categories}
            currentCategoryId={categoryId}
            currentServiceId={slugify(service.name)}
          />
        </div>
        <div className="mx-auto place-self-start overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="bg-[#30548B] p-4 text-white sm:p-6">
            <Breadcrumb categories={categories} />
            <h2 className="font-bold mt-2 text-2xl sm:mt-4 sm:text-4xl">
              {service.name}
            </h2>
            <p className="pl-3 mt-3 italic">
              What is it? What treatments are available? Read below to find more.
            </p>
          </div>
          <div className="p-2.5 sm:p-3">
            <img
              src={service.photoUrl || cream}
              alt={service.name}
              className="mb-4 h-48 w-full rounded-lg object-cover sm:mb-8 sm:h-64"
            />
            {renderSection("Description", service.description)}
            {renderSection("Overview", service.overview)}
            {renderCauses(service.causes)}

      

            {service.types && service.types.length > 1 && (
              <section className="mb-6 rounded-xl bg-white p-3 shadow-md sm:p-5">
                <h3 className="font-semibold mb-2 text-xl text-[#30548B] sm:mb-3 sm:text-2xl">
                  Types
                </h3>
                {renderTypes(service.types)}
              </section>
            )}
            

            <section className="mb-6 rounded-xl bg-white p-3 shadow-md sm:p-5">
              <h3 className="font-semibold mb-2 text-xl text-[#30548B] sm:mb-3 sm:text-2xl">
                Treatments
              </h3>
              {renderTreatments(service.treatments)}
            </section>

            <section className="mb-6 rounded-lg bg-white p-3 shadow-md sm:p-5">
              <h3 className="font-semibold mb-2 text-xl text-[#30548B] sm:mb-3 sm:text-2xl">
                Lifestyle Remedies
              </h3>
              {renderTypes(service.lifestyleRemedies)}
            </section>

            {renderSection("Management", service.management)}
          </div>
        </div>
        <div className="mt-6 sm:mt-8">
          <Link
            to={`/services/${categoryId}`}
            className="sm:text-md font-semibold inline-flex items-center rounded-full bg-[#30548B] px-4 py-2 text-sm text-white transition-all duration-300 ease-in-out hover:bg-[#30548B] hover:text-white hover:shadow-lg sm:px-6 sm:py-3"
          >
            &larr; Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
