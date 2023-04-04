import React, { forwardRef } from "react";
import cx from "classnames";

const Brick = forwardRef(({ className, children, skin, id, aos }, ref) => {
  return (
    <div
      className={cx(`brick`, {
        [className]: className,
        [skin]: skin,
      })}
      id={id}
      ref={ref}
      data-aos={aos}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
});

Brick.defaultProps = {
  skin: false,
};

export default Brick;
