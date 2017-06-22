var Path = require('path');
var Webpack = require('webpack');
require('fs');

module.exports = {
  devtool: 'source-map',
  entry: Path.join(__dirname, 'src/react-sample-app.jsx'),
  output: {
    path: Path.join(__dirname, 'public'),
    publicPath: Path.join('/'),
    filename: 'react-sample-app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: Path.join(__dirname, 'public'),
    publicPath: Path.join('/'),
    compress: true,
    port: 4200,
    watchOptions: {
      watch: true,
      watchContentBase: true,
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};