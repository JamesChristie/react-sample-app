var Path = require('path');

var webpackConfig = require('./webpack.config.js');
webpackConfig.node = { fs: 'empty' };
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  var bundlePath = Path.join(
    __dirname, 'spec', 'runner.js');

  var karmaConfig = {
    autoWatch: false,
    basePath: '',
    browsers: ['Chrome'],
    client: { captureConsole: true },
    files: [bundlePath],
    frameworks: ['jasmine', 'source-map-support'],
    reporters: ['progress'],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
    }
  };

  var preprocessorsConfig = {};
  preprocessorsConfig[bundlePath] = ['webpack'];

  karmaConfig.preprocessors = preprocessorsConfig;

  config.set(karmaConfig);
};