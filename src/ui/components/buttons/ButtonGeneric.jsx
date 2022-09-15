import React from "react";
import cx from "classnames";

const ButtonGeneric = ({ label, disabled, clear = false, children }) => {
  const buttonClasses = cx("button", {
    "is-clear": clear,
    "is-disabled": disabled,
  });
  const buttonContent = (
    <div className="button-content">
      <span className="button-text">{label}</span>
      <span className="button-shadow"></span>
    </div>
  );

  return <>{children({ buttonClasses, buttonContent })}</>;
};

export default ButtonGeneric;
