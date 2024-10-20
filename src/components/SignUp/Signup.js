import React from "react";
import "./Signup.scss";

const Signup = () => {
  return (
    <>
      <div className="top-header">
        <span className="headname-login">LOGIN</span>

        <span className="headname-yourbag">YOUR BAG(0)</span>
      </div>

      <div className="signup-container">
        <span className="join-adidas-text">JOIN ADIDAS AND GET 15% OFF</span>
        <span>
          <input
            type="button"
            value="SIGN UP FOR FREE →"
            className="btn-sign-up"
          />
        </span>
      </div>
    </>
  );
};

export default Signup;
