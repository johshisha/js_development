import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: './client/app.jsx',
  },
  output: {
    filename: 'client-bundle.js',
    publicPath: '/dist',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
