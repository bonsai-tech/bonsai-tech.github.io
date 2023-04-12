import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Link from "../components/LinkLocalized";

const Footer = () => {
  const t = useTranslations();

  return (
    <header className="footer">
      <div className="wrapper">
        <div className="left-slot">
          <Link className="footer-caption" to="/privacy">
            {t("info:privacy")}
          </Link>
          <Link className="footer-caption" to="/legal">
            {t("info:legal")}
          </Link>
          <Link className="footer-caption" to="/cookies">
            {t("info:cookies")}
          </Link>
        </div>
        <div className="right-slot">
          <span className="footer-caption">
            bonsai 2023 © {t("info:all-rights-reserved")}
          </span>
          <span className="footer-caption">{t("info:based-madrid")}</span>
        </div>
      </div>
    </header>
  );
};

export default Footer;
