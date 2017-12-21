const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'public/js/entry')
const outputPath = path.join(__dirname, 'dist');
module.exports = {
  entry: srcPath,
  output: {
    path: outputPath,
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}