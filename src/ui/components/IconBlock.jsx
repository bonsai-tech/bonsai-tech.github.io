import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const IconBlock = forwardRef(({ title, text, alt, image }, ref) => {
  const t = useTranslations();

  return (
    <div className="icon-block" ref={ref}>
      <div className="icon-block-title">
        <img src={image} alt={alt} />
        <h2 className="delta">{t(title)}</h2>
      </div>
      <div className="icon-block-content">
        <p>{t(text)}</p>
      </div>
    </div>
  );
});

export default IconBlock;
