// src/pages/ServiceDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const servicesData = {
  general: [
    { id: 1, name: 'Psoriasis', description: 'Psoriasis.', details: 'Detailed info about Psoriasis...' },
    { id: 2, name: 'Atropic Dermatitis', description: 'Atropic Dermatitis.', details: 'Detailed info about Atropic Dermatitis...' },
    { id: 3, name: 'Bullous Diseases', description: 'Various blood tests.', details: 'Detailed info about Bullous Diseases...' },
    { id: 4, name: 'Lichen Planus', description: 'Lichen Planus.', details: 'Detailed info about Lichen Planus...' },
    { id: 5, name: 'Vitiligo', description: 'Vitiligo.', details: 'Detailed info about Vitiligo...' },
    { id: 6, name: 'Acne', description: 'Acne.', details: 'Detailed info about Acne...' },
    { id: 7, name: 'Rosacea', description: 'Rosacea.', details: 'Detailed info about Rosacea...' },
    { id: 8, name: 'Skin Cancer Screening', description: 'Skin Cancer Screening.', details: 'Detailed info about Skin Cancer Screening...' },
    { id: 9, name: 'Rash', description: 'Rash.', details: 'Detailed info about Rash...' },
    { id: 10, name: 'Growths', description: 'Growths.', details: 'Detailed info about Growths...' },
    { id: 11, name: 'Skin discoloration', description: 'Skin discoloration.', details: 'Skin discoloration is a bla' },
    { id: 12, name: 'Excessive sweating', description: 'Excessive sweating.', details: 'Detailed info about Excessive sweating...' },

  ],
  cosmetic: [
    {
      id: 1,
      name: 'Botox (onabotulinumtoxinA)',
      description: 'Reduces the appearance of wrinkles by temporarily paralyzing muscles.',
      details: `
        <p><strong>Manufacturer:</strong> Botox is produced by Allergan, a well-known pharmaceutical company.</p>
        <p><strong>Formulation:</strong> Botox is derived from the bacterium Clostridium botulinum. It works by blocking nerve signals in the muscles where it is injected, leading to temporary muscle paralysis and a reduction in the appearance of wrinkles.</p>
        <p><strong>Onset of Action:</strong> The effects of Botox usually become noticeable within 3 to 7 days after injection, reaching their peak around 2 weeks.</p>
        <p><strong>Duration of Effects:</strong> The effects of Botox typically last around 3 to 4 months.</p>
        <p>While these products share the same general mechanism of action and purpose, some patients may find that they respond differently to each neurotoxin, leading to variations in personal preferences. Factors such as the onset of action, duration of effects, and potential differences in diffusion patterns may influence the choice of one product over another. It's essential for individuals considering these treatments to consult with Dr. Harris to determine the most suitable option based on their specific needs and preferences.</p>
      `,
    },
    { id: 2, name: 'Dermal Fillers', description: 'Plump and lift the skin.', details: 'Detailed info about Dermal Fillers...' },
    { id: 3, name: 'Lasers', description: 'Lasers.', details: 'Detailed info about Lasers...' },
    { id: 4, name: 'Chemical Peels', description: 'Chemical Peels.', details: 'Detailed info about Chemical Peels...'}
  ],
  surgical: [
    { id: 1, name: 'Mole Removal', description: 'Remove unwanted moles.', details: 'Detailed info about Mle Removal...' },
    { id: 2, name: 'Skin Biopsy', description: 'Diagnose skin conditions.', details: 'Detailed info about Skin Biopsy...' },
    { id: 3, name: 'Skin Cancer Removal', description: 'Remove skin cancer.', details: 'Detailed info about Skin Cancer Removal...' },
    { id: 4, name: 'Mohs Surgery', description: 'Mohs Surgery.', details: 'Detailed info about Mohs Surgery...' },
    { id: 5, name: 'Scar Revision', description: 'Scar Revision.', details: 'Detailed info about Scar Revision...' },

  ],
};

const ServiceDetailPage = () => {
  const { categoryId, serviceId } = useParams();
  const categoryServices = servicesData[categoryId] || [];
  const service = categoryServices.find(s => s.id.toString() === serviceId);

if (!service) {
    return <div className="p-6 text-center text-red-500">Service not found</div>;
}

return (
    <div className="service-detail-page prose prose-fuchsia max-w-prose font-poppins p-6 bg-white rounded-lg shadow-md mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <div className="text-gray-800 space-y-4" dangerouslySetInnerHTML={{ __html: service.details }}></div>
    </div>
);
};

export default ServiceDetailPage;
