// serviceUtils.js
import servicesData from "./servicesData";

export const getAllCategories = () => {
  return [
    {
      id: "general",
      name: "General Dermatology",
      services: servicesData.general,
      photo: "amanda-dalbjorn-fvInY-Gh7sc-unsplash.webp"
    },
    {
      id: "cosmetic",
      name: "Cosmetic Dermatology",
      services: servicesData.cosmetic,
      photo: "angelo-pantazis-h0AnGGgseio-unsplash.webp"
    },
    {
      id: "surgical",
      name: "Surgical Dermatology",
      services: servicesData.surgical,
         photo: "ozkan-guner-6E-3v5NZxMw-unsplash.webp"
    },
  ];
};

export const getServicesByCategory = (categoryId) => {
  const category = getAllCategories().find((cat) => cat.id === categoryId);
  return category ? category.services : [];
};
