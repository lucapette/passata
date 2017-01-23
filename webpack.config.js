var path = require("path");

const config = {
  devtool: "#source-maps",
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
          presets: ["es2015", "react"],
          plugins: ["transform-flow-strip-types"]
        },
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
}

module.exports = config;
