import React, { forwardRef } from "react";

const CardMember = forwardRef(({ name, position, description, image }, ref) => {
  return (
    <div className="card-member" ref={ref}>
      <div className="card-inner">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-info">
          <p className="card-name">{name}</p>
          <p className="card-position">{position}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
});

export default CardMember;
