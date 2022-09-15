import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Cta = () => {
  const t = useTranslations();

  return (
    <Brick skin="dark" className="cta">
      <h1 className="beta">{t("cta:title")}</h1>
    </Brick>
  );
};

export default Cta;
