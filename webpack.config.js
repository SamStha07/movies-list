const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '3000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
