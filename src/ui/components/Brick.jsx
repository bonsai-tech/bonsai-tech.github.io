import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Brick = ({ className, children, skin = false }) => {
  return (
    <div
      className={cx(`brick brick-${skin}`, {
        [className]: className,
      })}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

Brick.propTypes = {
  skin: PropTypes.oneOf(["", "dark", "grey"]),
};

export default Brick;
