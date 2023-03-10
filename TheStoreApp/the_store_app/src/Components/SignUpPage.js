import React, { Component } from "react";
import "../Styles/SignUpPageStyles.css";

export default class SignUp extends Component {
  handleClick = () => {
    this.props.toggle();
  }; render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>x</span>
          <div className="PopUp">

            <h1>Get started with an account!</h1>
            <input className='NameInput'
              placeholder="Name" />
            <input className='EmailInput'
              placeholder="Email Address" />
            <input className='PasswordInput' type={"password"}
              placeholder="Password" />

            <div className="Btn">
              <button className='Submitbtn'>Sign Up</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}