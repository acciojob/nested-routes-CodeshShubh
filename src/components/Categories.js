import React from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  const categories = ["Gromming", "Shirt", "Trouser", "jewellery"];
  return (
    <div>
      <ul>
        {categories.map((items, index) => (
          <Link key={index} to={`${items}`}>
            {items}
          </Link>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
};

export default Categories;
