import React from "react";
import cx from "classnames";

const MainLayout = ({ children, className }) => {
  return (
    <div className={cx("outer-wrapper", className)}>
      <header className="header">Header</header>
      <div className="content">{children}</div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default MainLayout;
