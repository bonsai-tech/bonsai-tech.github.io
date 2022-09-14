import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Values = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="alpha">{t("values:title")}</h1>
    </div>
  );
};

export default Values;
