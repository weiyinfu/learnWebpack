module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  }
};
