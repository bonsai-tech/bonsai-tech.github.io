import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const Step = forwardRef(({ number, text, title, aos }, ref) => {
  const t = useTranslations();

  return (
    <li className="step" ref={ref} data-aos={aos}>
      <span className="number">{number}</span>
      <div className="info">
        <h2 className="gamma">{t(title)}</h2>
        <p className="text">{t(text)}</p>
      </div>
    </li>
  );
});

export default Step;
