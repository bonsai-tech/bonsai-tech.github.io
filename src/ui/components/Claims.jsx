import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import CubeGridNorth from "./cube-grids/CubeGridNorth";
import CubeGridEast from "./cube-grids/CubeGridEast";
import CubeGridSouth from "./cube-grids/CubeGridSouth";
import CubeGridWest from "./cube-grids/CubeGridWest";
import VisualBlock from "./VisualBlock";

const Claims = () => {
  const t = useTranslations();

  return (
    <Brick skin="dark" className="claims">
      <h1 className="beta">{t("claims:title")}</h1>
      <VisualBlock
        title="claims:section1:title"
        visual={<CubeGridNorth />}
        texts={
          <>
            <p className="basic-text">
              Nos incorporamos al proyecto con la mayor rápidez posible.
            </p>
            <p className="basic-text">
              No generamos una carga extra a equipos internos.
            </p>
            <p className="basic-text">
              Revisamos la documentación y el código y nos ponemos manos a la
              obra.
            </p>
          </>
        }
      />
      <VisualBlock
        title="claims:section2:title"
        reverse
        visual={<CubeGridEast />}
        texts={
          <>
            <p className="basic-text">
              Nos incorporamos al proyecto con la mayor rápidez posible.
            </p>
            <p className="basic-text">
              No generamos una carga extra a equipos internos.
            </p>
            <p className="basic-text">
              Revisamos la documentación y el código y nos ponemos manos a la
              obra.
            </p>
          </>
        }
      />
      <VisualBlock
        title="claims:section3:title"
        visual={<CubeGridSouth />}
        texts={
          <>
            <p className="basic-text">
              Nos incorporamos al proyecto con la mayor rápidez posible.
            </p>
            <p className="basic-text">
              No generamos una carga extra a equipos internos.
            </p>
            <p className="basic-text">
              Revisamos la documentación y el código y nos ponemos manos a la
              obra.
            </p>
          </>
        }
      />
      <VisualBlock
        title="claims:section4:title"
        visual={<CubeGridWest />}
        reverse
        texts={
          <>
            <p className="basic-text">
              Nos incorporamos al proyecto con la mayor rápidez posible.
            </p>
            <p className="basic-text">
              No generamos una carga extra a equipos internos.
            </p>
            <p className="basic-text">
              Revisamos la documentación y el código y nos ponemos manos a la
              obra.
            </p>
          </>
        }
      />
    </Brick>
  );
};

export default Claims;
