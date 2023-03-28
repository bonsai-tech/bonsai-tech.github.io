import React, { forwardRef } from "react";
import cx from "classnames";

const Brick = forwardRef(({ className, children, skin, id }, ref) => {
  return (
    <div
      className={cx(`brick`, {
        [className]: className,
        [skin]: skin,
      })}
      id={id}
      ref={ref}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
});

Brick.defaultProps = {
  skin: false,
};

export default Brick;
