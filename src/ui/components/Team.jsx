import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "./Brick";
import sara from "../../assets/images/sara-def.png";
import ignacio from "../../assets/images/ignacio-def.png";
import juanlu from "../../assets/images/juanlu-def.png";
import antonio from "../../assets/images/antonio-def.png";
import CardMember from "./CardMember";
import { ReactComponent as Cube } from "../../assets/icons/icon-cube-scan.svg";
import { ReactComponent as Refresh } from "../../assets/icons/icon-refresh.svg";
import { ReactComponent as Flash } from "../../assets/icons/icon-flash.svg";
import { ReactComponent as RulerPen } from "../../assets/icons/icon-ruler-pen.svg";
import BlockItemSimple from "./BlockItemSimple";

const Team = () => {
  const t = useTranslations();

  return (
    <Brick className="team-brick" id="team" aos="custom-animation">
      <div className="intro-heading centered" data-aos="custom-animation">
        <p className="pre-title tag">{t("team:pretitle")}</p>
        <h2 className="beta">{t("team:title")}</h2>
      </div>
      <div className="team">
        <CardMember
          name="Ignacio Ramos"
          position={t("team:position:ignacio")}
          description={t("team:description:ignacio")}
          image={ignacio}
          aos="custom-animation"
        />
        <CardMember
          name="Juan Luis García"
          position={t("team:position:juanlu")}
          description={t("team:description:juanlu")}
          image={juanlu}
          aos="custom-animation"
        />
        <CardMember
          name="Sara Moreno"
          position={t("team:position:sara")}
          description={t("team:description:sara")}
          image={sara}
          aos="custom-animation"
        />

        <CardMember
          name="Antonio Esquembre"
          position={t("team:position:antonio")}
          description={t("team:description:antonio")}
          image={antonio}
          aos="custom-animation"
        />
      </div>
      <h3 className="delta centered" data-aos="custom-animation">
        {t("team:section2:title")}
      </h3>
      <div className="block-list is-simple is-wide" data-aos="custom-animation">
        <BlockItemSimple text="team:claim1" icon={<Cube />} />
        <BlockItemSimple text="team:claim2" icon={<Refresh />} />
        <BlockItemSimple text="team:claim3" icon={<Flash />} />
        <BlockItemSimple text="team:claim4" icon={<RulerPen />} />
      </div>
    </Brick>
  );
};

export default Team;
