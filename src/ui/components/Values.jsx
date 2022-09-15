import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Values = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="beta">{t("values:title")}</h1>
    </div>
  );
};

export default Values;
