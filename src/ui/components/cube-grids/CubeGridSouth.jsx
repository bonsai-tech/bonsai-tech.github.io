import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import chat from "../../../assets/images/icon-chat.svg";
import CubeGrid from "./CubeGrid";

const CubeGridSouth = () => {
  return (
    <CubeGrid className="is-south">
      <img className="cube-n" src={cube1} alt="cube" />
      <img className="cube-e" src={cube1} alt="cube" />
      <div className="cube-s">
        <img src={cube1} alt="cube" />
        <img className="icon" src={chat} alt="chat" />
      </div>
      <img className="cube-w" src={cube1} alt="cube" />
    </CubeGrid>
  );
};

export default CubeGridSouth;
