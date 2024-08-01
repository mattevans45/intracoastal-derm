
import Link from "next/link";

const Breadcrumb = ({ categories }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ul className="flex space-x-2 text-sm text-gray-600">
        {categories.map((category, index) => (
          <li key={category.id} className="flex items-center">
            <Link href={`/services/${category.id}`}>
              <a className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {category.name}
              </a>
            </Link>
            {index < categories.length - 1 && (
              <span aria-hidden="true" className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
