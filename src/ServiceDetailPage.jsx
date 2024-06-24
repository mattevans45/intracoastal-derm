import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import cream from "./assets/kelsey-curtis-kD9qprR6HBI-unsplash.jpg";

const servicesData = {
  general: [
    { id: 1, name: "Psoriasis",
      description: "Psoriasis is a chronic autoimmune skin disorder characterized by the rapid overproduction of skin cells, leading to the formation of thick, red, and scaly patches.",
      details: `<p><strong>Overview:</strong> Psoriasis is a chronic autoimmune skin disorder characterized by the rapid overproduction of skin cells, leading to the formation of thick, red, and scaly patches. This condition occurs when the immune system mistakenly targets healthy skin cells, causing an inflammatory response that accelerates the skin cell turnover process. Normally, skin cells mature and shed in about a month, but in psoriasis, this process takes just a few days, resulting in the accumulation of excess skin cells on the surface.</p>
      
      <p><strong>Cause:</strong> The exact cause of psoriasis is not fully understood, but genetic and environmental factors are believed to play a role. Triggers such as infections, stress, certain medications, and injuries can exacerbate psoriasis symptoms.</p>
      
      <p><strong>Types:</strong> Psoriasis has several types, with plaque psoriasis being the most common. Plaque psoriasis presents as raised, inflamed patches covered with silvery-white scales. Other forms include guttate, inverse, pustular, and erythrodermic psoriasis, each with its own distinctive features.</p>
      <p><strong>Treatment Approaches:</strong> Treatment for psoriasis aims to alleviate symptoms, reduce inflammation, and slow down excessive skin cell growth. The choice of treatment depends on the severity, type of psoriasis, and individual factors.</p>
      <ul>
        <li><strong>Topical Treatments:</strong> Include corticosteroids, topical retinoids, calcineurin inhibitors, phosphodiesterase inhibitor, and aryl hydrocarbon receptor agonist.</li>
        <li><strong>Phototherapy (Light Therapy):</strong> Exposure to ultraviolet (UV) light can slow down skin cell turnover.</li>
        <li><strong>Systemic Medications:</strong> Oral or injected medications such as methotrexate, cyclosporine, and acitretin.</li>
        <li><strong>Biologics:</strong> Target specific parts of the immune system involved in psoriasis development, administered through injections or infusions.</li>
        <li><strong>Lifestyle and Home Remedies:</strong> Include moisturizing, stress management, and avoiding triggers.</li>
      </ul>
      
      <p><strong>Management:</strong> It's crucial for individuals with psoriasis to work closely with healthcare providers to develop a personalized treatment plan. Regular follow-ups and adjustments may be necessary to effectively manage the condition and improve quality of life.</p>`,
      photoUrl: cream },
    { id: 2,   name: "Atopic Dermatitis (Eczema)",
      description: "Atopic dermatitis, commonly known as eczema, is a chronic inflammatory skin condition characterized by red, itchy, and inflamed skin. It often appears in patches on the face, hands, feet, and other parts of the body. Atopic dermatitis is considered a type of eczema that is closely linked to allergic conditions such as asthma and hay fever.",
      details: `<p><strong>Overview:</strong> Atopic dermatitis, commonly known as eczema, is a chronic inflammatory skin condition characterized by red, itchy, and inflamed skin. It often appears in patches on the face, hands, feet, and other parts of the body. Atopic dermatitis is considered a type of eczema that is closely linked to allergic conditions such as asthma and hay fever. While it can affect individuals of any age, it is particularly prevalent in children, with symptoms often improving as they grow older.</p>
      
      <p><strong>Cause:</strong> The exact cause of atopic dermatitis is not fully understood, but it is believed to involve a combination of genetic, environmental, and immune system factors. People with a family history of atopic dermatitis or other allergic conditions may be more susceptible.</p>
      
      <p><strong>Treatment Approaches:</strong> Treatment for atopic dermatitis aims to relieve symptoms, reduce inflammation, and prevent flare-ups. Here are some common approaches:</p>
      
      <ul>
        <li><strong>Topical Corticosteroids:</strong> Anti-inflammatory creams or ointments that help reduce redness and itching. They come in varying strengths and are applied directly to the affected skin. Long-term use may have side effects, so it's important to use them as prescribed.</li>
        <li><strong>Topical Calcineurin Inhibitors:</strong> Non-steroidal creams or ointments that reduce inflammation and can be used in sensitive areas like the face and neck, often recommended when corticosteroids are not suitable.</li>
        <li><strong>Emollients/Moisturizers:</strong> Regular use helps keep the skin hydrated, reducing dryness and itching. Emollients are essential in managing atopic dermatitis and are often used alongside other treatments.</li>
        <li><strong>Antihistamines:</strong> Oral medications that help control itching and improve sleep. Non-drowsy formulations are available for daytime use.</li>
        <li><strong>Phototherapy (Light Therapy):</strong> Controlled exposure to ultraviolet (UV) light under medical supervision can effectively treat moderate to severe cases.</li>
        <li><strong>Oral or Topical Antibiotics:</strong> Prescribed in cases of bacterial infection due to scratching and broken skin.</li>
        <li><strong>Immunosuppressants:</strong> Oral medications for severe cases to modulate the immune response and reduce inflammation, typically used when other treatments are ineffective.</li>
        <li><strong>Biologics:</strong> Target specific parts of the immune system involved in atopic dermatitis development, administered through injections or infusions.</li>
      </ul>
      
      <p><strong>Management:</strong> Atopic dermatitis varies from person to person. Dr. Harris can tailor a treatment plan based on symptom severity and individual factors. Lifestyle adjustments, such as identifying triggers, maintaining skincare routines, and managing stress, are essential. Regular follow-ups are crucial for monitoring progress and adjusting the treatment plan as needed.</p>`, photoUrl: cream },
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
      <div className="md:col-span-2 sm:col-span-1 flex flex-col justify-center items-center service-detail-page text-pretty prose-base font-poppins bg-white rounded-lg shadow-md p-4">
        <Breadcrumb categories={categories} />
        <img src={service.photoUrl} alt={service.name} className="inline-flex w-40 rounded-lg shadow-md mb-4" />
        <h2 className="text-3xl mt-5 mb-2 font-bold">{service.name}</h2>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <div className="text-gray-800 space-y-4" dangerouslySetInnerHTML={{ __html: service.details }}></div>
      </div>
      <div>
       
        <button onClick={() => navigate(-1)} className="text-md inline-flex items-center rounded-xl bg-[#30548B] p-2 leading-6 text-white duration-500 ease-in-out hover:bg-[#30548B]/90 hover:text-white hover:shadow-lg hover:transition-all">
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
