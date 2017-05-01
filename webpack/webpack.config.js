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
    rules: [
      { test:   /\.css$/,
        use:[{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "postcss-loader?parser=sugarss",
          options: {
            plugins: function () {
              return [
                require('precss')
              ];
            }
          }
        }]
      },
      { test: /\.js|jsx$/, loaders: ['babel-loader'] },
      { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'}
    ]
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};