var webpack = require('webpack');

module.exports = {
  entry: {
    client: "./src/client.js",
  },
  output: {
    filename: '[name].js',
    path: "./public",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
};
