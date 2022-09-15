import React from "react";
import useTranslations from "../../hooks/useTranslations";

const About = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="beta">{t("about:title")}</h1>
    </div>
  );
};

export default About;
