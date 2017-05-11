
var config = {
	entry:[
		'./main.js'
		],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
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
			}
		},
		{
			test: /\.scss$/,
			loader: 'style!css!sass'
		}
		
		]
	}
}
module.exports = config;