import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Cta2 = () => {
  const t = useTranslations();

  return (
    <Brick className="cta">
      <h1 className="beta">{t("cta2:title")}</h1>
    </Brick>
  );
};

export default Cta2;
