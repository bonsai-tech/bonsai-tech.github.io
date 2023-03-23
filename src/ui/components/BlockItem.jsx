import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const BlockItem = forwardRef(({ title, icon, text }, ref) => {
  const t = useTranslations();

  return (
    <div className="block-item" ref={ref}>
      <div className="icon-box">{icon}</div>
      <div className="info-box">
        <h3 className="delta">{t(title)}</h3>
        <p className="text">{t(text)}</p>
      </div>
    </div>
  );
});

export default BlockItem;
