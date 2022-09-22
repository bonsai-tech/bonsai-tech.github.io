import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import { ReactComponent as Clock } from "../../../assets/icons/icon-clock.svg";
import CubeGrid from "./CubeGrid";

const CubeGridWest = () => {
  return (
    <CubeGrid className="is-west">
      <img className="cube-n" src={cube1} alt="cube" />
      <img className="cube-e" src={cube1} alt="cube" />
      <img className="cube-s" src={cube1} alt="cube" />
      <div className="cube-w">
        <img src={cube1} alt="cube" />
        <Clock className="icon" />
      </div>
    </CubeGrid>
  );
};

export default CubeGridWest;
