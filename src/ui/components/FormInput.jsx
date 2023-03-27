import React from "react";
import useTranslations from "../../hooks/useTranslations";

const FormInput = ({ type, id, name, placeholder }) => {
  const t = useTranslations();

  return (
    <input
      className="form-input"
      type={type}
      id={id}
      name={name}
      placeholder={t(placeholder)}
    />
  );
};

export default FormInput;
