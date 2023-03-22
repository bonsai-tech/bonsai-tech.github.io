import React from "react";
import useTranslations from "../../hooks/useTranslations";
import useRevealEffect from "../../hooks/effects/useRevealEffect";
import ButtonHashLink from "./buttons/ButtonHashLink";
import AnimatedGrid from "./AnimatedGrid";
import idealista from "../../assets/images/clients/idealista.png";
import aucta from "../../assets/images/clients/aucta.png";
import hugo from "../../assets/images/clients/hugo-boss.png";
import liberty from "../../assets/images/clients/liberty.png";
import confidencial from "../../assets/images/clients/confidencial.png";

const Hero = () => {
  const t = useTranslations();
  const blockRef = useRevealEffect();
  const textRef = useRevealEffect({ delay: 0.2 });
  // const imageRef = useRevealEffect({ delay: 0.3 });
  return (
    <div className="hero" ref={blockRef}>
      <div className="wrapper">
        <AnimatedGrid />
        <div className="hero-info" ref={textRef}>
          <h1 className="alpha">
            {t("hero:title", {
              span: t => <span className="emphasis-text">{t}</span>,
            })}
          </h1>
          <p className="intro-text">
            {t("hero:subtitle", {
              strong: t => <strong>{t}</strong>,
            })}
          </p>
          <ButtonHashLink label="action:lets-start" to="#contact" />
        </div>
        <div className="clients" ref={blockRef}>
          <div className="wrapper">
            <h2 className="pre-title">{t("clients:title")}</h2>
            <div className="clients-list">
              <img
                className="client"
                alt="idealista"
                src={idealista}
                width="210px"
                height="60px"
              />
              <img
                className="client"
                alt="aucta"
                src={aucta}
                width="197px"
                height="48px"
              />
              <img
                className="client"
                alt="hugo boss"
                src={hugo}
                width="128px"
                height="48px"
              />
              <img
                className="client"
                alt="liberty seguros"
                src={liberty}
                width="120px"
                height="60px"
              />
              <img
                className="client"
                alt="El confidencial"
                src={confidencial}
                width="254px"
                height="38px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
