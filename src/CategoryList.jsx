
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list mb-6">
      {categories.map(category => (
        <Link
          key={category.id}
          to={`/services/${category.id}`}
          className="category-link inline-block mr-4 mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
