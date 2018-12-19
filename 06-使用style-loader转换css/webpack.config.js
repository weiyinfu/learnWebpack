module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: require.resolve('style-loader') + '!'+require.resolve('css-loader')
      }
    ]
  }
}
