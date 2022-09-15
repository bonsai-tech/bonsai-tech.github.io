import React from "react";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/hero-pattern.svg";
import ButtonLink from "../components/buttons/ButtonLink";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="hero">
      <div className="wrapper">
        <img className="hero-pattern" src={pattern} alt="cube pattern" />
        <div className="hero-info">
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
