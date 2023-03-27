import React from "react";
import useTranslations from "../../hooks/useTranslations";
import SimpleLayout from "../layouts/SimpleLayout";
import AnimatedGrid from "../components/AnimatedGrid";

const CookiesPage = () => {
  const t = useTranslations();

  return (
    <SimpleLayout>
      <div className="banner">
        <AnimatedGrid />
        <div className="inner-wrapper">
          <h1 className="beta">{t("info:cookies")}</h1>
        </div>
      </div>
      <div className="generic-content">
        <div className="inner-wrapper">
          <h2 className="gamma">{t("cookies:section1:title1")}</h2>
          <p>{t("cookies:section1:text1")}</p>
          <h3 className="delta">{t("cookies:section1:title2")}</h3>
          <p>{t("cookies:section1:text2")}</p>
          <p>{t("cookies:section1:text3")}</p>
          <h3 className="delta">{t("cookies:section1:title3")}</h3>
          <p>{t("cookies:section1:text4")}</p>
          <h3 className="delta">{t("cookies:section1:title4")}</h3>
          <p>
            <strong>{t("cookies:section1:text5")}</strong>
          </p>
          <ul className="basic-list">
            <li>{t("cookies:section1:item1")}</li>
            <li>{t("cookies:section1:item2")}</li>
          </ul>
          <p>
            <strong>{t("cookies:section1:text6")}</strong>
          </p>
          <ul className="basic-list">
            <li>{t("cookies:section1:item3")}</li>
            <li>{t("cookies:section1:item4")}</li>
          </ul>
          <p>
            <strong>{t("cookies:section1:text7")}</strong>
          </p>
          <ul className="basic-list">
            <li>{t("cookies:section1:item5")}</li>
            <li>{t("cookies:section1:item6")}</li>
            <li>{t("cookies:section1:item7")}</li>
            <li>{t("cookies:section1:item8")}</li>
          </ul>

          <h2 className="gamma">{t("cookies:section2:title1")}</h2>
          <p>{t("cookies:section2:text1")}</p>
          <div className="basic-table-wrapper">
            <table className="basic-table">
              <tr>
                <th>{t("cookies:section2:table-header1")}</th>
                <th>{t("cookies:section2:table-header2")}</th>
                <th>{t("cookies:section2:table-header3")}</th>
                <th>{t("cookies:section2:table-header4")}</th>
                <th>{t("cookies:section2:table-header5")}</th>
              </tr>
              <tr>
                <td>{t("cookies:section2:table-cell1")}</td>
                <td>{t("cookies:section2:table-cell2")}</td>
                <td>{t("cookies:section2:table-cell3")}</td>
                <td>{t("cookies:section2:table-cell4")}</td>
                <td>{t("cookies:section2:table-cell5")}</td>
              </tr>
              <tr>
                <td>{t("cookies:section2:table-cell21")}</td>
                <td>{t("cookies:section2:table-cell22")}</td>
                <td>{t("cookies:section2:table-cell23")}</td>
                <td>{t("cookies:section2:table-cell24")}</td>
                <td>{t("cookies:section2:table-cell25")}</td>
              </tr>
            </table>
          </div>
          <h3 className="delta">{t("cookies:section2:title2")}</h3>
          <p>{t("cookies:section2:text2")}</p>
          <p>
            <strong>{t("cookies:section2:text3")}</strong>
          </p>
          <ul className="basic-list">
            <li>
              {t("cookies:section2:item1", {
                a: t => (
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.google.com/chrome/answer/95647"
                  >
                    {t}
                  </a>
                ),
              })}
            </li>
            <li>
              {t("cookies:section2:item2", {
                a: t => (
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  >
                    {t}
                  </a>
                ),
              })}
            </li>
            <li>
              {t("cookies:section2:item3", {
                a: t => (
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  >
                    {t}
                  </a>
                ),
              })}
            </li>
            <li>
              {t("cookies:section2:item4", {
                a: t => (
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  >
                    {t}
                  </a>
                ),
              })}
            </li>
            <li>
              {t("cookies:section2:item5", {
                a: t => (
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://help.opera.com/en/latest/web-preferences/"
                  >
                    {t}
                  </a>
                ),
              })}
            </li>
          </ul>
          <p>{t("cookies:section2:text4")}</p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default CookiesPage;
