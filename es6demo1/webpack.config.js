const path = require('path')
const webpack = require('webpack')
const htmlWebpackHtml = require('html-webpack-plugin')

const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/main.js'
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
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        // loader: extractTextPlugin.extract(['css-loader'])
        loader: 'style-loader!css-loader'
      }
		]
  },
  plugins: [
    new htmlWebpackHtml({
      filename: 'index.html',
      template: 'index.html'
    }),
    new extractTextPlugin('[hash:8].css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: '/',
    hot: true
  }
}