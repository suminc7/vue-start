const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
	entry: {
        'commons': 'babel-polyfill',
        'main': './src/main.js'

	},
	output: {
		path: config.staticRoot,
		filename: '/js/main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
//						js: 'babel-loader!eslint-loader',
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader?minimize&url=false!sass-loader',
                            fallback: 'vue-style-loader'
                        })
						// scss: 'style-loader?singleton!css-loader?minimize&url=false!sass-loader'
					}
				}
			}
		],

	},
    plugins: [
        new ExtractTextPlugin("/styles/all.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "/js/commons.js",
        })
    ],

	resolve: {
        extensions: ['.js', '.vue', '.json'],
		alias: {
            vue: 'vue/dist/vue.js'
		}
	},

	devServer: {
		hot: true,
		port: 8080,
		// proxy: {
		// 	'**': {
		// 		target: 'http://localhost:8000/',
		// 		secure: false,
		// 		prependPath: false
		// 	}
		// },
		publicPath: '/js/'
	},

	watch: true
}



if (process.env.NODE_ENV === 'production') {

	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	])
}