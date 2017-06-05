const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const DIST_PATH = path.resolve(__dirname, 'dist')

const pathsToClean = ['dist']

const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false
}

module.exports = {
  entry: ['./index.js'],
  output: {
    path: DIST_PATH,
    filename: 'solrpn.js',
    library: 'Solrpn',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.optimize.UglifyJsPlugin()
  ]

}
