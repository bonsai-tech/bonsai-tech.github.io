import React from "react";
import useTranslations from "../../hooks/useTranslations";

const MapBlock = () => {
  const t = useTranslations();

  return (
    <div className="map">
      <div className="wrapper">
        <div className="map-info-box">
          <h2 className="gamma">{t("map:title")}</h2>
          <p className="text">
            Sector Literatos 38. 28760, Tres Cantos (Madrid)
          </p>
        </div>
      </div>
      <iframe src="https://snazzymaps.com/embed/424465"></iframe>
    </div>
  );
};

export default MapBlock;
