import { useNavigate, Link } from 'react-router-dom';
import React, { Component } from "react";
import "../Styles/SignUpPageStyles.css";

export default function SignUp () { 
    const navigate = useNavigate();
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/signin");
          }}>x</span>
          <div className="PopUp">

            <h1>Get started with an account!</h1>
            <input className='NameInput'
              placeholder="Name" />
            <input className='EmailInput'
              placeholder="Email Address" />
            <input className='PasswordInput' type={"password"}
              placeholder="Password" />

            <div className="Btn">
              <button className='Submitbtn'
              onClick={(e) => {
                e.stopPropagation();
                navigate("/signin");
              }}>Sign Up</button>
            </div>

          </div>
        </div>
      </div>
    );
}