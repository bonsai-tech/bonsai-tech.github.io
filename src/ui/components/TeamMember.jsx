import React, { forwardRef } from "react";

const TeamMember = forwardRef(({ name, position, description, image }, ref) => {
  return (
    <div className="team-member" ref={ref}>
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
      <div className="team-info">
        <p className="team-name">{name}</p>
        <p className="team-position">{position}</p>
        <p className="team-description">{description}</p>
      </div>
    </div>
  );
});

export default TeamMember;
