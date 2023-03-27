import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Tick } from "../../assets/icons/icon-tick.svg";

const Checkbox = ({ id, value, text }) => {
  const t = useTranslations();

  return (
    <label className="checkbox">
      <input type="checkbox" id={id} value={value} />
      {t(text)}
      <Tick className="checkmark" />
    </label>
  );
};

export default Checkbox;
