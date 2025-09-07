/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false  // This disables Turbopack and forces Webpack
  }
};

module.exports = nextConfig;
