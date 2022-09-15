import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const About = () => {
  const t = useTranslations();

  return (
    <Brick className="about">
      <h1 className="beta">{t("about:title")}</h1>
    </Brick>
  );
};

export default About;
