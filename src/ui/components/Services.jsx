import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import { ReactComponent as PenTool } from "../../assets/icons/icon-pentool.svg";
import { ReactComponent as Code } from "../../assets/icons/icon-code.svg";
import { ReactComponent as People } from "../../assets/icons/icon-people.svg";
import { ReactComponent as Health } from "../../assets/icons/icon-health.svg";
import { ReactComponent as Shipping } from "../../assets/icons/icon-shipping.svg";
import { ReactComponent as Verify } from "../../assets/icons/icon-verify.svg";
import { ReactComponent as Star } from "../../assets/icons/icon-star.svg";
import { ReactComponent as Signpost } from "../../assets/icons/icon-signpost.svg";
import BlockItem from "./BlockItem";
import BlockItemSimple from "./BlockItemSimple";

const Services = () => {
  const t = useTranslations();
  // const blockRef = useScrollRevealEffect();
  const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick className="services" id="services">
      <div className="intro-heading" ref={blockRef}>
        <p className="pre-title tag">{t("services:name")}</p>
        <h1 className="beta">{t("services:title")}</h1>
      </div>
      <div className="block-list">
        <BlockItem
          title="services:service1:title"
          text="services:service1:text"
          icon={<PenTool />}
          ref={blockRef}
        />
        <BlockItem
          title="services:service2:title"
          text="services:service2:text"
          icon={<Code />}
          ref={blockRef}
        />
        <BlockItem
          title="services:service3:title"
          text="services:service3:text"
          icon={<People />}
          ref={blockRef}
        />
        <BlockItem
          title="services:service4:title"
          text="services:service4:text"
          icon={<Health />}
          ref={blockRef}
        />
      </div>
      <h3 className="delta centered" ref={blockRef}>
        {t("services:section2:title")}
      </h3>
      <div className="block-list is-simple is-wide">
        <BlockItemSimple
          text="services:service5:title"
          icon={<Shipping />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="services:service6:title"
          icon={<Verify />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="services:service7:title"
          icon={<Star />}
          ref={blockRef}
        />
        <BlockItemSimple
          text="services:service8:title"
          icon={<Signpost />}
          ref={blockRef}
        />
      </div>
    </Brick>
  );
};

export default Services;
