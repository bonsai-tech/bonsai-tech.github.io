import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n";
import PrivacyPage from "../ui/pages/PrivacyPage";

const Privacy = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/es/"
      />
      <AppWrapper {...props} lang="es">
        <PrivacyPage />
      </AppWrapper>
    </>
  );
};

export default Privacy;
