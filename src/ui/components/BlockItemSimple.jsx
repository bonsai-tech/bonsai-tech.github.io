import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const BlockItemSimple = forwardRef(({ icon, text, number }, ref) => {
  const t = useTranslations();

  return (
    <div className="block-item is-simple" ref={ref}>
      {number ? <span className="number">{number}</span> : icon}
      <h4 className="title">{t(text)}</h4>
    </div>
  );
});

export default BlockItemSimple;
