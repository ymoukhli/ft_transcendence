/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three']);

const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = withTM(nextConfig);
