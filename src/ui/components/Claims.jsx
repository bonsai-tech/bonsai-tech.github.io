import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import CubeGridNorth from "./cube-grids/CubeGridNorth";
import CubeGridEast from "./cube-grids/CubeGridEast";
import CubeGridSouth from "./cube-grids/CubeGridSouth";
import CubeGridWest from "./cube-grids/CubeGridWest";

const Claims = () => {
  const t = useTranslations();

  return (
    <Brick skin="dark" className="claims">
      <h1 className="beta">{t("claims:title")}</h1>
      <CubeGridNorth />
      <CubeGridEast />
      <CubeGridSouth />
      <CubeGridWest />
    </Brick>
  );
};

export default Claims;
