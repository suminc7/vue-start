const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin")


function resolve (dir) {
    return path.join(__dirname, '.', dir);
}
console.log(config.staticRoot);
module.exports = {
	entry: {
        'vendor': 'babel-polyfill',
        'main': './src/main.js'

	},
	output: {
		path: config.staticRoot,
		filename: './js/main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
                include: [resolve('src'), resolve('test')]
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
        new ExtractTextPlugin("./styles/all.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "./js/vendor.js",
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
        contentBase: path.resolve('dist'),
		// proxy: {
		// 	'**': {
		// 		target: 'http://localhost:8000/',
		// 		secure: false,
		// 		prependPath: false
		// 	}
		// },
		publicPath: '/'
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