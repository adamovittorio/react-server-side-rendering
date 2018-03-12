const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  entry: './src/client',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
});