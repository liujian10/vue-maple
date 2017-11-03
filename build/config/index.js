const path = require('path')
const merge = require('webpack-merge')

const PROD_ENV = {
  NODE_ENV: '"production"'
}

const DEV_ENV = merge(PROD_ENV, {
  NODE_ENV: '"development"'
})

module.exports = {
  dev: {
    env: DEV_ENV,
    port: 3001,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS sourceMap off by default
    // (https://github.com/webpack-contrib/css-loader#sourcemaps)
    cssSourceMap: false
  },
  build: {
    env: PROD_ENV,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}