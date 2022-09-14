import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Test = ({}) => {
  const t = useTranslations();

  return (
    <div>
      <h1 className="test">{t("hero:title")}</h1>
    </div>
  );
};

export default Test;
