import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import Card from "./Card";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";

const Services = () => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect();
  // const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick skin="grey" className="services" id="services">
      <div className="intro-heading" ref={blockRef}>
        <h3 className="pre-title">{t("services:pretitle")}</h3>
        <h1 className="beta">{t("services:title")}</h1>
        <p className="text">{t("services:intro-text")}</p>
      </div>
      <div className="card-grid">
        <Card
          ref={blockRef}
          title="services:service1:title"
          content={
            <>
              <p className="basic-text">{t("services:service1:text")}</p>
            </>
          }
        />
        <Card
          ref={blockRef}
          title="services:service2:title"
          content={
            <>
              <p className="basic-text">{t("services:service2:text")}</p>
            </>
          }
        />
      </div>
      <p className="text" ref={blockRef}>
        {t("services:contact-text", {
          a: t => (
            <a className="link" href="#">
              {t}
            </a>
          ),
        })}
      </p>
    </Brick>
  );
};

export default Services;
