import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import CubeGrid from "./CubeGrid";
import { ReactComponent as Stack } from "../../../assets/icons/icon-stack.svg";

const CubeGridEast = () => {
  return (
    <CubeGrid className="is-east">
      <img className="cube-n" src={cube1} alt="cube" />
      <div className="cube-e">
        <img src={cube1} alt="cube" />
        <Stack className="icon" />
      </div>
      <img className="cube-s" src={cube1} alt="cube" />
      <img className="cube-w" src={cube1} alt="cube" />
    </CubeGrid>
  );
};

export default CubeGridEast;
