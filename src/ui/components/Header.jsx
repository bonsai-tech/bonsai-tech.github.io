import React, { useState, useCallback, useLayoutEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import logo from "../../assets/images/logo.svg";
import Link from "../components/LinkLocalized";
import cx from "classnames";
import ButtonHashLink from "./buttons/ButtonHashLink";
import useScrollspy from "../../hooks/useScrollSpy";

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

  const ids = ["services", "aucta", "approach", "startups", "team"];
  const activeId = useScrollspy(ids, 101);

  return (
    <header className={cx("header", { "open-menu": isMenuOpen })}>
      <div className="wrapper">
        <Link to="/" className="logo" activeClassName="active">
          <img className="logo" alt="Bonsai" src={logo} />
        </Link>
        <nav className="main-nav" onClick={closeMenu}>
          <Link
            to="/#services"
            className={cx("nav-item", {
              active: activeId === "services" || activeId === "aucta",
            })}
          >
            {t("services:name")}
          </Link>
          <Link
            to="/#approach"
            activeClassName="active"
            className={cx("nav-item", { active: activeId === "approach" })}
          >
            {t("approach:name")}
          </Link>
          <Link
            to="/#startups"
            activeClassName="active"
            className={cx("nav-item", { active: activeId === "startups" })}
          >
            {t("startups:name")}
          </Link>
          <Link
            to="/#team"
            className={cx("nav-item", { active: activeId === "team" })}
            activeClassName="active"
          >
            {t("team:name")}
          </Link>
          <LangSelector />
          <ButtonHashLink label="action:lets-talk" to="/#contact" />
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
