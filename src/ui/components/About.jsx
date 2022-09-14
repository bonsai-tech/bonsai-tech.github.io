import React from "react";
import useTranslations from "../../hooks/useTranslations";

const About = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="alpha">{t("about:title")}</h1>
    </div>
  );
};

export default About;
