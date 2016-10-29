module.exports = {
  entry: "./src/javascripts/main.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style!css" },
        { test: /\.js|jsx$/, loaders: ['babel-loader'] }
    ]
  }
};