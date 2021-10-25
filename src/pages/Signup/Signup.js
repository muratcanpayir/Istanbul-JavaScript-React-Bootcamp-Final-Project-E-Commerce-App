import React from "react";
import "./Signup.scss";

function Signup() {
  return (
    <div className="signup-container">
      <div className="form-container">
        <form>
          <p>Sign Up</p>
          <input placeholder="Example@example.com"/>
          <input placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
