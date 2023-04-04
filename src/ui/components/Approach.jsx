import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import { ReactComponent as Tick } from "../../assets/icons/icon-tick-circle.svg";
import BlockItemSimple from "./BlockItemSimple";
import Step from "../components/Step";

const Approach = () => {
  const t = useTranslations();

  return (
    <Brick className="approach" id="approach" aos="custom-animation">
      <div className="approach-grid" data-aos="custom-animation">
        <div className="approach-col">
          <p className="pre-title tag">{t("approach:name")}</p>
          <h1 className="beta">{t("approach:title")}</h1>
          <p className="intro-text">{t("approach:intro-text")}</p>
        </div>
        <div className="approach-col" data-aos="custom-animation">
          <ul className="approach-steps">
            <Step
              aos="custom-animation"
              number={1}
              title="approach:step1:title"
              text="approach:step1:text"
            />
            <Step
              aos="custom-animation"
              number={2}
              title="approach:step2:title"
              text="approach:step2:text"
            />
            <Step
              aos="custom-animation"
              number={3}
              title="approach:step3:title"
              text="approach:step3:text"
            />
          </ul>
        </div>
      </div>
      <h3 className="delta centered" data-aos="custom-animation">
        {t("approach:section2:title")}
      </h3>
      <div className="block-list is-simple" data-aos="custom-animation">
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim1"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim2"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim3"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim4"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim5"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim6"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim7"
          icon={<Tick />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="approach:claim8"
          icon={<Tick />}
        />
      </div>
    </Brick>
  );
};

export default Approach;
