const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: ['whatwg-fetch','./index.js', './style/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        include: [
          path.resolve(__dirname, "src")
        ],
      use: 'babel-loader'
      }, //babel
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]','sass-loader']
                }),
      }
    ]
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 1337
},
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'bundle.css',
      allChunks: true,
    }),
  ]
};