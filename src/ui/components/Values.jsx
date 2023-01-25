import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import InfoBlock from "./InfoBlock";

const Values = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();
  const itemRef = useScrollRevealEffect({ delay: 0.2 });

  return (
    <Brick className="values">
      <div className="intro-heading" ref={titleRef}>
        <p className="pre-title">{t("values:pretitle")}</p>
        <h1 className="beta">{t("values:title")}</h1>
      </div>
      <div className="values-block">
        <InfoBlock
          ref={itemRef}
          title="values:value1:title"
          content={
            <>
              <p className="basic-text">{t("values:value1:text1")}</p>
              <p className="basic-text">{t("values:value1:text2")}</p>
            </>
          }
        />
        <InfoBlock
          ref={itemRef}
          title="values:value2:title"
          content={
            <>
              <p className="basic-text">{t("values:value2:text1")}</p>
              <p className="basic-text">{t("values:value2:text2")}</p>
            </>
          }
        />
        <InfoBlock
          ref={itemRef}
          title="values:value3:title"
          content={
            <>
              <p className="basic-text">{t("values:value3:text1")}</p>
              <p className="basic-text">{t("values:value3:text2")}</p>
            </>
          }
        />
      </div>
    </Brick>
  );
};

export default Values;
