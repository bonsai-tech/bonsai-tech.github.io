import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
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

  return (
    <Brick className="services" id="services">
      <div className="intro-heading" data-aos="custom-animation">
        <p className="pre-title tag">{t("services:name")}</p>
        <h1 className="beta">{t("services:title")}</h1>
      </div>
      <div className="block-list" data-aos="custom-animation">
        <BlockItem
          aos="custom-animation"
          title="services:service1:title"
          text="services:service1:text"
          icon={<PenTool />}
        />
        <BlockItem
          aos="custom-animation"
          title="services:service2:title"
          text="services:service2:text"
          icon={<Code />}
        />
        <BlockItem
          aos="custom-animation"
          title="services:service3:title"
          text="services:service3:text"
          icon={<People />}
        />
        <BlockItem
          aos="custom-animation"
          title="services:service4:title"
          text="services:service4:text"
          icon={<Health />}
        />
      </div>
      <h3 className="delta centered" data-aos="custom-animation">
        {t("services:section2:title")}
      </h3>
      <div className="block-list is-simple is-wide" data-aos="custom-animation">
        <BlockItemSimple
          aos="custom-animation"
          text="services:service5:title"
          icon={<Shipping />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="services:service6:title"
          icon={<Verify />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="services:service7:title"
          icon={<Star />}
        />
        <BlockItemSimple
          aos="custom-animation"
          text="services:service8:title"
          icon={<Signpost />}
        />
      </div>
    </Brick>
  );
};

export default Services;
