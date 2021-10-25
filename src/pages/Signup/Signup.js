import React from "react";
import { useHistory } from "react-router";
import "./Signup.scss";

function Signup() {
  const history=useHistory();
  return (
    <div className="signup-container">
      <div className="form-container">
        <form>
          <p className="signup-title">Sign Up</p>
          <p className="signup-go-login">Create a free account to buy amazing product. Already have an account? <span onClick={()=>{
            history.push("/login");
          }}>Login Here!</span></p>
          <input className="input-light" placeholder="E-Mail"/>
          <input className="input-light" placeholder="Password" />
          <button className="button-light" id="signup-button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
