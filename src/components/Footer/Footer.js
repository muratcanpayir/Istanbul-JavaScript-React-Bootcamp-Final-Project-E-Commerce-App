import React from "react";
import useTheme from "../../hooks/useTheme";
import "./Footer.scss";

function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <footer
        className={`footer ${
          theme === "light" ? "footer-light" : "footer-dark"
        }`}
      >
        <div className="footer-upside">
          <div className="footer-menu">
            <ul>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contact Us</p>
            <p>info@bootcamphomework.com</p>
            <p>Istanbul, Turkey</p>
          </div>
        </div>
      </footer>
      <footer className="footer-downside">Created by Muratcan Payir</footer>
    </>
  );
}

export default Footer;
