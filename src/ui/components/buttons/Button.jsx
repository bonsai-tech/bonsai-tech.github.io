import React from "react";
import ButtonGeneric from "./ButtonGeneric";

const Button = ({ onClick, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <button className={buttonClasses} onClick={onClick}>
          {buttonContent}
        </button>
      )}
    </ButtonGeneric>
  );
};

export default Button;
