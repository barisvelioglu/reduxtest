var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
	"tr-TR": require("./src/js/localizations/tr-TR.json"),
	"en-US": require("./src/js/localizations/en-US.json")
};



module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.hbs/,
				loader: 'handlebars-loader',
		    query: { helperDirs: __dirname + "/src/js/helpers" },
      }
    ],
		noParse: /localforage\./
  },
	resolveLoader: {
  	alias: { hbs: 'handlebars-loader'},
  	root: [path.join(__dirname, 'node_modules')],
	},
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
};
