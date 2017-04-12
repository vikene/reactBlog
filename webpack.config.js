var path = require("path");
var webpack = require("webpack");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {

  entry: {
      javascript: './src/js/index.jsx'},
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
},
  module : {
    loaders:[
      {
        test: /.css?$/,
        loader: 'style-loader',

      },
      {
        test: /.css?$/,
        loader: 'css-loader'
      },
        {
            test: /\.png$/,
            exclude: /node_modules/,
            loader: 'file-loader?name=images/[name].[ext]'
        },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets:['es2015','react']
        }
      },
        {
            test: /.html?$/,
            loader: "file-loader?name=[name].[ext]",
        }
    ]
  },
  plugins: [
   new BrowserSyncPlugin({
  
     host: 'localhost',
     port: 3000,
     server: { baseDir: ['dist'] }
   }),
      new DashboardPlugin({port:3004})
 ]
}
