/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "MuseoModerno",
              variants: ["300"],
            },
            {
              family: 'Inconsolata',
              variants: ["300"]
            }
          ],
        },
      },
    },
  ],
}
