var precss = require("precss");
var webpack = require("webpack");

module.exports = {
  entry: {
    main:[
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    "./src/javascripts/main.jsx"
    ]
  },
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
        { test: /\.js|jsx$/, loaders: ['babel-loader'] },
        { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'}
    ]
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: function(){
    return [precss];
  }
};