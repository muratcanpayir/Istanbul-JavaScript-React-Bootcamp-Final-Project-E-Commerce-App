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
  const changeTheme=()=>{
    if(theme==="light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }
  console.log(theme);
  return (
    <header className={theme==="light"?"header":"header-dark"}>
      <div className={theme==="light"?"user":"user-dark"}>
        {email}
        <button className="logout-button" onClick={logout}>
          <IoIosLogOut size={"24px"} />
        </button>
        <button className="theme-button" onClick={changeTheme}>Theme</button>
      </div>
      <nav className="nav">
        <p
          onClick={() => {
            history.push("/");
          }}
          className={theme==="light"?"header-title":"header-title-dark"}
        >
          E-Ticaret Sitesi
        </p>
        <div className={theme==="light"?"menu":"menu-dark"}>
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/hats">Hat</Link>
          <Link to="/cart">Cart: {totalPrice.toFixed(2)} $</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
