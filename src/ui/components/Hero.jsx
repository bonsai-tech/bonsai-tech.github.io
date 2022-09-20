import React from "react";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/hero-pattern.svg";
import ButtonLink from "../components/buttons/ButtonLink";
import useRevealEffect from "../../hooks/effects/useRevealEffect";

const Hero = () => {
  const t = useTranslations();
  const blockRef = useRevealEffect();
  const textRef = useRevealEffect({ delay: 0.2 });
  const imageRef = useRevealEffect({ delay: 0.3 });

  return (
    <div className="hero" ref={blockRef}>
      <div className="wrapper">
        <img
          className="hero-pattern"
          src={pattern}
          alt="cube pattern"
          ref={imageRef}
        />
        <div className="hero-info" ref={textRef}>
          <h1 className="alpha">
            {t("hero:title", {
              span: t => <span className="emphasis-text">{t}</span>,
            })}
          </h1>
          <p className="intro-text">{t("hero:subtitle")}</p>
          <ButtonLink label={t("actions:hire")} href="#" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
