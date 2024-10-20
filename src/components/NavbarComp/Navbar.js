import React, { useState, useEffect, useRef } from "react";
import { GoHeart } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.scss";
import Navlinkcontent from "./Navlinkcontent";
import WomenContent from "./WomenContent";
import MenContent from "./MenContent";

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);

  const [showSignupText, setShowSignupText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSignupText((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHoveredCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-signup-container">
        <div
          className={`signup-text ${showSignupText ? "fade-in" : "fade-out"}`}
        >
          {showSignupText
            ? "SIGN UP AND GET 15%"
            : "FREE DELIVERY, RETURN & EXCHANGE"}
        </div>
        <div>
          <MdKeyboardArrowDown className="arrow-down-icon" />
        </div>
      </div>

      <div className="navbar-inside-container">
        <div className="navbar-right-lists">
          <span>help</span>
          <span>orders and returns</span>
          <span>sign up</span>
          <span>Log in</span>
        </div>

        <div className="navbar-container-lists">
          <img
            src="\adidas_logo.png"
            alt="Logo"
            className="adidas_logo_desktop"
          />

          <div className="navbar-mobile-view-lists">
            <ul type="none" className="list-items">
              <li
                onMouseEnter={() => handleMouseEnter("MEN")}
                className="category-item"
                style={{ fontWeight: "bold" }}
              >
                MEN
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("WOMEN")}
                className="category-item"
                style={{ fontWeight: "bold" }}
              >
                WOMEN
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("KIDS")}
                className="category-item"
              >
                KIDS
              </li>
              <li className="category-item">SPORTS</li>
              <li className="category-item">LIFESTYLE</li>
              <li className="category-item" style={{ fontWeight: "bold" }}>
                OUTLET
              </li>
              <li className="category-item-festive">
                FESTIVAL SALE - EXTRA 15% OFF
              </li>
            </ul>
          </div>

          <div className="search-bar-container">
            <div style={{ display: "flex", flexDirection: "row", gap: "2vh" }}>
              <span>
                <input
                  type="text"
                  placeholder="Search"
                  className="input-type-search-box"
                />
              </span>
              <span>
                <FiUser />
              </span>
            </div>

            <span>
              <GoHeart />
            </span>
            <span>
              <BsBag />
            </span>
          </div>
        </div>
      </div>

      {hoveredCategory && (
        <div ref={dropdownRef} className="dropdown">
          <div className="dropdown-content">
            {hoveredCategory === "KIDS" && <Navlinkcontent />}
            {hoveredCategory === "MEN" && <MenContent />}
            {hoveredCategory === "WOMEN" && <WomenContent />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
