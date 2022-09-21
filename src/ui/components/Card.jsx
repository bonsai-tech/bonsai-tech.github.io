import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const Card = forwardRef(({ title, content, className }, ref) => {
  const t = useTranslations();

  return (
    <div className={cx("card", { [className]: className })} ref={ref}>
      <h2 className="gamma">{t(title)}</h2>
      {content}
    </div>
  );
});

export default Card;
