import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import quotes from "../../assets/images/quotes.svg";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";

const Quote = ({ text, author, position }) => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect();

  return (
    <Brick className="quote">
      <div className="quote-info" ref={blockRef}>
        <h3 className="quote-text">{t(text)}</h3>
        <p className="quote-author">{author}</p>
        <p className="quote-position">{t(position)}</p>
      </div>
      <div className="quote-graphic" ref={blockRef}>
        <img src={quotes} alt="Quotes" />
      </div>
    </Brick>
  );
};

export default Quote;
