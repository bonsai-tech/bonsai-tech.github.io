import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Contact = () => {
  const t = useTranslations();

  return (
    <Brick skin="grey" className="contact">
      <h1 className="beta">{t("contact:title")}</h1>
    </Brick>
  );
};

export default Contact;
