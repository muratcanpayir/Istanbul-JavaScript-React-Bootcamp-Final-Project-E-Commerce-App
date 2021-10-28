import React from "react";
import useTheme from "../../hooks/useTheme";
import "./Footer.scss";
import { FaLinkedin,FaGithub } from "react-icons/fa";

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
            <p className="contact-title">Contact Us</p>
            <p>info@reactbootcamp.com</p>
            <p>Istanbul, Turkey</p>
          </div>
        </div>
      </footer>
      <footer className={`footer-downside ${theme==="light"?"footer-downside-light":"footer-downside-dark"}`}>
        Created by Muratcan Payir{" "}
        <a href="https://www.linkedin.com/in/muratcanpayir/" target="_blank">
          {" "}<FaLinkedin size={"18px"} />
        </a>
        <a href="https://github.com/muratcanpayir" target="_blank">
          <FaGithub size={"18px"} />
        </a>
      </footer>
    </>
  );
}

export default Footer;
