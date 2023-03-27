import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import { ReactComponent as People } from "../../assets/icons/icon-people.svg";
import { ReactComponent as Money } from "../../assets/icons/icon-money.svg";
import { ReactComponent as Clock } from "../../assets/icons/icon-clock.svg";
import { ReactComponent as TagUser } from "../../assets/icons/icon-tag-user.svg";
import BlockItem from "./BlockItem";
import BlockItemSimple from "./BlockItemSimple";

const Startups = () => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect();
  // const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick className="startups" id="startups">
      <div className="intro-heading centered" ref={blockRef}>
        <p className="pre-title tag">{t("startups:name")}</p>
        <h1 className="beta">{t("startups:title")}</h1>
      </div>
      <h3 className="delta centered" ref={blockRef}>
        {t("startups:why")}
      </h3>
      <p className="text centered" ref={blockRef}>
        {t("startups:why:text")}
      </p>
      <div className="block-list">
        <BlockItem
          title="startups:service1:title"
          text="startups:service1:text"
          icon={<People />}
          ref={blockRef}
        />
        <BlockItem
          title="startups:service2:title"
          text="startups:service2:text"
          icon={<Money />}
          ref={blockRef}
        />
        <BlockItem
          title="startups:service3:title"
          text="startups:service3:text"
          icon={<Clock />}
          ref={blockRef}
        />
        <BlockItem
          title="startups:service4:title"
          text="startups:service4:text"
          icon={<TagUser />}
          ref={blockRef}
        />
      </div>
      <h3 className="delta centered" ref={blockRef}>
        {t("startups:how")}
      </h3>
      <p className="text centered" ref={blockRef}>
        {t("startups:how:text")}
      </p>
      <div className="block-list is-simple">
        <BlockItemSimple
          text="startups:service5:title"
          number="1"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service6:title"
          number="2"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service7:title"
          number="3"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service8:title"
          number="4"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service9:title"
          number="5"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service10:title"
          number="6"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service11:title"
          number="7"
          ref={blockRef}
        />
        <BlockItemSimple
          text="startups:service12:title"
          number="8"
          ref={blockRef}
        />
      </div>
    </Brick>
  );
};

export default Startups;
