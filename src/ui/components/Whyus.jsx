import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "./Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import investment from "../../assets/icons/icon-investment.svg";
import efficient from "../../assets/icons/icon-efficient.svg";
import shield from "../../assets/icons/icon-shield.svg";
import phases from "../../assets/icons/icon-phases.svg";
import speed from "../../assets/icons/icon-speed.svg";
import people from "../../assets/icons/icon-people.svg";
import IconBlock from "./IconBlock";

const Whyus = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();
  const blockRef = useScrollRevealEffect({
    delay: 0.2,
    stagger: 0.1,
    toggleClass: "appear",
  });

  return (
    <Brick skin="dark" className="whyus">
      <h1 className="beta" ref={titleRef}>
        {t("claims:title")}
      </h1>
      <div className="whyus-group">
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={investment}
          title="claims:section1:title"
          text="claims:section1:text1"
        />
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={speed}
          text="claims:section2:text1"
          title="claims:section2:title"
        />
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={shield}
          text="claims:section3:text1"
          title="claims:section3:title"
        />
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={phases}
          text="claims:section4:text1"
          title="claims:section4:title"
        />
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={efficient}
          text="claims:section5:text1"
          title="claims:section5:title"
        />
        <IconBlock
          ref={blockRef}
          alt="diamond"
          image={people}
          text="claims:section6:text1"
          title="claims:section6:title"
        />
      </div>
    </Brick>
  );
};

export default Whyus;
