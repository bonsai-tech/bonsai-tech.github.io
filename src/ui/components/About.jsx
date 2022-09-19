import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import sara from "../../assets/images/sara.png";
import pattern from "../../assets/images/pattern2.svg";
import TeamMember from "./TeamMember";

const About = () => {
  const t = useTranslations();

  return (
    <Brick className="about">
      <div className="intro-heading">
        <h3 className="pre-title">{t("about:pretitle")}</h3>
        <h1 className="beta">{t("about:title")}</h1>
      </div>
      <div className="team">
        <TeamMember
          name="Ignacio Ramos"
          position={t("about:position:ignacio")}
          description={t("about:description:ignacio")}
          image={sara}
        />
        <TeamMember
          name="Antonio Esquembre"
          position={t("about:position:antonio")}
          description={t("about:description:antonio")}
          image={sara}
        />
        <TeamMember
          name="Sara Moreno"
          position={t("about:position:sara")}
          description={t("about:description:sara")}
          image={sara}
        />
        <TeamMember
          name="Juanlu García"
          position={t("about:position:juanlu")}
          description={t("about:description:juanlu")}
          image={sara}
        />
      </div>
      <img src={pattern} alt="pattern" className="pattern" />
    </Brick>
  );
};

export default About;
