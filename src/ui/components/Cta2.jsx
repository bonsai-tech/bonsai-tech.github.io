import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Cta2 = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="alpha">{t("cta2:title")}</h1>
    </div>
  );
};

export default Cta2;
