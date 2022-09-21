import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";

const render = status => {
  return <h1>{status}</h1>;
};

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
      <Wrapper apiKey={"AIzaSyB5hWweZHowclpVOVjk-UlDZgTWC5otY0U"}>
        <Map />
      </Wrapper>
    </div>
  );
};

export default MapBlock;
