import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const FormField = ({ label, labelFor, field, errorText }) => {
  const t = useTranslations();

  return (
    <div className={cx("form-field", { "has-error": errorText })}>
      <label htmlFor={labelFor} className="form-label">
        {t(label)}
      </label>
      {field}
      {errorText && <p className="error-text">{t(errorText)}</p>}
    </div>
  );
};

export default FormField;
