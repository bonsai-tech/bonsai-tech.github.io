import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import quotes from "../../assets/images/quotes.svg";
import daniel from "../../assets/images/daniel.png";
import ButtonLink from "./buttons/ButtonLink";

const Quote = ({ text, author, position }) => {
  const t = useTranslations();

  return (
    <Brick className="quote">
      <div className="quote-image" data-aos="custom-animation">
        <img src={daniel} alt="Daniel Seiler" />
      </div>
      <div className="quote-info" data-aos="custom-animation">
        <h3 className="quote-text">{t(text)}</h3>
        <p className="quote-author">{author}</p>
        <p className="quote-position">{t(position)}</p>
        <ButtonLink
          href="https://daniel-seiler.com/"
          label="quote:action"
          external
        />
      </div>
      <div className="quote-graphic" data-aos="custom-animation">
        <img src={quotes} alt="Quotes" />
      </div>
    </Brick>
  );
};

export default Quote;
