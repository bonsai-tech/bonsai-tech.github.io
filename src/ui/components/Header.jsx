import React from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import logo from "../../assets/images/logo.svg";
import Link from "gatsby-link";
import { HashLink } from "react-router-hash-link";
import { MemoryRouter } from "react-router-dom";

const Header = () => {
  const t = useTranslations();

  return (
    <MemoryRouter>
      <header className="header">
        <div className="wrapper">
          <Link to="/" className="logo">
            <img className="logo" alt="Bonsai" src={logo} />
          </Link>
          <nav className="main-nav">
            <HashLink to="#services" className="nav-item">
              {t("services:name")}
            </HashLink>
            <HashLink to="#about" className="nav-item">
              {t("about:name")}
            </HashLink>
            <HashLink to="#contact" className="nav-item">
              {t("contact:name")}
            </HashLink>
            <LangSelector />
          </nav>
        </div>
      </header>
    </MemoryRouter>
  );
};

export default Header;
