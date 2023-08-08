import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wine Club`,
  },
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-typescript`],
};

export default config;
