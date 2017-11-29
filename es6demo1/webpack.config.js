const path = require('path')
const webpack = require('webpack')
const htmlWebpackHtml = require('html-webpack-plugin')

const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, '/'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract(['style-loader', 'css-loader'])
      }
		]
  },
  plugins: [
    new htmlWebpackHtml({
      filename: 'index.html',
      template: 'index.html'
    }),
    new extractTextPlugin('[name].[hash:8].css')
  ],
  devServer: {
    contentBase: '/'
  }
}