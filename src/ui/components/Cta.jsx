import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import ButtonHashLink from "../components/buttons/ButtonHashLink";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";

const Cta = ({ skin, clearButton }) => {
  const t = useTranslations();
  const textRef = useScrollRevealEffect();
  const buttonRef = useScrollRevealEffect({ delay: 0.3 });

  return (
    <Brick className="cta" skin={skin}>
      <div className="cta-info" ref={textRef}>
        <h1 className="beta">{t("cta:title")}</h1>
        <p className="cta-text">{t("cta:text")}</p>
      </div>
      <div className="cta-action" ref={buttonRef}>
        <ButtonHashLink
          label="actions:hire"
          to="#contact"
          clear={clearButton}
        />
      </div>
    </Brick>
  );
};

export default Cta;
