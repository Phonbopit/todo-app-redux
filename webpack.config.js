var path = require('path');

module.exports = {
  entry: './App',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    port: 7777
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /bundle\.js$/,
      include: __dirname + '/actions',
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
}
