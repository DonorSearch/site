var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './lib');

var APP_DIR = path.resolve(__dirname, './src');

var config = {
  entry: APP_DIR + '/client.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  devServer:{
    host:"0.0.0.0"  
  },
    module : {
        loaders : [
        {
            test : /\.js?/,
            include : APP_DIR,
            loader : 'babel'
        }
        ]
    }  
};

module.exports = config;