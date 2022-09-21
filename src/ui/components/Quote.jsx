import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import quotes from "../../assets/images/quotes.svg";

const Quote = ({ text, author, position }) => {
  const t = useTranslations();

  return (
    <Brick className="quote">
      <div className="quote-info">
        <h3 className="quote-text">{t(text)}</h3>
        <p className="quote-author">{author}</p>
        <p className="quote-position">{t(position)}</p>
      </div>
      <div className="quote-graphic">
        <img src={quotes} alt="Quotes" />
      </div>
    </Brick>
  );
};

export default Quote;
