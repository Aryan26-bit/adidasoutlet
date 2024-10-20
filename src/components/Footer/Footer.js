import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-inner-data">
        <span>Privacy Policy </span>
        <span>|</span>
        <span>Terms and Conditions </span>
        <span>|</span>
        <span>Cookies</span>
      </div>

      <div className="footer-inside-content">
        ©2024 adidas India Marketing Pvt. Ltd
      </div>
    </div>
  );
};

export default Footer;
