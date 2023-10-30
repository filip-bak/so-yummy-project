import React from "react";
import { Link } from "react-router-dom";

const CategoriesList = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.map(val => (
          <Link key={val._id} to={`/categories/${val.title}`}>
            {val.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
