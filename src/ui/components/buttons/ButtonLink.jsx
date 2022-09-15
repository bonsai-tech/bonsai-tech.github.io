import React from "react";
import ButtonGeneric from "./ButtonGeneric";

const ButtonLink = ({ href, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <a className={buttonClasses} href={href}>
          {buttonContent}
        </a>
      )}
    </ButtonGeneric>
  );
};

export default ButtonLink;
