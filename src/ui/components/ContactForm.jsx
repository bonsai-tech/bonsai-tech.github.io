import React from "react";
import useTranslations from "../../hooks/useTranslations";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import FormField from "./FormField";
import FormInput from "./FormInput";
import Button from "./buttons/Button";
import Checkbox from "./Checkbox";
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg";

const ContactForm = () => {
  const t = useTranslations();
  const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <div className="contact-form" ref={blockRef}>
      <form>
        <FormField
          labelFor="name"
          label="contact:name"
          field={
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="contact:whats-your-name"
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
              name="company"
              placeholder="contact:what-company-work"
            />
          }
        />
        <FormField
          labelFor="email"
          label="contact:email"
          errorText="contact:error-email"
          field={
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="contact:give-us-email"
            />
          }
        />

        <FormField
          labelFor="purpose"
          label="contact:purpose"
          field={
            <>
              <Checkbox id="dev-team" value="check-1" text="contact:purpose1" />
              <Checkbox
                id="build-scratch"
                value="check-2"
                text="contact:purpose2"
              />
              <Checkbox id="redesign" value="check-3" text="contact:purpose3" />
              <Checkbox
                id="something-else"
                value="check-4"
                text="contact:purpose4"
              />
            </>
          }
        />

        <FormField
          labelFor="budget"
          label="contact:budget"
          field={
            <div className="form-select">
              <select id="budget" name="budget" className="select">
                <option value="" disabled selected hidden>
                  {t("contact:tell-us-budget")}
                </option>
                <option value="1">5€-2000€</option>
                <option value="2">2000€-5000€</option>
                <option value="3">5000€-10000€</option>
                <option value="4">10000€-50000€</option>
                <option value="5">+50000€</option>
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
            />
          }
        />
        <Button onClick="" label="contact:lets-work-together" type="submit" />
      </form>
      <p className="text" ref={blockRef}>
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
