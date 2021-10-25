import React from "react";
import { useHistory } from "react-router";
import "../Signup/Signup.scss";

function Signup() {
  const history=useHistory();
  return (
    <div className="signup-container">
      <div className="form-container">
        <form>
          <p className="signup-title">Login</p>
          <p className="signup-go-login">Login to our website to use this form. If you don't have an account <span onClick={()=>{
            history.push("/signup");
          }}>Sign Up Here!</span></p>
          <input className="input-light" placeholder="E-Mail"/>
          <input className="input-light" placeholder="Password" />
          <button className="button-light" id="signup-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
