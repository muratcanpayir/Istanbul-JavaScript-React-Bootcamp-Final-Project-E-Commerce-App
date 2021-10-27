import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import REQUEST_STATUS from "../../helpers/constants";
import { postLogin } from "../../redux/actions/loginAction";
import {useForm} from "react-hook-form";
import "../Signup/Signup.scss";
import "./Login.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  console.log(token.data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const access = () => {
    dispatch(postLogin(email, password));
  };
  useEffect(() => {
    if (token.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("access_token", token.data);
      localStorage.setItem("email",email);
      window.location.href="/";
    }
  }, [token]);
  return (
    <div className="signup-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(access)}>
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
            id={errors.email && "login-email-error"}
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-light"
            placeholder="Password"
            type="password"
            id={errors.email && "login-password-error"}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-light" id="signup-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
