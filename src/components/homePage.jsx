import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";






const HomePage= () => {
const navigate=useNavigate();


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Home Page</h2>
            <div  className="button-group">
          <button className="homepage-login-button" onClick={()=>navigate("/login")}>Login Page</button>
          <button className="homepage-signup-button" onClick={()=>navigate("/signup")}>SignUp page</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;