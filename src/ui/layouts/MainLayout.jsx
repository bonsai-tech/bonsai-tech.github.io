import React from "react";
import cx from "classnames";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

const MainLayout = ({ children, className }) => {
  return (
    <MemoryRouter>
      <div className={cx("outer-wrapper", className)}>
        <Header />
        <div className="content">{children}</div>
        <footer className="footer">Footer</footer>
      </div>
    </MemoryRouter>
  );
};

export default MainLayout;
