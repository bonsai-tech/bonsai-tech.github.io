import React, { forwardRef } from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const VisualBlock = forwardRef(({ title, texts, reverse, visual }, ref) => {
  const t = useTranslations();

  return (
    <div className={cx("visual-block", { reverse: reverse })}>
      <div className="info" ref={ref}>
        <h2 className="gamma">{t(title)}</h2>
        {texts}
      </div>
      {visual}
    </div>
  );
});

export default VisualBlock;
