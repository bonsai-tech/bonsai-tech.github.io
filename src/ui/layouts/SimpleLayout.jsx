import React from "react";
import cx from "classnames";
import HeaderSimple from "../components/HeaderSimple";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";

const SimpleLayout = ({ children, className }) => {
  return (
    <MemoryRouter>
      <div className={cx("outer-wrapper", className)}>
        <HeaderSimple />
        <div className="content">{children}</div>
        <Footer hasNav={false} />
      </div>
    </MemoryRouter>
  );
};

export default SimpleLayout;
