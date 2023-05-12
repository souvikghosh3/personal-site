/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: {
    typesOutputPath: ".cache/gatsby-types.d.ts",
    generateOnBuild: true,
  },
  siteMetadata: {
    title: "Souvik Ghosh",
    description: "Souvik Ghosh's personal site.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-sharp", // Needed for dynamic images
    "gatsby-transformer-yaml",
  ],

};

export default config;