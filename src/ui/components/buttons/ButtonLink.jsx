import React from "react";
import ButtonGeneric from "./ButtonGeneric";

const ButtonLink = ({ href, external, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <a
          className={buttonClasses}
          href={href}
          target={external ? "_blank" : ""}
          rel={external ? "noopener noreferrer" : ""}
        >
          {buttonContent}
        </a>
      )}
    </ButtonGeneric>
  );
};

export default ButtonLink;
