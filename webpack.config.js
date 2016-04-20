module.exports = {
  entry: './public/src/js/main.jsx',
  output: {
    filename: './public/dist/js/bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclue : /node_modules/,
        query : {
          presets : ['es2015', 'react']
        }
      }
    ],
    resolve: {
      // import/requireをするときに拡張子を省略できるようにする
      extensions: ['', '.js', '.jsx']
    }
  }
};
