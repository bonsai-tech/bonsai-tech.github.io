import React from "react";
import cube1 from "../../../assets/images/cube-long.svg";
import cubeSkirt from "../../../assets/images/cube-skirt.svg";
import chat from "../../../assets/images/icon-chat.svg";

const CubeGridWest = () => {
  return (
    <div className="cube-grid is-west">
      <img className="cube-n" src={cube1} alt="cube" />
      <img className="cube-e" src={cube1} alt="cube" />
      <img className="cube-s" src={cube1} alt="cube" />
      <div className="cube-w">
        <img src={cube1} alt="cube" />
        <img className="icon" src={chat} alt="chat" />
      </div>
      <img className="cube-skirt" src={cubeSkirt} alt="cube" />
    </div>
  );
};

export default CubeGridWest;
