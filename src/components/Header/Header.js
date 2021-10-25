import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <p className="header-title">E-Ticaret Sitesi</p>
        <div className="menu">
          <Link to="/tshirts">T-Shirt</Link>
          <Link to="/hats">Hat</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
