import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import ButtonHashLink from "../components/buttons/ButtonHashLink";

import cx from "classnames";

const Cta = ({ skin, clearButton, title, text, buttonText, reversed }) => {
  const t = useTranslations();
  return (
    <Brick className={cx("cta", { "is-reversed": reversed })} skin={skin}>
      <div className="cta-info" data-aos="custom-animation">
        <h2 className="gamma">{t(title)}</h2>
        {text && <p className="cta-text">{t(text)}</p>}
      </div>
      <div className="cta-action" data-aos="custom-animation">
        <ButtonHashLink label={buttonText} to="#contact" clear={clearButton} />
      </div>
    </Brick>
  );
};

export default Cta;
