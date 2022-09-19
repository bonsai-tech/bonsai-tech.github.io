import React from "react";
import useTranslations from "../../hooks/useTranslations";

const TeamMember = ({ name, position, description, image }) => {
  const t = useTranslations();

  return (
    <div className="team-member">
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
};

export default TeamMember;
