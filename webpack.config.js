const path = require('path')
const webpack = require('webpack')

// Define webpack config and loaders here
module.exports = {
  entry: {
    app: ['./app/main.js', 'webpack-hot-middleware/client']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-transform-es2015-destructuring', 'babel-plugin-transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader'
      }
    ]
  }
}
