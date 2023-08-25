const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: isProd ? "https://hijack2ee.github.io/blog" : undefined,
};
