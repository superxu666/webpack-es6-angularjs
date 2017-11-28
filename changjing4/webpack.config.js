process.env.NODE_ENV = 'production'
var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './js/app.js'
  },
  output: {
    path: __dirname + '/src',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}