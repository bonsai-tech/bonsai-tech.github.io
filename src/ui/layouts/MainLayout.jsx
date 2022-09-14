import React from "react";
import cx from "classnames";

const MainLayout = ({ children, className }) => {
  return (
    <div className={cx("outer-wrapper", className)}>
      <p>Header</p>
      <div className="content">{children}</div>
      <p>Footer</p>
    </div>
  );
};

export default MainLayout;
