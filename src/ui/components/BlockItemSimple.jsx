import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";

const BlockItemSimple = forwardRef(({ icon, text, number, aos }, ref) => {
  const t = useTranslations();

  return (
    <div className="block-item is-simple" ref={ref} data-aos={aos}>
      {number ? <span className="number">{number}</span> : icon}
      <h4 className="title">{t(text)}</h4>
    </div>
  );
});

export default BlockItemSimple;
