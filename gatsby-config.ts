import type {GatsbyConfig} from 'gatsby';

const cwd = process.cwd();

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-emotion',
    {resolve: 'gatsby-source-filesystem', options: {name: 'contents', path: `${cwd}/src/contents`}},
    {resolve: 'gatsby-plugin-page-creator', options: {path: `${cwd}/src/contents`}},
    'gatsby-plugin-mdx',
  ],
};

export default config;
