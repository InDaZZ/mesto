const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },

  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    watchFiles: ['*/**/*.html']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
          loader: 'css-loader',
          options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),

    new MiniCssExtractPlugin()
  ],



}

