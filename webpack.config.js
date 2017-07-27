// Save a file called bundle.js and save it to a folder called 'build'
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ //checks if file ends with .js  babel will apply
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
