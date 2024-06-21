import servicesData from './servicesData.json';

export const getServicesByCategory = (category) => {
  return servicesData[category] || [];
};

export const getAllCategories = () => {
  return Object.keys(servicesData).map(key => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1) + " Dermatology"
  }));
};
