import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate=useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

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
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password"  onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                </div>
                <a href="#" className="forgot-pass-link" onClick={()=>{navigate("/forgetPassword")}} >
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={()=>{
                  const auth=getAuth();
                  

                  signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                     
                      navigate("/news")
                      const user = userCredential.user;
                      // ...
                  })
                  .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      alert(errorMessage);
                  });
                }}>Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#" onClick={()=>navigate("/signup")}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;