import React, { useState } from "react";
import useTranslations from "../../hooks/useTranslations";
import FormField from "./FormField";
import FormInput from "./FormInput";
import Button from "./buttons/Button";
import Checkbox from "./Checkbox";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg";
import useFormSubmit from "../../hooks/useFormSubmit";
import { validateForm } from "../../utils/validation";

const BUDGETS = {
  low: "Less than 10.000€",
  midLow: "10.000€ - 25.000€",
  mid: "25.000€ - 50.000€",
  midHigh: "50.000€ - 100.000€",
  high: "100.000€ - 200.000€",
  extraHigh: "More than 200.000€",
};

const ContactForm = () => {
  const [purposes, setPurposes] = useState({});
  const [info, setInfo] = useState({});
  const [errors, setErrors] = useState({});

  const [loading, submit, result] = useFormSubmit();

  const clearError = key => {
    setErrors({ ...errors, [key]: undefined });
  };

  const updatePurposes = (key, value) => {
    const newPurposes = { ...purposes };
    newPurposes[key] = value;
    const purposesKeys = Object.keys(newPurposes);
    const purposesString = purposesKeys.reduce(
      (text, key) => text + (newPurposes[key] ? `, ${key}` : ""),
      "",
    );
    setPurposes(newPurposes);
    updateInfo("purpose", purposesString);
  };

  const updateInfo = (key, value) => {
    clearError(key); // Remove the error if editing the field
    const newInfo = { ...info };
    newInfo[key] = value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    const formErrors = validateForm(info);
    setErrors(formErrors);
    if (Object.keys(formErrors).find(key => !!formErrors[key])) return;
    submit(info);
  };

  const t = useTranslations();

  return (
    <div className="contact-form">
      <form>
        <FormField
          labelFor="name"
          label={"contact:name"}
          errorText={errors.name}
          required
          field={
            <FormInput
              type="text"
              id="name"
              name={info.name}
              placeholder="contact:whats-your-name"
              onChange={ev => updateInfo("name", ev.target.value)}
            />
          }
        />
        <FormField
          labelFor="company"
          label="contact:company"
          field={
            <FormInput
              type="text"
              id="company"
              name={info.company}
              placeholder="contact:what-company-work"
              onChange={ev => updateInfo("company", ev.target.value)}
            />
          }
        />
        <FormField
          labelFor="email"
          label="contact:email"
          errorText={errors.email}
          required
          field={
            <FormInput
              type="email"
              id="email"
              name={info.email}
              placeholder="contact:give-us-email"
              onChange={ev => updateInfo("email", ev.target.value)}
            />
          }
        />

        <FormField
          labelFor="purpose"
          label="contact:purpose"
          errorText={errors.purpose}
          required
          className="check-group"
          field={
            <>
              <Checkbox
                id="dev-team"
                value="check-1"
                text="contact:purpose1"
                onChange={ev => updatePurposes(ev.target.id, ev.target.checked)}
              />
              <Checkbox
                id="build-from-scratch"
                value="check-2"
                text="contact:purpose2"
                onChange={ev => updatePurposes(ev.target.id, ev.target.checked)}
              />
              <Checkbox
                id="redesign"
                value="check-3"
                text="contact:purpose3"
                onChange={ev => updatePurposes(ev.target.id, ev.target.checked)}
              />
              <Checkbox
                id="something-else"
                value="check-4"
                text="contact:purpose4"
                onChange={ev => updatePurposes(ev.target.id, ev.target.checked)}
              />
            </>
          }
        />

        <FormField
          labelFor="budget"
          label="contact:budget"
          field={
            <div className="form-select">
              <select
                id="budget"
                name="budget"
                className="select"
                onChange={ev => updateInfo("budget", ev.target.value)}
              >
                <option value="0" disabled hidden>
                  {t("contact:tell-us-budget")}
                </option>
                <option value={BUDGETS.low}>{t("budget:low")}</option>
                <option value={BUDGETS.midLow}>{BUDGETS.midLow}</option>
                <option value={BUDGETS.mid}>{BUDGETS.mid}</option>
                <option value={BUDGETS.midHigh}>{BUDGETS.midHigh}</option>
                <option value={BUDGETS.high}>{BUDGETS.high}</option>
                <option value={BUDGETS.extraHigh}>
                  {t("budget:extraHigh")}
                </option>
              </select>
              <Arrow className="arrow" />
            </div>
          }
        />
        <FormField
          labelFor="tell-us-more"
          label="contact:how-can-we-help-you"
          field={
            <textarea
              className="textarea"
              id="tell-us-more"
              name="tell-us-more"
              placeholder={t("contact:tell-us-more")}
              value={info.message}
              onChange={ev => updateInfo("message", ev.target.value)}
            />
          }
        />
      </form>

      <div className="actions">
        <Button
          onClick={handleSubmit}
          label="contact:lets-work-together"
          disabled={!!result}
        />
        {loading && (
          <div className="spinner-box">
            <div className="spinner" />
          </div>
        )}
        {result}
      </div>

      <p className="text">
        {t("contact:extra-text", {
          a: t => (
            <a className="link" href="mailto:hello@bonsaitech.io">
              {t}
            </a>
          ),
        })}
      </p>
    </div>
  );
};

export default ContactForm;
