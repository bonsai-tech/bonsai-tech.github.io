import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Quote = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="beta">{t("quote:title")}</h1>
    </div>
  );
};

export default Quote;
