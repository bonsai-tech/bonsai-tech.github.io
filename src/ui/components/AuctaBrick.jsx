import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";
import chromeBar from "../../assets/images/chrome-bar.png";
import ButtonLink from "./buttons/ButtonLink";

const AuctaBrick = () => {
  const t = useTranslations();

  return (
    <Brick className="aucta" skin="dark" id="aucta">
      <div className="info" data-aos="custom-animation">
        <h2 className="gamma">{t("aucta:title")}</h2>
        <div className="button-group">
          <ButtonLink
            href="https://daniel-seiler.com/aucta.html"
            label="aucta:show-case-study"
            external
          />
          <ButtonLink
            href="https://aucta.io/"
            label="aucta:go"
            external
            clear
          />
        </div>
      </div>
      <div className="demo-wrapper" data-aos="custom-animation">
        <img className="demo-topBar" src={chromeBar} alt="browser" />
        <iframe
          title="Engine Demo Aucta"
          src="https://player.aucta.io/player.html?distribution=e023bfc1-42f7-4246-840f-584cbd0d5ab0&disable-multiuser=true&disable-audio=true&disable-settings=true"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Brick>
  );
};

export default AuctaBrick;
