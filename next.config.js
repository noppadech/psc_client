/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

// eslint-disable-next-line import/no-unresolved
const webpack = require('webpack');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  }
});
