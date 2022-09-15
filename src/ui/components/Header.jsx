import React from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import logo from "../../assets/images/logo.svg";
import Link from "gatsby-link";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo" alt="Bonsai" src={logo} />
      </Link>
      <nav className="main-nav">
        <a href="#" className="nav-item">
          {t("services:name")}
        </a>
        <a href="#" className="nav-item">
          {t("about:name")}
        </a>
        <a href="#" className="nav-item">
          {t("contact:name")}
        </a>
        <LangSelector />
      </nav>
    </header>
  );
};

export default Header;
