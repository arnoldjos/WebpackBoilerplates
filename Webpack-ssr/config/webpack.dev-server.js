const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'development',
	output: {
		filename: 'dev-server-bundle.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
	devtool: 'inline-sourcemaps',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[ext]',
							emitFile: false
						}
					}
				]
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader'
					}
				]
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	]
};
