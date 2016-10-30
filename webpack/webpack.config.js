module.exports = {
  entry: "./src/javascripts/main.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
        { test: /\.js|jsx$/, loaders: ['babel-loader'] }
    ]
  }
};