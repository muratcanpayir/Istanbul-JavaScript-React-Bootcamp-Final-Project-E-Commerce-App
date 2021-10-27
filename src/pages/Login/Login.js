import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postLogin } from "../../redux/actions/loginAction";
import "../Signup/Signup.scss";

function Signup() {
  const [email, setEmail] = useState("muratcanpayir@gmail.com");
  const [password, setPassword] = useState("123465798");
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  console.log(token.data)
  const access=()=>{
    dispatch(postLogin(email,password))
  }
  useEffect(()=>{
    localStorage.setItem("access_token",token.data)
  },[access])
  return (
    <div className="signup-container">
      <div className="form-container">
        <form>
          <p className="signup-title">Login</p>
          <p className="signup-go-login">
            Login to our website to use this form. If you don't have an account{" "}
            <span
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign Up Here!
            </span>
          </p>
          <input
            className="input-light"
            placeholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-light"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={access} className="button-light" id="signup-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
