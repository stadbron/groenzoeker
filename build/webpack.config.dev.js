'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const DotEnv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3000
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new DotEnv({
      expand: true
    })
  ]
}
