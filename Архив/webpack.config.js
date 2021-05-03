const path = require('path');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './script_vue.js'
  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ],
        options: {
          sourceMap: true
        }
      }
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: '8080',
    contentBase: path.join(__dirname, 'dist')
  }
}