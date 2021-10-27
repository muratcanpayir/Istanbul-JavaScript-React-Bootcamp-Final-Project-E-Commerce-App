import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/actions/loginAction";
import { useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import useTheme from "../../hooks/useTheme";

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = useSelector((state) => state.login);
  const theme = localStorage.getItem("theme");
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
      localStorage.setItem("email", email);
      window.location.href = "/";
    }
  }, [token]);
  return (
    <div
      className={`signup-container ${
        theme === "light" ? "signup-container-light" : "signup-container-dark"
      }`}
    >
      <div
        className={`form-container ${
          theme === "light" ? "form-container-light" : "form-container-dark"
        }`}
      >
        <form onSubmit={handleSubmit(access)}>
          <p
            className={`signup-title ${
              theme === "light" ? "signup-title-light" : "signup-title-dark"
            }`}
          >
            Sign Up
          </p>
          <p
            className={`signup-go-login ${
              theme === "light"
                ? "signup-go-login-light"
                : "signup-go-login-dark"
            }`}
          >
            Create a free account to buy amazing product. Already have an
            account?{" "}
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              Login Here!
            </span>
          </p>
          <input
            className={`input-light ${
              theme === "light" ? "input-light-light" : "input-light-dark"
            }`}
            placeholder="E-Mail"
            id={errors.email && "login-password-error"}
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={`input-light ${
              theme === "light" ? "input-light-light" : "input-light-dark"
            }`}
            placeholder="Password"
            id={errors.password && "login-password-error"}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-light" id="signup-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
