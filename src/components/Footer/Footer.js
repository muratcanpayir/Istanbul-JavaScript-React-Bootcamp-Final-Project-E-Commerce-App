import React from "react";
import useTheme from "../../hooks/useTheme";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { theme } = useTheme();
  const { t: translate } = useTranslation();
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
              <li>{translate("footer.faq")}</li>
              <li>{translate("footer.privacy")}</li>
              <li>{translate("footer.terms")}</li>
              <li>{translate("footer.return")}</li>
            </ul>
          </div>
          <div className="footer-contact">
            <p className="contact-title">{translate("footer.contact")}</p>
            <p>info@reactbootcamp.com</p>
            <p>Istanbul, Turkey</p>
          </div>
        </div>
      </footer>
      <footer
        className={`footer-downside ${
          theme === "light" ? "footer-downside-light" : "footer-downside-dark"
        }`}
      >
        Created by Muratcan Payir&nbsp;
        <a
          href="https://www.linkedin.com/in/muratcanpayir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedin size={"18px"} />
        </a>
        &nbsp;
        <a
          href="https://github.com/muratcanpayir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={"18px"} />
        </a>
      </footer>
    </>
  );
}

export default Footer;
