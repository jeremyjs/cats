const webpack = require('webpack');

module.exports = {
  debug: true,
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/src/index.js',
  ],
  output: {
    path: __dirname + '/app',
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json',
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true,
    }),
    new webpack.NoErrorsPlugin(),
  ],
}
