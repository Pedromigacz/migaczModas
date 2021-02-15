module.exports = {
  siteMetadata: {
    title: "./",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu\:400,500`,
        ],
        display: 'swap'
      }
    },
  ],
};
