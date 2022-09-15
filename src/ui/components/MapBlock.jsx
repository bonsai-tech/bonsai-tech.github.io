import React from "react";
import useTranslations from "../../hooks/useTranslations";

const MapBlock = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="beta">{t("map:title")}</h1>
    </div>
  );
};

export default MapBlock;
