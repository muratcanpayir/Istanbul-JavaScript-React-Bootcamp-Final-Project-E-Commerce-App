import React from "react";
import "../Signup/Signup.scss";

function Signup() {
  return (
    <div className="signup-container">
      <div className="form-container">
        <form>
          <p>Login</p>
          <input placeholder="Example@example.com"/>
          <input placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
