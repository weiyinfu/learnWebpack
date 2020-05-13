const path = require("path")
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.md$/,
        loader: 'python-wrapper-loader',
        options: {
          filepath: path.resolve("markdown-loader.py"),
        }
      }
    ]
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname)
    ]
  }
}