const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
//   plugins: [
//     new HtmlWebpackPlugin()
//   ],
  mode: 'production'
}