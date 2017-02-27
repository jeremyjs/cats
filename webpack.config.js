const webpack = require('webpack');

module.exports = {
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'public/css/style.css',
      allChunks: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
