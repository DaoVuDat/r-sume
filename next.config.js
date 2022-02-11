/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
