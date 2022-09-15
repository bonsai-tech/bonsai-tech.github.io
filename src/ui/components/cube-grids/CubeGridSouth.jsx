import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import cubeSkirt from "../../../assets/images/cube-skirt.svg";
import chat from "../../../assets/images/icon-chat.svg";

const CubeGridSouth = () => {
  return (
    <div className="cube-grid is-south">
      <img className="cube-n" src={cube1} alt="cube" />
      <img className="cube-e" src={cube1} alt="cube" />
      <div className="cube-s">
        <img src={cube1} alt="cube" />
        <img className="icon" src={chat} alt="chat" />
      </div>
      <img className="cube-w" src={cube1} alt="cube" />
      <img className="cube-skirt" src={cubeSkirt} alt="cube" />
    </div>
  );
};

export default CubeGridSouth;
