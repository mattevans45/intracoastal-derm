import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import cream from "./assets/kelsey-curtis-kD9qprR6HBI-unsplash.jpg";

const servicesData = {
  general: [
    { id: 1, name: "Psoriasis", description: "Psoriasis.", details: "Detailed info about Psoriasis...", photoUrl: cream },
    { id: 2, name: "Atropic Dermatitis", description: "Atropic Dermatitis.", details: "Detailed info about Atropic Dermatitis...", photoUrl: cream },
    { id: 3, name: "Bullous Diseases", description: "Various blood tests.", details: "Detailed info about Bullous Diseases...", photoUrl: cream },
    { id: 4, name: "Lichen Planus", description: "Lichen Planus.", details: "Detailed info about Lichen Planus...", photoUrl: cream },
    { id: 5, name: "Vitiligo", description: "Vitiligo.", details: "Detailed info about Vitiligo...", photoUrl: cream },
    { id: 6, name: "Acne", description: "Acne.", details: "Detailed info about Acne...", photoUrl: cream },
    { id: 7, name: "Rosacea", description: "Rosacea.", details: "Detailed info about Rosacea...", photoUrl: cream },
    { id: 8, name: "Skin Cancer Screening", description: "Skin Cancer Screening.", details: "Detailed info about Skin Cancer Screening...", photoUrl: cream },
    { id: 9, name: "Rash", description: "Rash.", details: "Detailed info about Rash...", photoUrl: cream },
    { id: 10, name: "Growths", description: "Growths.", details: "Detailed info about Growths...", photoUrl: cream },
    { id: 11, name: "Skin discoloration", description: "Skin discoloration.", details: "Skin discoloration is a bla", photoUrl: cream },
    { id: 12, name: "Excessive sweating", description: "Excessive sweating.", details: "Detailed info about Excessive sweating...", photoUrl: cream },
  ],
  cosmetic: [
    { id: 1, name: "Botox", description: "Reduces the appearance of wrinkles by temporarily paralyzing muscles.", details: `<p><strong>Manufacturer:</strong> Botox is produced by Allergan, a well-known pharmaceutical company.</p><p><strong>Formulation:</strong> Botox is derived from the bacterium Clostridium botulinum. It works by blocking nerve signals in the muscles where it is injected, leading to temporary muscle paralysis and a reduction in the appearance of wrinkles.</p><p><strong>Onset of Action:</strong> The effects of Botox usually become noticeable within 3 to 7 days after injection, reaching their peak around 2 weeks.</p><p><strong>Duration of Effects:</strong> The effects of Botox typically last around 3 to 4 months.</p><p>While these products share the same general mechanism of action and purpose, some patients may find that they respond differently to each neurotoxin, leading to variations in personal preferences. Factors such as the onset of action, duration of effects, and potential differences in diffusion patterns may influence the choice of one product over another. It's essential for individuals considering these treatments to consult with Dr. Harris to determine the most suitable option based on their specific needs and preferences.</p>`, photoUrl: cream },
    { id: 2, name: "Dermal Fillers", description: "Plump and lift the skin.", details: "Detailed info about Dermal Fillers...", photoUrl: cream },
    { id: 3, name: "Lasers", description: "Lasers.", details: "Detailed info about Lasers...", photoUrl: cream },
    { id: 4, name: "Chemical Peels", description: "Chemical Peels.", details: "Detailed info about Chemical Peels...", photoUrl: cream },
  ],
  surgical: [
    { id: 1, name: "Mole Removal", description: "Remove unwanted moles.", details: "Detailed info about Mle Removal...", photoUrl: cream },
    { id: 2, name: "Skin Biopsy", description: "Diagnose skin conditions.", details: "Detailed info about Skin Biopsy...", photoUrl: cream },
    { id: 3, name: "Skin Cancer Removal", description: "Remove skin cancer.", details: "Detailed info about Skin Cancer Removal...", photoUrl: cream },
    { id: 4, name: "Mohs Surgery", description: "Mohs Surgery.", details: "Detailed info about Mohs Surgery...", photoUrl: cream },
    { id: 5, name: "Scar Revision", description: "Scar Revision.", details: "Detailed info about Scar Revision...", photoUrl: cream },
  ],
};

const categories = [
  { id: "general", name: "General Dermatology", services: servicesData.general },
  { id: "cosmetic", name: "Cosmetic Dermatology", services: servicesData.cosmetic },
  { id: "surgical", name: "Surgical Dermatology", services: servicesData.surgical },
];

const ServiceDetailPage = () => {
  const { categoryId, serviceId } = useParams();
  const categoryServices = servicesData[categoryId] || [];
  const service = categoryServices.find(s => s.id.toString() === serviceId);

  const currentCategory = categories.find(category => category.id === categoryId);

  const navigate = useNavigate();

  if (!service) {
    return <div className="p-6 text-center text-red-500">Service not found</div>;
  }

  return (
    
    <div className="services-page max-w-7xl p-6 grid grid-cols-1 w-full md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div className="md:hidden inline-flex md:col-span-1">
        <CategoryList
          categories={categories}
          currentCategoryId={categoryId}
          currentServiceId={serviceId}
        />
      </div>
      <div className="md:col-span-3 sm:col-span-1 service-detail-page prose prose-fuchsia max-w-prose font-poppins bg-white rounded-lg shadow-md p-4">
        <Breadcrumb categories={categories} />
        <h2 className="text-3xl mt-5 mb-2 font-bold">{service.name}</h2>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <div className="text-gray-800 space-y-4" dangerouslySetInnerHTML={{ __html: service.details }}></div>
      </div>
      <div>
        <img src={service.photoUrl} alt={service.name} className="rounded-lg shadow-md w-full h-auto mb-4" />
        <button onClick={() => navigate(-1)} className="text-md inline-flex items-center rounded-xl bg-[#30548B] p-2 leading-6 text-white duration-500 ease-in-out hover:bg-[#30548B]/90 hover:text-white hover:shadow-lg hover:transition-all">
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
