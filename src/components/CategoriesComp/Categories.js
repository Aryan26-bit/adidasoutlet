import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories-grid">
      <h1 className="our-clothing-heading">OUR CLOTHING AND SHOE CATEGORIES</h1>
      <div className="category-section-products">
        <div className="category-products-list">
          <ul type="none" className="products-list-items">
            <li>Shoes</li>
            <li>T Shirts</li>
            <li>Shirts</li>
            <li>Jackets</li>
            <li>Bags</li>
            <li>Sandals</li>
            <li>Caps</li>
            <li>Sneakers</li>
            <li>Shorts</li>
            <li>Hoodies</li>
            <li>Slides</li>
            <li>Flip Flops</li>
          </ul>
        </div>

        <div className="category-product-list-view">
          <ul
            type="none"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5vh",
              padding: "0vh",
            }}
          >
            <li>Originals</li>
            <li>Jerseys</li>
            <li>Sweatshirts</li>
            <li>Water Bottle</li>
            <li>Pants</li>
            <li>Tracksuits</li>
            <li>Socks</li>
            <li>Gloves</li>
            <li>Football Boots</li>
            <li>Polo Shirt</li>
            <li>Tights</li>
            <li>Hoodies</li>
          </ul>
        </div>

        <div className="category-product-list-view">
          <ul type="none" className="products-list-items">
            <li>Long Sleeves</li>
            <li>Short Sleeves</li>
            <li>Swimwear</li>
            <li>Ankle Socks</li>
            <li>Face Covers</li>
            <li>Men Shirts</li>
            <li>Women Dresses</li>
            <li>Men Caps</li>
            <li>Women Sandals</li>
            <li>Hoodies</li>
            <li>Men Slides</li>
            <li>Lifestyle Shirts</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
          }}
          className="mobile-view-list"
        >
          <ul type="none" className="products-list-items">
            <li>Training T Shirts</li>
            <li>Tennis Shirts</li>
            <li>Skate boarding Sneakers</li>
            <li>Lifestyle Sneakers</li>
            <li>Training Shirts</li>
            <li>Lifestyle Flip Flops</li>
            <li>White Shoes</li>
            <li>Sneakers</li>
            <li>Shorts</li>
            <li>Hoodies</li>
            <li>Slides</li>
            <li>Flip Flops</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
          }}
          className="mobile-view-list"
        >
          <ul type="none" className="products-list-items">
            <li>Black T Shirts</li>
            <li>Black Caps</li>
            <li>Black Hoodies</li>
            <li>Black Jackets</li>
            <li>Black Pants</li>
            <li>Blue Hoodies</li>
            <li>Black Sneakers</li>
            <li>Red Shoes</li>
            <li>Pink Shoes</li>
            <li>Black Bras</li>
            <li>Black Sweatshirts</li>
            <li>White Hoodies</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
          }}
          className="mobile-view-list"
        >
          <ul type="none" className="products-list-items">
            <li>White Jackets</li>
            <li>White Shirts</li>
            <li>Blue Sweatshirts</li>
            <li>Yellow T Shirts</li>
            <li>Black Sandals</li>
            <li>Shoes</li>
            <li>T Shirts</li>
            <li>Shirts</li>
            <li>Jackets</li>
            <li>Bags</li>
            <li>Sandlas</li>
            <li>Caps</li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
        <h2 className="adidas-cloth-sale-heading">
          adidas Clothes and Shoes on Sale
        </h2>
        <p className="category-paragraph">
          Shop online for adidas shoes and clothes on sale and save on
          everything you need to get in the game. Put in the miles or just keep
          up with the kiddos in cushioned running shoes. Takeover the field or
          court in adidas soccer, football and basketball shoes on sale. Rock
          the 3-Stripes in comfy track pants and jackets, sports bras and
          t-shirts. Whatever you and your family need, you'll find it on sale at
          adidas online.
        </p>
      </div>
    </div>
  );
};

export default Categories;
