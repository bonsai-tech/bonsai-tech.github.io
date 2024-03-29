import React from "react";
import ButtonGeneric from "./ButtonGeneric";
import { Link } from "../LinkLocalized";

const ButtonAnchor = ({ to, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <Link className={buttonClasses} to={to}>
          {buttonContent}
        </Link>
      )}
    </ButtonGeneric>
  );
};

export default ButtonAnchor;
