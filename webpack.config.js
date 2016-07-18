var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'target');
var APP_DIR = path.resolve(__dirname,'src');

var config = {
	entry : APP_DIR + '/app.js',
	output : {
		path : BUILD_DIR,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
			    test: /\.js?/,         // Match both .js and .jsx files
			    include : APP_DIR,
			    loader: 'babel'
		    }
	    ] 	
	}
};

module.exports = config;