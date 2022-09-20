import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import CubeGrid from "./CubeGrid";
import { ReactComponent as Diamond } from "../../../assets/icons/icon-diamond.svg";

const CubeGridSouth = () => {
  return (
    <CubeGrid className="is-south">
      <img className="cube-n" src={cube1} alt="cube" />
      <img className="cube-e" src={cube1} alt="cube" />
      <div className="cube-s">
        <img src={cube1} alt="cube" />
        <Diamond className="icon" />
      </div>
      <img className="cube-w" src={cube1} alt="cube" />
    </CubeGrid>
  );
};

export default CubeGridSouth;
