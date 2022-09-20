module.exports = {
  siteMetadata: {
    title: `bonsai-web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    /* i18n */
    /* svg */
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
  ],
};
