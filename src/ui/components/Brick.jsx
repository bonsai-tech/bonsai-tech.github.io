import React from "react";
import cx from "classnames";

const Brick = ({ className, children, skin, id }) => {
  return (
    <div
      className={cx(`brick`, {
        [className]: className,
        [skin]: skin,
      })}
      id={id}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

Brick.defaultProps = {
  skin: false,
};

export default Brick;
