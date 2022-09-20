import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import CubeGrid from "./CubeGrid";
import { ReactComponent as Chat } from "../../../assets/icons/icon-chat.svg";

const CubeGridNorth = () => {
  return (
    <CubeGrid className="is-north">
      <div className="cube-n">
        <img src={cube1} alt="cube" />
        <Chat className="icon" />
      </div>
      <img className="cube-e" src={cube1} alt="cube" />
      <img className="cube-s" src={cube1} alt="cube" />
      <img className="cube-w" src={cube1} alt="cube" />
    </CubeGrid>
  );
};

export default CubeGridNorth;
