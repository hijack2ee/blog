import type {GatsbyConfig} from 'gatsby';
import path from 'path';

import alias from './alias';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-emotion',
    {resolve: 'gatsby-source-filesystem', options: {name: 'contents', path: path.resolve('src/contents')}},
    {resolve: 'gatsby-plugin-page-creator', options: {path: path.resolve('src/contents')}},
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {alias},
    },
  ],
};

export default config;
