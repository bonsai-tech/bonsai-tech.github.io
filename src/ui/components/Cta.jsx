import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Cta = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="beta">{t("cta:title")}</h1>
    </div>
  );
};

export default Cta;
