import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const VisualBlock = ({ title, texts, reverse, visual }) => {
  const t = useTranslations();

  return (
    <div className={cx("visual-block", { reverse: reverse })}>
      <div className="info">
        <h2 className="gamma">{t(title)}</h2>
        {texts}
      </div>
      {visual}
    </div>
  );
};

export default VisualBlock;
