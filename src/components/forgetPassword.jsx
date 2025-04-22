import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {sendPasswordResetEmail  } from "firebase/auth";
import { auth } from "../firebase";



const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  

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
            <h2>ForgetPassword Page</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
             

              <div className="login-center-options">
                <div className="remember-div"></div>
              </div>
              <div className="login-center-buttons">
                <button
                  type="button"
                  onClick={() => {
                    sendPasswordResetEmail(auth,email)
                    .then(()=>{
                      alert("A Password Reset Link has been sent to your email");
                      navigate("/login")
      
                    })
                    .catch((error)=>{
                      console.log(error.code);
                      console.log(error.message);
                    })
                    
                  }}
                >
                  Get Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
