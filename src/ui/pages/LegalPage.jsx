import React from "react";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/grid.png";
import SimpleLayout from "../layouts/SimpleLayout";

const LegalPage = () => {
  const t = useTranslations();

  return (
    <SimpleLayout>
      <div className="banner">
        <img src={pattern} alt="pattern" className="pattern" />

        <div className="inner-wrapper">
          <h1 className="beta">{t("info:legal")}</h1>
        </div>
      </div>
      <div className="generic-content">
        <div className="inner-wrapper">
          <p>{t("legal:section1:text1")}</p>
          <ul className="basic-list">
            <li>{t("legal:section1:item1")}</li>
            <li>{t("legal:section1:item2")}</li>
            <li>{t("legal:section1:item3")}</li>
            <li>{t("legal:section1:item4")}</li>
            <li>{t("legal:section1:item5")}</li>
            <li>{t("legal:section1:item6")}</li>
          </ul>
          <h3 className="delta">{t("legal:section2:title1")}</h3>
          <p>{t("legal:section2:text1")}</p>
          <p>{t("legal:section2:text2")}</p>
          <p>{t("legal:section2:text3")}</p>
          <h3 className="delta">{t("legal:section3:title1")}</h3>
          <p>{t("legal:section3:text1")}</p>
          <p>
            {t("legal:section3:text2", {
              a: t => (
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bonsaitech.io/cookies"
                >
                  {t}
                </a>
              ),
            })}
          </p>
          <p>{t("legal:section3:text3")}</p>
          <p>{t("legal:section3:text4")}</p>
          <p>{t("legal:section3:text5")}</p>
          <h3 className="delta">{t("legal:section4:title1")}</h3>
          <p>{t("legal:section4:text1")}</p>
          <p>{t("legal:section4:text2")}</p>
          <p>{t("legal:section4:text3")}</p>
          <p>{t("legal:section4:text4")}</p>
          <p>{t("legal:section4:text5")}</p>
          <p>{t("legal:section4:text6")}</p>
          <h3 className="delta">{t("legal:section5:title1")}</h3>
          <p>{t("legal:section5:text1")}</p>
          <h3 className="delta">{t("legal:section6:title1")}</h3>
          <p>{t("legal:section6:text1")}</p>
          <h3 className="delta">{t("legal:section7:title1")}</h3>
          <p>{t("legal:section7:text1")}</p>
          <p>{t("legal:section7:text2")}</p>
          <p>{t("legal:section7:text3")}</p>
          <p>{t("legal:section7:text4")}</p>
          <p>{t("legal:section7:text5")}</p>
          <p>{t("legal:section7:text6")}</p>
          <p>{t("legal:section7:text7")}</p>
          <p>{t("legal:section7:text8")}</p>
          <h3 className="delta">{t("legal:section8:title1")}</h3>
          <p>{t("legal:section8:text1")}</p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default LegalPage;
