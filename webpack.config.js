/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo-List-Project',
      template: 'src/template.html',
      filename: 'index.html',
    }),
    // only update what changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
}