import React from "react";
import useScrollRevealEffect from "../../../hooks/effects/useScrollRevealEffect";
import cx from "classnames";
import cubeSkirt from "../../../assets/images/cube-skirt.svg";

const CubeGrid = ({ className, children }) => {
  const itemRef = useScrollRevealEffect({
    toggleClass: "activated",
    // markers: true,
  });
  return (
    <div className={cx("cube-grid", { [className]: className })} ref={itemRef}>
      {children}
      <img className="cube-skirt" src={cubeSkirt} alt="cube" />
    </div>
  );
};

export default CubeGrid;
