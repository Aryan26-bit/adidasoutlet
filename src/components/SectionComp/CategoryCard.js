import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="category-card">
      <img src={imageUrl} alt={title} />
      <a href="#">{title}</a>
    </div>
  );
};

export default CategoryCard;
