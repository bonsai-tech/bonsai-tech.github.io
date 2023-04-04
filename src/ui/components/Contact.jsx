import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import ContactForm from "./ContactForm";
import AnimatedGrid from "./AnimatedGrid";

const Contact = () => {
  const t = useTranslations();

  return (
    <Brick skin="dark" className="contact" id="contact">
      <div className="contact-col" data-aos="custom-animation">
        <h2 className="gamma" data-aos="custom-animation">
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
      <div className="contact-col" data-aos="custom-animation">
        <ContactForm />
      </div>
      <AnimatedGrid dark />
    </Brick>
  );
};

export default Contact;
