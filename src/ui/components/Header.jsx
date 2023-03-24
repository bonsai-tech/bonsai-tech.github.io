import React, { useState, useCallback, useLayoutEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import logo from "../../assets/images/logo.svg";
import Link from "../components/LinkLocalized";
import { HashLink } from "react-router-hash-link";
import cx from "classnames";
import ButtonHashLink from "./buttons/ButtonHashLink";

const Header = () => {
  const t = useTranslations();

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = useCallback(
    () => setisMenuOpen(!isMenuOpen),
    [isMenuOpen],
  );
  const closeMenu = useCallback(() => setisMenuOpen(false), [setisMenuOpen]);

  useLayoutEffect(() => {
    // Remove body scroll when menu is open
    // Get original body overflow
    // const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    if (isMenuOpen) {
      document.body.classList.add("disable-scroll-mobile");
    }
    // Re-enable scrolling when component unmounts
    return () => document.body.classList.remove("disable-scroll-mobile");
  }, [isMenuOpen]); // Empty array ensures effect is only run on mount and unmount

  return (
    <header className={cx("header", { "open-menu": isMenuOpen })}>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img className="logo" alt="Bonsai" src={logo} />
        </Link>
        <nav className="main-nav" onClick={closeMenu}>
          <HashLink to="#services" className="nav-item">
            {t("services:name")}
          </HashLink>
          <HashLink to="#approach" className="nav-item">
            {t("approach:name")}
          </HashLink>
          <HashLink to="#startups" className="nav-item">
            {t("startups:name")}
          </HashLink>
          <HashLink to="#about" className="nav-item">
            {t("team:name")}
          </HashLink>
          <LangSelector />
          <ButtonHashLink label="action:lets-talk" to="#contact" />
        </nav>
        <button
          className="button-menu show-in-mobile"
          onClick={toggleMenu}
          aria-label="menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
