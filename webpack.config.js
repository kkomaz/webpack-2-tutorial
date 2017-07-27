// Save a file called bundle.js and save it to a folder called 'build'

const path = require('path');

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
      }
    ]
  }
};

module.exports = config;
