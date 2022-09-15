import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Quote = () => {
  const t = useTranslations();

  return (
    <Brick className="quote">
      <h1 className="beta">{t("quote:title")}</h1>
    </Brick>
  );
};

export default Quote;
