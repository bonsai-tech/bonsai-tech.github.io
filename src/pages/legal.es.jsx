import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import LegalPage from "../ui/pages/LegalPage";

const Legal = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.legalTitle}
        description={metaTags.legal}
        page="/es/legal"
      />
      <AppWrapper {...props} lang="es">
        <LegalPage />
      </AppWrapper>
    </>
  );
};

export default Legal;
