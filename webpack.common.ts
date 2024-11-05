import path from "node:path"
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
	entry: {
		//background: './src/background.ts',
		//main: './src/main.ts',
		//popup: './src/popup.ts',
		// web_accessible_resources: './src/web_accessible_resources.ts',
		//devtool: './src/devtool.ts',
		// 'content-scripts': './src/content-scripts.ts',
		//options: './src/options.ts',

	},
	resolve: {
		extensions: [".ts"],
	},
	module: {
		rules: [
			{
				test: /\.?ts$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},

		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "src/**/*.(html|css|js|json|map)",
					to: "[name][ext]",
				},
				{
					from: "lib/**/*.(js|map)",
					to: "[path][name][ext]",
				},
				{
					from: "images/**/*.(png|jpg|jpeg)",
					to: "[path][name][ext]",
				}
			],
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	}
}

export default config