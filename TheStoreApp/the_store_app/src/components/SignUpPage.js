import { Component } from "react";
import "./SignUpPageStyles.css";

class SignUpPage extends Component {
  state = { clocked: false };
  render() {
    return (
        <div className="SignUp">
            

            <h1>Kitchen Ordering System</h1>
            <input className='EmailInput'
            placeholder="Email Address"/>
            <input className='PasswordInput'
            placeholder="Password"/>

            <div className="BtnGroup">
                <button className='LogInBtn'>Log In</button>
                <button className='SignUpBtn'>Sign Up</button>
            </div>

        </div>
    );
  }
}

export default SignUpPage;