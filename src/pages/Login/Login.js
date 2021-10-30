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

function Signup({ i18n }) {
  const { t: translate } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const theme = localStorage.getItem("theme");
  const [isLoginTrue,setIsLoginTrue]=useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login);
  useEffect(()=>{
    dispatch(getAuth());
  },[])
  const users=useSelector(state=>state.getAuth);
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
  useEffect(()=>{
    users.data.map((user)=>{
      setIsLoginTrue(false);
      console.log("api email "+user.email);
      console.log(email)
      console.log("api password "+user.password);
      console.log(password);
      if(user.email===email && user.password===password){
        setIsLoginTrue(true);
      }
    })
  },[email,password])
  const access = () => {
    if(isLoginTrue){
      dispatch(postLogin(email, password));
      window.location.href="/";
    }
    else{
      alert("email veya sifre yanlis");
    }
    
  };
  useEffect(() => {
    if (token.status === REQUEST_STATUS.SUCCESS) {
      localStorage.setItem("access_token", token.data);
      localStorage.setItem("email", email);
      // window.location.href = "/";
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
          <button onClick={trLang} className={`signup-lang-buttons-tr ${theme==="light"?"signup-lang-buttons-tr-light":"signup-lang-buttons-tr-dark"}`}>tr</button>
          <button onClick={enLang} className={`signup-lang-buttons-en ${theme==="light"?"signup-lang-buttons-en-light":"signup-lang-buttons-en-dark"}`}>en</button>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Signup);
