var path = require('path');
var StylelintWebpackPlugin = require('stylelint-webpack-plugin');
console.log('running webpack-dev');

var config = {
	entry:[
		'./src/main.js'
		],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
        publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase:'./',
		port:3001
	},
	module: {
		loaders: [
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets: ["es2015", "react", "stage-0"]
			},
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader',
			include: path.join(__dirname, 'src')
		}
		]
	},
	plugins: [
	new StylelintWebpackPlugin({
		files: ['**/*.scss','**/*.less'],
		configFile: './.stylelintrc',
		failOnError: false
	})
	]
}
module.exports = config;