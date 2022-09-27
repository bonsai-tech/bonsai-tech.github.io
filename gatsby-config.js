module.exports = {
  siteMetadata: {
    siteUrl: `https://bonsaitech.io/`,
    title: `Bonsai`,
    description: `Quality web development agency based on Madrid.`,
    author: `bonsai team`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root
        crossOrigin: `use-credentials`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
