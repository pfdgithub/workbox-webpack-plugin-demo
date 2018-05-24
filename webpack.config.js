const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const assetsDir = 'assets';
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: `${assetsDir}/[name].[chunkhash].js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new WebpackPwaManifest({
      includeDirectory: true,
      filename: `${assetsDir}/app-manifest.[hash].json`,
      icons: [{
        ios: true,
        sizes: [512],
        destination: assetsDir,
        src: './src/logo.png'
      }]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js'
    })
  ]
};