import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const InfoBlock = forwardRef(({ title, content }, ref) => {
  const t = useTranslations();

  return (
    <div className={cx("info-block")} ref={ref}>
      <h2 className="gamma">{t(title)}</h2>
      {content}
    </div>
  );
});

export default InfoBlock;
