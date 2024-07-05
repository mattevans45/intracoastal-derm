import React from "react";
import { Link, useParams } from "react-router-dom";

const Breadcrumb = ({ categories }) => {
  const { categoryId, serviceId } = useParams();


  const currentCategory = categories.find(category => category.id === categoryId);

  const currentService = currentCategory?.services.find(service => service.id.toString() === serviceId);

  return (
    <nav className="lg:hidden text-sm">
      <Link to="/" className="text-blue-500">Home</Link>
      {currentCategory && (
        <>
          <span className="mx-2">/</span>
          <Link to={`/services/${currentCategory.id}`} className="text-blue-500">{currentCategory.name}</Link>
        </>
      )}
      {currentService && (
        <>
          <span className="mx-2">/</span>
          <span>{currentService.name}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;

