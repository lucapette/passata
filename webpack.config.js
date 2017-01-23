var path = require('path');

const config = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'App.js'
  }
}

module.exports = config;
