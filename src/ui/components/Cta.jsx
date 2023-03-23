import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import ButtonHashLink from "../components/buttons/ButtonHashLink";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import cx from "classnames";

const Cta = ({ skin, clearButton, title, text, buttonText, reversed }) => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect();
  // const buttonRef = useScrollRevealEffect({ delay: 0.3 });

  return (
    <Brick className={cx("cta", { "is-reversed": reversed })} skin={skin}>
      <div className="cta-info" ref={blockRef}>
        <h2 className="gamma">{t(title)}</h2>
        {text && <p className="cta-text">{t(text)}</p>}
      </div>
      <div className="cta-action" ref={blockRef}>
        <ButtonHashLink label={buttonText} to="#contact" clear={clearButton} />
      </div>
    </Brick>
  );
};

export default Cta;
