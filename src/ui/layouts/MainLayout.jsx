import React from "react";
import cx from "classnames";
import Header from "../components/Header";

const MainLayout = ({ children, className }) => {
  return (
    <div className={cx("outer-wrapper", className)}>
      <Header />
      <div className="content">{children}</div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default MainLayout;
