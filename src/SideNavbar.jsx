// src/components/Sidebar.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const servicesData = {
  general: [
    { id: 1, name: "Psoriasis", description: "Psoriasis" },
    { id: 2, name: "Atropic Dermatitis", description: "Atropic Dermatitis." },
    { id: 3, name: "Bullous Diseases", description: "Various blood tests." },
    { id: 4, name: "Lichen Planus", description: "Lichen Planus." },
    { id: 5, name: "Vitiligo", description: "Vitiligo." },
    { id: 6, name: "Acne", description: "Acne." },
    { id: 7, name: "Rosacea", description: "Rosacea." },
    {
      id: 8,
      name: "Skin Cancer Screening",
      description: "Skin Cancer Screening.",
    },
    { id: 9, name: "Rash", description: "Rash." },
    { id: 10, name: "Growths", description: "Growths." },
    { id: 11, name: "Skin discoloration", description: "Skin discoloration." },
    { id: 12, name: "Excessive sweating", description: "Excessive sweating." },
  ],
  cosmetic: [
    {
      id: 1,
      name: "Botox (onabotulinumtoxinA)",
      description:
        "Reduces the appearance of wrinkles by temporarily paralyzing muscles.",
    },
    { id: 2, name: "Dermal Fillers", description: "Plump and lift the skin." },
    {id: 3, name: "Lasers", description: "Lasers."}
  ],
  surgical: [
    { id: 2, name: "Skin Biopsy", description: "Diagnose skin conditions." },
    { id: 3, name: "Skin Cancer Removal", description: "Skin Cancer Removal." },
    { id: 4, name: "Mohs Surgery", description: "Mohs Surgery." },
    { id: 5, name: "Scar Revision", description: "Scar Revision." },
    { id: 6, name: "Mole Removal", description: "Mole Removal." },
  ],
};

const categories = [
  { id: 'general', name: 'General Dermatology' },
  { id: 'cosmetic', name: 'Cosmetic Dermatology' },
  { id: 'surgical', name: 'Surgical Dermatology' },
];

const Sidebar = () => {
  const { categoryId } = useParams();

  return (
    <div className="w-1/2 flex-1 p-2 bg-gray-200 rounded-lg shadow-md">
      {/* <h2 className="text-lg text-center font-bold mb-4">Services</h2> */}
      <ul className="space-y-4">
        {categories.map(category => (
          <li key={category.id}>
            <h3 className="font-captain text-md text-[#4d4d4d] font-semibold mb-2">{category.name}</h3>
            <ul className="space-y-1 pl-2">
              {servicesData[category.id].map(service => (
                <li key={service.id}>
                  <Link
                    to={`/services/${category.id}/${service.id}`}
                    className="block font-poppins font-medium px-2 py-1 text-[#4d4d4d] transition-all duration-200 hover:bg-[#30648B] hover:text-white rounded"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
