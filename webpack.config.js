var path = require('path');

const config = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'App.js'
  },
  module: {
    rules: [
      {
        exclude: 'node_modules',
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = config;
