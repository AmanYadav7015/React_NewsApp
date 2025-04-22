import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <h2>SignUp Page</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div"></div>
              </div>
              <div className="login-center-buttons">
                <button
                  type="button"
                  onClick={() => {
                    
                    console.log(email);
                    console.log(password);
                    createUserWithEmailAndPassword(auth, email, password)
                      .then((userCredential) => {
                        // Signed up
                        navigate("/login");
                        const user = userCredential.user;
                        // ...
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorMessage);
                        // ..
                      });
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
