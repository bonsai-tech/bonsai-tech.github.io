import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import cubeSkirt from "../../../assets/images/cube-skirt.svg";
import chat from "../../../assets/images/icon-chat.svg";

const CubeGridNorth = () => {
  return (
    <div className="cube-grid is-north">
      <div className="cube-n">
        <img src={cube1} alt="cube" />
        <img className="icon" src={chat} alt="chat" />
      </div>
      <img className="cube-e" src={cube1} alt="cube" />
      <img className="cube-s" src={cube1} alt="cube" />
      <img className="cube-w" src={cube1} alt="cube" />
      <img className="cube-skirt" src={cubeSkirt} alt="cube" />
    </div>
  );
};

export default CubeGridNorth;
