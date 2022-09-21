import React from "react";
import useTranslations from "../../hooks/useTranslations";
import logo from "../../assets/images/logo.svg";
import Link from "gatsby-link";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Instagram } from "../../assets/icons/icon-instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/icon-linkedin.svg";
import { ReactComponent as Whastapp } from "../../assets/icons/icon-whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/icons/icon-telegram.svg";

const Footer = () => {
  const t = useTranslations();

  return (
    <header className="footer">
      <div className="footer-main">
        <div className="wrapper">
          <Link to="/" className="logo">
            <img className="logo" alt="Bonsai" src={logo} />
          </Link>
          <nav className="footer-nav">
            <HashLink to="#services" className="nav-item">
              {t("services:name")}
            </HashLink>
            <HashLink to="#about" className="nav-item">
              {t("about:name")}
            </HashLink>
          </nav>
          <div className="footer-social">
            <a className="link" href="#">
              hola@bonsaitech.com
            </a>
            <a
              href="#"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whastapp />
            </a>
            <a
              href="#"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-extra">
        <div className="wrapper">
          <div className="left-slot">
            <Link className="footer-caption" to="/privacy">
              {t("info:privacy")}
            </Link>
            <Link className="footer-caption" to="/cookies">
              {t("info:cookies")}
            </Link>
          </div>
          <div className="right-slot">
            <span className="footer-caption">
              bonsai 2022 © {t("info:all-rights-reserved")}
            </span>
            <span className="footer-caption">{t("info:based-madrid")}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
