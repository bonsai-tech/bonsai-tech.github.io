import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const BlockItem = forwardRef(({ title, icon, text }, ref) => {
  const t = useTranslations();

  return (
    <div className="block-item" ref={ref}>
      <div className="icon-box">{icon}</div>
      <div className="info-box">
        <h2 className="gamma">{t(title)}</h2>
        <p className="text">{t(text)}</p>
      </div>
    </div>
  );
});

export default BlockItem;
