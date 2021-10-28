import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.scss";
import useCart from "../../hooks/useCart";
import useTheme from "../../hooks/useTheme";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { getCart } from "../../redux/actions/cartAction";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";

function Header() {
  const addToCart = useSelector((state) => state.addToCart);
  const [email, setEmail] = useState("");
  const { totalPrice, setTotalPrice } = useCart();
  const { theme, setTheme } = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    dispatch(getCart());
  }, [addToCart]);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (cart.status === REQUEST_STATUS.SUCCESS) {
      setTotalPrice(0);
      cart.data.map((item) => {
        setTotalPrice((prev) => prev + Number(item.price));
      });
    }
  }, [cart]);
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    window.location.href = "/";
  };
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const goToLogin=()=>{
    window.location.href="/login";
  }
  return (
    <header
      className={`header ${theme === "light" ? "header-light" : "header-dark"}`}
    >
      {
        localStorage.getItem("access_token") ?
        <div className={`user ${theme === "light" ? "user-light" : "user-dark"}`}>
        <button className="dropbtn">
          <AiOutlineUser size={"20px"} />
          <div className="dropdown-content">
            <p>{email}</p>
            <div className="dropdown-button-wrapper">
              <button className="theme-button" onClick={changeTheme}>
                <BsMoon size={"20px"} style={{ color: "white" }} />
              </button>
              <button className="logout-button" onClick={logout}>
                <IoIosLogOut size={"28px"} style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </button>
      </div>
      :
      <div className="header-login-button">
        <button onClick={goToLogin}>
          Login
        </button>
      </div>
      }
      
      <nav className="nav">
        <p
          onClick={() => {
            history.push("/");
          }}
          className={`header-title ${
            theme === "light" ? "header-title-light" : "header-title-dark"
          }`}
        >
          E-Ticaret Sitesi
        </p>
        <div className={theme === "light" ? "menu" : "menu-dark"}>
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/hats">Hat</Link>
          {
            localStorage.getItem("access_token") &&
            <Link to="/cart"><BsCart4 size={"18px"} /> {totalPrice.toFixed(2)} $</Link>
          }
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
