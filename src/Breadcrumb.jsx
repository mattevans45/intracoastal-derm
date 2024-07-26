import React, { useMemo } from "react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
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

const Breadcrumb = React.memo(() => {
  const { category: categoryId, serviceName } = useParams();
  const { category, service } = useServiceData(categoryId, serviceName);

  return (
    <nav aria-label="Breadcrumb" className="text-sm lg:hidden">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" prefetch={false} className="text-blue-500 underline">
            Home
          </Link>
        </li>
        {category && (
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link
              href={`/services/${category.id}`}
              prefetch={false}
              className="text-blue-500/85 underline"
            >
              {category.name}
            </Link>
          </li>
        )}
        {service && (
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="underline" aria-current="page">{service.name}</span>
          </li>
        )}
      </ol>
    </nav>
  );
});



export default Breadcrumb;