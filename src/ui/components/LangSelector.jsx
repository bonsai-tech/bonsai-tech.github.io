import React from "react";
import cx from "classnames";
import useSwitchLanguage from "../../hooks/useSwitchLanguage";
import { useIntl } from "react-intl";

const LangSelector = () => {
  const switchToEn = useSwitchLanguage("en");
  const switchToEs = useSwitchLanguage("es");
  const { locale } = useIntl();
  return (
    <div className="lang-selector">
      <button
        className={cx("lang-item", { active: locale === "en" })}
        onClick={switchToEn}
        aria-label="button language selection"
        disabled={locale === "en"}
      >
        ENG
      </button>
      <button
        className={cx("lang-item", { active: locale === "es" })}
        onClick={switchToEs}
        aria-label="button language selection"
        disabled={locale === "es"}
      >
        SPA
      </button>
    </div>
  );
};

export default LangSelector;
