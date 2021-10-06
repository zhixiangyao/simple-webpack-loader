const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // development production
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: ['a-loader', 'b-loader', 'c-loader'],
      },
    ],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'loaders')],
  },
}
