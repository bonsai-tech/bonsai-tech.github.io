import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ description, page, title }) => {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="initial-scale=1.0 width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="canonical" href={"https://bonsaitech.io/" + page} />
      <meta property="og:site_name" content="Bonsai" />
      <meta property="og:url" content={"https://bonsaitech.io/" + page} />
      <meta property="og:title" content="Bonsai" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        itemprop="image"
        content="https://bonsaitech.io/og/og-921x518.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="https://bonsaitech.io/og/og-1200x1200.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="https://bonsaitech.io/og/og-400x400.png"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="https://bonsaitech.io/og/og-256x256.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://bonsaitech.io/og/og-921x518.png"
      />
      <meta property="twitter:title" content="Bonsai" />
      <meta name="twitter:image:alt" content="Bonsai" />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default HelmetComponent;
