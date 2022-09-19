import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import ButtonLink from "../components/buttons/ButtonLink";

const Cta = () => {
  const t = useTranslations();

  return (
    <Brick className="cta">
      <div className="cta-info">
        <h1 className="beta">{t("cta:title")}</h1>
        <p className="cta-text">{t("cta:text")}</p>
      </div>
      <div className="cta-action">
        <ButtonLink label={t("actions:hire")} href="#" />
      </div>
    </Brick>
  );
};

export default Cta;
