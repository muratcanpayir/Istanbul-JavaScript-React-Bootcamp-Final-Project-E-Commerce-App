import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import REQUEST_STATUS from "../../helpers/constants";
import { postLogin } from "../../redux/actions/loginAction";
import { useForm } from "react-hook-form";
import "../Signup/Signup.scss";
import "./Login.scss";
import { useTranslation, withTranslation } from "react-i18next";
import { getAuth } from "../../redux/actions/getAuthAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup({ i18n }) {
  const { t: translate } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const theme = localStorage.getItem("theme");
  const [isLoginTrue, setIsLoginTrue] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);

  //get auth function works when component did mount.
  // it gets all the users email and passwords who signed up.
  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);
  const users = useSelector((state) => state.getAuth);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const trLang = () => {
    handleChangeLanguage("tr");
  };
  const enLang = () => {
    handleChangeLanguage("en");
  };

  //react hook form for validations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //when email or password change, it maps all the user mail and passwords for authorization
  //it checks for email or password matches on api
  useEffect(() => {
    setIsLoginTrue(false);
    users.data.map((user) => {
      if (user.email === email && user.password === password) {
        return setIsLoginTrue(true);
      }
    });
  }, [email, password,users.data]);
  const access = () => {
    if (isLoginTrue) {
      toast.success(translate("login.toastify-success"), {
        hideProgressBar: true,
        autoClose: 3000,
        theme: "colored",
      });
      setTimeout(() => {
        dispatch(postLogin(email, password));
        window.location.href = "/";
      }, 2000);
    } else {
      toast.error(translate("login.toastify-error"), {
        hideProgressBar: true,
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  //when you login succesfully it gives you access token. And then i write to localstorage
  useEffect(() => {
    if (token.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("access_token", token.data);
      localStorage.setItem("email", email);
      // window.location.href = "/";
    }
  }, [token,email]);
  return (
    // login form
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
            {translate("login.login-title")}
          </p>
          <p
            className={`signup-go-login ${
              theme === "light"
                ? "signup-go-login-light"
                : "signup-go-login-dark"
            }`}
          >
            {translate("login.login-desc")}{" "}
            <span
              onClick={() => {
                history.push("/signup");
              }}
            >
              {translate("login.login-desc-link")}
            </span>
          </p>
          {/* email input i checked for error and made form validations */}
          <input
            className={`input-light ${
              theme === "light" ? "input-light-light" : "input-light-dark"
            }`}
            placeholder={translate("login.login-email-input-placeholder")}
            id={errors.email && "login-email-error"}
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* password input */}
          <input
            className={`input-light ${
              theme === "light" ? "input-light-light" : "input-light-dark"
            }`}
            placeholder={translate("login.login-password-input-placeholder")}
            type="password"
            id={errors.password && "login-password-error"}
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-light" id="signup-button">
            {translate("login.login-button")}
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Signup);
