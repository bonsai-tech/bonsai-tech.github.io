import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import CookiesPage from "../ui/pages/CookiesPage";

const Cookies = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/es/cookies"
      />
      <AppWrapper {...props} lang="es">
        <CookiesPage />
      </AppWrapper>
    </>
  );
};

export default Cookies;
