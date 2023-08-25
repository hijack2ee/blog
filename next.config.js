const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: isProd ? "/blog" : undefined,
};
