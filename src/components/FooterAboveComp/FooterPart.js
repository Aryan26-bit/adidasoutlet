import React from "react";
import "./FooterPart.scss";

import { FaSquareInstagram } from "react-icons/fa6";

const FooterPart = () => {
  return (
    <>
      <div className="footerpart-desktop">
        <div className="footerpart-list">
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>PRODUCTS</span>
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Gym/Training</li>
            <li>Outlet-Sale</li>
            <li>New Arrivals</li>
            <li>Special Offer</li>
            <li>Flat 50% Off!</li>
          </ul>
        </div>

        <div className="footerpart-list">
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>SPORTS</span>
            <li>CRICKET</li>
            <li>Running</li>
            <li>Football</li>
            <li>Gym/Training</li>
            <li>Tennis</li>
            <li>Outdoor</li>
            <li>Basketball</li>
            <li>Swimming</li>
            <li>Skateboarding</li>
          </ul>
        </div>

        <div className="footerpart-list">
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>
              COLLECTIONS
            </span>
            <li>Ultraboost</li>
            <li>Superstar</li>
            <li>NMD</li>
            <li>Stan Smith</li>
            <li>Sustainbility</li>
            <li>predator</li>
            <li>Parley</li>
            <li>Adicolor</li>
          </ul>
        </div>

        <div className="footerpart-list">
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>SUPPORT</span>
            <li>Help</li>
            <li>Customer Services</li>
            <li>Returns & Exchanges</li>
            <li>Shipping</li>
            <li>Order Tracker</li>
            <li>Store Finder</li>
            <li>adiClub</li>
            <li>adiclub Terms and conditions</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>
              COMPANY INFO
            </span>
            <li>CRICKET</li>
            <li>Running</li>
            <li>Football</li>
            <li>Gym/Training</li>
            <li>Tennis</li>
            <li>Outdoor</li>
            <li>Basketball</li>
            <li>Swimming</li>
            <li>Skateboarding</li>
          </ul>
        </div>

        <div className="footerpart-list">
          <ul type="none" className="footerpart-list-items">
            <span style={{ fontWeight: "800", fontSize: "2vh" }}>
              FOLLOW US
            </span>
            <li>
              <FaSquareInstagram style={{ fontSize: "4vh" }} />
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-view-footer-part">
        <div className="mobile-view-first-section">
          <ul type="none" className="footer-part-mobile-view-list">
            <li>Delivery</li>
            <li>Store Finder</li>
            <li>Returns and Refunds</li>
            <li>adiclub</li>
          </ul>
        </div>

        <div className="mobile-view-second-section">
          <ul type="none" className="footer-part-mobile-view-list">
            <li>Order Tracker</li>
            <li>adiClub Terms and conditions</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterPart;
