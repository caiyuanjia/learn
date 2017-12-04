module.exports = {
	entry:"./run.js",
	output:{
		path:__dirname,
		filename:"final.js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style-loader!css-loader"}
		]
	}
};