import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/actions/loginAction";
import { postAuth, resetAuth } from "../../redux/actions/authAction";
import { getAuth, resetGetAuth } from "../../redux/actions/getAuthAction";
import { useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { useTranslation, withTranslation } from "react-i18next";

function Signup({ i18n }) {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = useSelector((state) => state.login);
  const theme = localStorage.getItem("theme");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const trLang = () => {
    handleChangeLanguage("tr");
  };
  const enLang = () => {
    handleChangeLanguage("en");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    dispatch(getAuth());
  }, []);
  const auth = useSelector((state) => state.auth);
 const users=useSelector(state=>state.getAuth);
 
  const access = () => {

    users.data.map((user)=>{
      if(email===user.email){
        console.log("bu email var");
      }
      else{
        dispatch(postLogin(email, password));
        dispatch(postAuth(email, password));
      }
    })
  };
  useEffect(() => {
    if (token.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("access_token", token.data);
      localStorage.setItem("email", email);
    }
  }, [token]);
  useEffect(() => {
    if (auth.status === REQUEST_STATUS.SUCCESS) {
      dispatch(resetAuth());
      window.location.href = "/";
    }
  }, [auth]);
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
            {translate("signup.signup-title")}
          </p>
          <p
            className={`signup-go-login ${
              theme === "light"
                ? "signup-go-login-light"
                : "signup-go-login-dark"
            }`}
          >
            {translate("signup.signup-desc")}{" "}
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              {translate("signup.signup-desc-link")}
            </span>
          </p>
          <input
            className={`input-light ${
              theme === "light" ? "input-light-light" : "input-light-dark"
            }`}
            placeholder={translate("signup.signup-email-input-placeholder")}
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
            placeholder={translate("signup.signup-password-input-placeholder")}
            id={errors.password && "login-password-error"}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-light" id="signup-button">
            {translate("signup.signup-button")}
          </button>
        </form>
        <div className="signup-lang-buttons">
          <button
            onClick={trLang}
            className={`signup-lang-buttons-tr ${
              theme === "light"
                ? "signup-lang-buttons-tr-light"
                : "signup-lang-buttons-tr-dark"
            }`}
          >
            tr
          </button>
          <button
            onClick={enLang}
            className={`signup-lang-buttons-en ${
              theme === "light"
                ? "signup-lang-buttons-en-light"
                : "signup-lang-buttons-en-dark"
            }`}
          >
            en
          </button>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Signup);
