const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? 'blog' : undefined,
  basePath: isProd ? '/blog' : undefined,
};
