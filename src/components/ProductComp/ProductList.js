import React from "react";
import "./ProductList.scss"; 
import products from "./../../Data/products.json";


const ProductList = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image_url}
            alt={product.name}
            className="product-image"
          />

          <div className="product-info">
            <p className="product-price">
              ₹{product.price.toFixed(2)}{" "}
              <span className="original-price">₹{product.original_price}</span>{" "}
              <span className="discount">({product.discount} OFF)</span>
            </p>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>

            <p className="product-colors">{product.colors} colours</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
