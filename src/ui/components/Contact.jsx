import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import pattern from "../../assets/images/pattern3.svg";
import ButtonLink from "./buttons/ButtonLink";
import { ReactComponent as Whatsapp } from "../../assets/icons/icon-whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/icons/icon-telegram.svg";
import Card from "./Card";

const Contact = () => {
  const t = useTranslations();

  return (
    <Brick skin="grey" className="contact" id="contact">
      <h1 className="beta">{t("contact:title")}</h1>
      <img src={pattern} alt="pattern" className="pattern" />
      <div className="card-grid">
        <Card
          className="w-50"
          title="contact:lets-see"
          content={
            <>
              <p className="basic-text">{t("contact:lets-see-text")}</p>
              <ButtonLink
                href="https://calendly.com/ignacioramoshowell/30min"
                label="action:program-meeting"
                external
              />
            </>
          }
        />

        <Card
          className="w-50"
          title="contact:send-email"
          content={
            <>
              <p className="basic-text">{t("contact:send-email-text")}</p>
              <ButtonLink href="#" label="action:ask-budget" />
            </>
          }
        />

        <Card
          title="contact:lets-chat"
          content={
            <>
              <p className="basic-text">{t("contact:lets-chat-text")}</p>
              <ButtonLink href="#" icon={<Whatsapp />} />
              <ButtonLink href="#" icon={<Telegram />} />
            </>
          }
        />
      </div>
    </Brick>
  );
};

export default Contact;
