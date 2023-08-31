const dotenv = require("dotenv");

const { parsed: env } = dotenv.config({
  path: `.env/${process.env.NODE_ENV}.env`,
});

/** @type {import('next').NextConfig} */
module.exports = {
  env,
};
