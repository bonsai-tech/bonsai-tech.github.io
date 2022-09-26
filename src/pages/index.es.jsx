import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/es.json";
import HomePage from "../ui/pages/HomePage";

const IndexPage = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/es/"
      />
      <AppWrapper {...props} lang="es">
        <HomePage />
      </AppWrapper>
    </>
  );
};

export default IndexPage;
