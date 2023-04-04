import React from "react";
import useTranslations from "../../hooks/useTranslations";
import ButtonHashLink from "./buttons/ButtonHashLink";
import AnimatedGrid from "./AnimatedGrid";
import { ReactComponent as Aucta } from "../../assets/images/clients/aucta.svg";
import { ReactComponent as Idealista } from "../../assets/images/clients/idealista.svg";
import { ReactComponent as Hugo } from "../../assets/images/clients/hugo-boss.svg";
import { ReactComponent as Liberty } from "../../assets/images/clients/liberty.svg";
import { ReactComponent as Confidencial } from "../../assets/images/clients/confidencial.svg";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="hero" data-aos="custom-animation">
      <div className="wrapper">
        <AnimatedGrid />
        <div className="hero-info">
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
        <div className="clients" data-aos="custom-animation">
          <div className="wrapper">
            <h2 className="pre-title">{t("clients:title")}</h2>
            <div className="clients-list">
              <Idealista
                className="client"
                style={{ width: "210px", height: "40px" }}
              />
              <Aucta
                className="client"
                style={{ width: "182px", height: "40px" }}
              />
              <Hugo
                className="client"
                style={{ width: "109px", height: "40px" }}
              />
              <Liberty
                className="client"
                style={{ width: "137px", height: "68px" }}
              />
              <Confidencial
                className="client confidencial"
                style={{ width: "282px", height: "32px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
