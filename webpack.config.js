const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'sass-loader',
          'css-loader'
        ]
      }
    ]
  }
};
