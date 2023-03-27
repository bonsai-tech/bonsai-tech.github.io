import React from "react";
import useTranslations from "../../hooks/useTranslations";
import SimpleLayout from "../layouts/SimpleLayout";
import AnimatedGrid from "../components/AnimatedGrid";

const PrivacyPage = () => {
  const t = useTranslations();

  return (
    <SimpleLayout>
      <div className="banner">
        <AnimatedGrid />
        <div className="inner-wrapper">
          <h1 className="beta">{t("info:privacy")}</h1>
        </div>
      </div>
      <div className="generic-content">
        <div className="inner-wrapper">
          <h2 className="gamma">{t("privacy:section1:title1")}</h2>
          <ul className="basic-list">
            <li>{t("privacy:section1:item1")}</li>
            <li>{t("privacy:section1:item2")}</li>
            <li>{t("privacy:section1:item3")}</li>
            <li>{t("privacy:section1:item4")}</li>
            <li>{t("privacy:section1:item5")}</li>
            <li>{t("privacy:section1:item6")}</li>
          </ul>
          <h3 className="delta">{t("privacy:section1:title2")}</h3>
          <p>{t("privacy:section1:text1")}</p>
          <h3 className="delta">{t("privacy:section1:title3")}</h3>
          <p>{t("privacy:section1:text2")}</p>

          <h2 className="gamma">{t("privacy:section2:title1")}</h2>
          <p>{t("privacy:section2:text1")}</p>
          <p>{t("privacy:section2:text2")}</p>
          <h3 className="delta">{t("privacy:section2:title2")}</h3>
          <p>{t("privacy:section2:text3")}</p>

          <h2 className="gamma">{t("privacy:section3:title1")}</h2>
          <p>{t("privacy:section3:text1")}</p>
          <h3 className="delta">{t("privacy:section3:title2")}</h3>
          <p>{t("privacy:section3:text2")}</p>
          <h3 className="delta">{t("privacy:section3:title3")}</h3>
          <p>{t("privacy:section3:text3")}</p>

          <h2 className="gamma">{t("privacy:section4:title1")}</h2>
          <p>{t("privacy:section4:text1")}</p>

          <h2 className="gamma">{t("privacy:section5:title1")}</h2>
          <p>{t("privacy:section5:text1")}</p>
          <h2 className="gamma">{t("privacy:section6:title1")}</h2>
          <p>{t("privacy:section6:text1")}</p>
          <h3 className="delta">{t("privacy:section6:title2")}</h3>
          <p>{t("privacy:section6:text2")}</p>

          <h2 className="gamma">{t("privacy:section7:title1")}</h2>
          <p>{t("privacy:section7:text1")}</p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default PrivacyPage;
