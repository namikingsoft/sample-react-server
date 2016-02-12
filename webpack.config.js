var webpack = require('webpack');

module.exports = {
  entry: {
    client: "./src/client.tsx",
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
      {
        test: /\.tsx?$/,
        loaders: ['ts'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'ts', '.tsx'],
    modulesDirectories: ['node_modules'],
  },
};
