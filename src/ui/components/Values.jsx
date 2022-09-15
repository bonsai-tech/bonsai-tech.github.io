import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Values = () => {
  const t = useTranslations();

  return (
    <Brick skin="grey" className="values">
      <h1 className="beta">{t("values:title")}</h1>
    </Brick>
  );
};

export default Values;
