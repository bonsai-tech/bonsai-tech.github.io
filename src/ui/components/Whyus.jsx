import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "./Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import diamond1 from "../../assets/icons/icon-diamond1.svg";
import diamond2 from "../../assets/icons/icon-diamond2.svg";
import diamond3 from "../../assets/icons/icon-diamond3.svg";
import diamond4 from "../../assets/icons/icon-diamond4.svg";
import diamond5 from "../../assets/icons/icon-diamond5.svg";
import diamond6 from "../../assets/icons/icon-diamond6.svg";
import IconBlock from "./IconBlock";

const Whyus = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();

  return (
    <Brick skin="dark" className="whyus">
      <h1 className="beta" ref={titleRef}>
        {t("claims:title")}
      </h1>
      <div className="whyus-group">
        <IconBlock
          alt="diamond"
          image={diamond1}
          title="claims:section1:title"
          text="claims:section1:text1"
        />
        <IconBlock
          alt="diamond"
          image={diamond1}
          text="claims:section2:text1"
          title="claims:section2:title"
        />
        <IconBlock
          alt="diamond"
          image={diamond1}
          text="claims:section3:text1"
          title="claims:section3:title"
        />
        <IconBlock
          alt="diamond"
          image={diamond1}
          text="claims:section4:text1"
          title="claims:section4:title"
        />
        <IconBlock
          alt="diamond"
          image={diamond1}
          text="claims:section5:text1"
          title="claims:section5:title"
        />
        <IconBlock
          alt="diamond"
          image={diamond1}
          text="claims:section6:text1"
          title="claims:section6:title"
        />
      </div>
    </Brick>
  );
};

export default Whyus;
