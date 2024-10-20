import React from "react";
import "./SaleSection.scss";

const SaleSection = () => {
  const categories = [
    { title: "Men", imageUrl: "kidone.png" },
    { title: "Women", imageUrl: "kidtwo.png" },
    { title: "Kids", imageUrl: "kidthree.png" },
    { title: "Summer Wear", imageUrl: "kidfour.png" },
    {
      title: "Flat 50% off + Extra 20% off on orders above INR 4999",
      imageUrl: "sale.png",
    },
  ];

  return (
    <div className="sale-container">
      <div className="sale-content-container">
        <div className="breadcrumb">
          <a href="https://www.adidas.co.in/special_offer" className="back-link">
            Back
          </a>
          <span className="breadcrumb-text">Home / Outlet</span>
        </div>
        <div className="title-section">
          <h1 className="salesection-heading">
            SHOES, CLOTHING & ACCESSORIES SALE: UP TO 60% OFF
          </h1>
        </div>

        <div className="main-cards">
          {categories.map((category, index) => (
            <div key={index} className="card">
              <img src={category.imageUrl} alt={category.title} />
              <a href="https://www.adidas.co.in/special_offer" className="category-title">
                {category.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="blue-container"></div>
    </div>
  );
};

export default SaleSection;
