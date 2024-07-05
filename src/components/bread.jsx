import React from "react";

const Breadcrumb = ({ categories }) => {
  // Example implementation accessing categories
  return (
    <nav className="breadcrumb">
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href={`/services/${category.id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
