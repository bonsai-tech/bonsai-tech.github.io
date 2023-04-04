import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

import { ReactComponent as People } from "../../assets/icons/icon-people.svg";
import { ReactComponent as Money } from "../../assets/icons/icon-money.svg";
import { ReactComponent as Clock } from "../../assets/icons/icon-clock.svg";
import { ReactComponent as TagUser } from "../../assets/icons/icon-tag-user.svg";
import BlockItem from "./BlockItem";
import BlockItemSimple from "./BlockItemSimple";

const Startups = () => {
  const t = useTranslations();

  return (
    <Brick className="startups" id="startups" aos="custom-animation">
      <div className="intro-heading centered" data-aos="custom-animation">
        <p className="pre-title tag">{t("startups:name")}</p>
        <h1 className="beta">{t("startups:title")}</h1>
      </div>
      <h3 className="delta centered" data-aos="custom-animation">
        {t("startups:why")}
      </h3>
      <p className="text centered" data-aos="custom-animation">
        {t("startups:why:text")}
      </p>
      <div className="block-list" data-aos="custom-animation">
        <BlockItem
          aos="custom-animation"
          title="startups:service1:title"
          text="startups:service1:text"
          icon={<People />}
        />
        <BlockItem
          aos="custom-animation"
          title="startups:service2:title"
          text="startups:service2:text"
          icon={<Money />}
        />
        <BlockItem
          aos="custom-animation"
          title="startups:service3:title"
          text="startups:service3:text"
          icon={<Clock />}
        />
        <BlockItem
          aos="custom-animation"
          title="startups:service4:title"
          text="startups:service4:text"
          icon={<TagUser />}
        />
      </div>
      <h3 className="delta centered" data-aos="custom-animation">
        {t("startups:how")}
      </h3>
      <p className="text centered" data-aos="custom-animation">
        {t("startups:how:text")}
      </p>
      <div className="block-list is-simple" data-aos="custom-animation">
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service5:title"
          number="1"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service6:title"
          number="2"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service7:title"
          number="3"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service8:title"
          number="4"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service9:title"
          number="5"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service10:title"
          number="6"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service11:title"
          number="7"
        />
        <BlockItemSimple
          aos="custom-animation"
          text="startups:service12:title"
          number="8"
        />
      </div>
    </Brick>
  );
};

export default Startups;
