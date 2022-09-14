import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Contact = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="alpha">{t("contact:title")}</h1>
    </div>
  );
};

export default Contact;
