import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import PrivacyPage from "../ui/pages/PrivacyPage";

const Privacy = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/es/privacy"
      />
      <AppWrapper {...props} lang="es">
        <PrivacyPage />
      </AppWrapper>
    </>
  );
};

export default Privacy;
