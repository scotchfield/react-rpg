module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "index.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react']
				}
			}
		]
	}
};
