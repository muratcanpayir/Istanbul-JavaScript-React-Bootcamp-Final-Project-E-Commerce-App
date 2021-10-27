import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import {postLogin} from "../../redux/actions/loginAction";
import { useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";

function Signup() {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token=useSelector(state=>state.login);
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
      localStorage.setItem("email",email)
      window.location.href="/";
    }
  }, [token]);
  return (
    <div className="signup-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(access)}>
          <p className="signup-title">Sign Up</p>
          <p className="signup-go-login">
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
            className="input-light"
            placeholder="E-Mail"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-light"
            placeholder="Password"
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
