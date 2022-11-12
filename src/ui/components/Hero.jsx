import React from "react";
import useTranslations from "../../hooks/useTranslations";
import useRevealEffect from "../../hooks/effects/useRevealEffect";
import ButtonHashLink from "./buttons/ButtonHashLink";
import AnimatedGrid from "./AnimatedGrid";

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
          <ButtonHashLink label="action:hire" to="#contact" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
