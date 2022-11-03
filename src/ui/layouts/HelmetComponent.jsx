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

      <title>{title}</title>
      <link rel="canonical" href={"https://bonsaitech.io/" + page} />
      <meta property="og:title" content="Bonsai Tech" />
      <meta property="og:site_name" content="Bonsai" />
      <meta property="og:url" content={"https://bonsaitech.io/" + page} />
      <meta
        name="description"
        content="Bonsai - Web development agency based in Madrid"
      />
      <meta
        name="keywords"
        content="web development, web design, desarrollo,React, apps, HTML, CSS, JavaScript"
      />

      <meta
        property="og:description"
        content="Bonsai development agency based in Madrid."
      />
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

      {/*<!-- End cookieyes banner -->*/}
      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/f78cb06b7da6ecc0375f429d/script.js"
      ></script>
      {/*<!-- End cookieyes banner -->*/}
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7WSK4H6DL5"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7WSK4H6DL5');`}
      </script>
    </Helmet>
  );
};

export default HelmetComponent;
