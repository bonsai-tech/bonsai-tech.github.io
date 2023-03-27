import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import useScrollRevealEffect from "../../hooks/effects/useScrollRevealEffect";
import ContactForm from "./ContactForm";

const Contact = () => {
  const t = useTranslations();
  const titleRef = useScrollRevealEffect();
  const blockRef = useScrollRevealEffect({ delay: 0.3, stagger: 0.1 });

  return (
    <Brick skin="dark" className="contact" id="contact">
      <div className="contact-col">
        <h2 className="gamma" ref={titleRef}>
          {t("contact:title")}
        </h2>
        <div className="map">
          <h4 className="map-title">{t("map:title")}</h4>
          <p className="text">{t("map:address1")}</p>
          <p className="text">{t("map:address2")}</p>
          <iframe
            src="https://snazzymaps.com/embed/456663"
            title="Bonsai office map"
          ></iframe>
        </div>
      </div>
      <div className="contact-col">
        <ContactForm />
      </div>
    </Brick>
  );
};

export default Contact;
