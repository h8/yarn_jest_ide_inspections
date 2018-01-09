module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
    path: __dirname + "/build",
    filename: "app.js"
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};