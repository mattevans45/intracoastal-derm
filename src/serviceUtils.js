// serviceUtils.js
import servicesData from "./servicesData";

export const getAllCategories = () => {
  return [
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
};

export const getServicesByCategory = (categoryId) => {
  const category = getAllCategories().find((cat) => cat.id === categoryId);
  return category ? category.services : [];
};
