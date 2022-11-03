import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import sara from "../../assets/images/sara.png";
import ignacio from "../../assets/images/ignacio.png";
import juanlu from "../../assets/images/juanlu.png";
import antonio from "../../assets/images/antonio1.png";
// import pattern from "../../assets/images/pattern2.png";
import TeamMember from "./TeamMember";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import AnimatedGrid from "./AnimatedGrid";

const About = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();
  const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick className="about" id="about">
      <div className="intro-heading" ref={titleRef}>
        <h3 className="pre-title">{t("about:pretitle")}</h3>
        <h1 className="beta">{t("about:title")}</h1>
      </div>
      <div className="team">
        <TeamMember
          ref={blockRef}
          name="Ignacio Ramos"
          position={t("about:position:ignacio")}
          description={t("about:description:ignacio")}
          image={ignacio}
        />
        <TeamMember
          ref={blockRef}
          name="Antonio Esquembre"
          position={t("about:position:antonio")}
          description={t("about:description:antonio")}
          image={antonio}
        />
        <TeamMember
          ref={blockRef}
          name="Sara Moreno"
          position={t("about:position:sara")}
          description={t("about:description:sara")}
          image={sara}
        />
        <TeamMember
          ref={blockRef}
          name="Juan Luis García"
          position={t("about:position:juanlu")}
          description={t("about:description:juanlu")}
          image={juanlu}
        />
      </div>
      {/*<img src={pattern} alt="pattern" className="pattern" />*/}
      <AnimatedGrid />
    </Brick>
  );
};

export default About;
