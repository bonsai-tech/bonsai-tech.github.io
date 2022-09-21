import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import Card from "./Card";

const Services = () => {
  const t = useTranslations();

  return (
    <Brick skin="grey" className="services" id="services">
      <div className="intro-heading">
        <h3 className="pre-title">{t("services:pretitle")}</h3>
        <h1 className="beta">{t("services:title")}</h1>
        <p className="text">{t("services:intro-text")}</p>
      </div>
      <div className="card-grid">
        <Card
          title="services:service1:title"
          content={
            <>
              <p className="basic-text">{t("services:service1:text")}</p>
            </>
          }
        />
        <Card
          title="services:service2:title"
          content={
            <>
              <p className="basic-text">{t("services:service2:text")}</p>
            </>
          }
        />
      </div>
      <p className="text">
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
