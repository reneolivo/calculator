'use strict';

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: [ 'jasmine' ],
    reporters: [
      'spec',
    ],
    specReporter: {
      suppressSkipped: true
    },
    files: [
      'src/specs.js',
    ],
    preprocessors: {
      'src/**/*.js': [
        'webpack',
        'sourcemap'
      ]
    },
    port: 9090,
    colors: true,
    autoWatch: true,
    browsers: [ 'Chrome' ],
    singleRun: true,
    webpack: webpackConfig
  });
};
