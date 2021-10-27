import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.scss";
import useCart from "../../hooks/useCart";

function Header() {
  const { totalPrice } = useCart();
  const history = useHistory();
  return (
    <header>
      <nav>
        <p
          onClick={() => {
            history.push("/");
          }}
          className="header-title"
        >
          E-Ticaret Sitesi
        </p>
        <div className="menu">
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/hats">Hat</Link>
          <Link to="/cart">Cart: {totalPrice} $</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
