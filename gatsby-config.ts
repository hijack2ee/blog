import type {GatsbyConfig} from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-emotion',
    {resolve: 'gatsby-source-filesystem', options: {name: 'contents', path: path.resolve("src/contents")}},
    {resolve: 'gatsby-plugin-page-creator', options: {path: path.resolve("src/contents")}},
    'gatsby-plugin-mdx',
  ],
};

export default config;
