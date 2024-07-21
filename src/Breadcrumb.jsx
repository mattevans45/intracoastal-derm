import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import servicesData from "./servicesData";
import slugify from "./slugify";

// Custom hook for fetching service data
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

const Breadcrumb = () => {
  const { category: categoryId, serviceName } = useParams();
  const { categories, category, service } = useServiceData(categoryId, serviceName);

  return (
    <nav className="text-sm lg:hidden">
      <Link to="/" className="text-blue-500 underline">
        Home
      </Link>
      {category && (
        <>
          <span className="mx-2">/</span>
          <Link
            to={`/services/${category.id}`}
            className="text-blue-500/85 underline"
          >
            {category.name}
          </Link>
        </>
      )}
      {service && (
        <>
          <span className="mx-2">/</span>
          <span className="underline">{service.name}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
