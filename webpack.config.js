var path = require("path");

const config = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        },
        exclude: [/node_modules/]
      }
    ]
  }
}

module.exports = config;
