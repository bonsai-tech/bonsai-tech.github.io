import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import cubeSkirt from "../../../assets/images/cube-skirt.svg";
import chat from "../../../assets/images/icon-chat.svg";

const CubeGridEast = () => {
  return (
    <div className="cube-grid is-east">
      <img className="cube-n" src={cube1} alt="cube" />
      <div className="cube-e">
        <img src={cube1} alt="cube" />
        <img className="icon" src={chat} alt="chat" />
      </div>
      <img className="cube-s" src={cube1} alt="cube" />
      <img className="cube-w" src={cube1} alt="cube" />
      <img className="cube-skirt" src={cubeSkirt} alt="cube" />
    </div>
  );
};

export default CubeGridEast;
