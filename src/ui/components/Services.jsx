import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Services = () => {
  const t = useTranslations();

  return (
    <Brick skin="grey" className="services">
      <h1 className="beta">{t("services:title")}</h1>
    </Brick>
  );
};

export default Services;
