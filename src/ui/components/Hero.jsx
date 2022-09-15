import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="wrapper">
      <h1 className="alpha">{t("hero:title")}</h1>
    </div>
  );
};

export default Hero;
