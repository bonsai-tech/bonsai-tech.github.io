import React from "react";
import LangSelector from "../components/LangSelector";
import logo from "../../assets/images/logo.svg";
import Link from "gatsby-link";
import cx from "classnames";

const HeaderSimple = () => {
  return (
    <header className={cx("header")}>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img className="logo" alt="Bonsai" src={logo} />
        </Link>
        <nav className="main-nav">
          <LangSelector />
        </nav>
      </div>
    </header>
  );
};

export default HeaderSimple;
