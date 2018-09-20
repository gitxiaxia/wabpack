/*
	webpack的配置文件，运行webpack命令时会自动在node环境下执行这个文件

	目的：
		* 编译.vue
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//CleanWebpackPlugin插件 添加hash之后方式多次生成文件
module.exports = {
	//webpack的配置选项

	// 入口出文件
	entry:{
		main:path.join(__dirname,'./src/app.js'),
		es6:path.join(__dirname,'./src/js/test.js')
	},
	output:{
		path:path.join(__dirname ,'./dist'),
		filename:'[name]-bundle-[hash].js'
	},

	mode:'development',//production

	// 静态服务器
	devServer:{
		contentBase:path.join(__dirname,'./dist'),
		port:8000,
		inline:true,//自动刷新
		historyApiFallback:true,
		open:true,//自动打开浏览器
	},

	module:{
		rules:[
			// 编译.vue
			{
				test:/\.vue$/,
				loader:['vue-loader']
			},

			{
				test:/\.css$/,
				loader:['style-loader','css-loader']
			},

			// 编译sass
			{
				test:/\.scss$/,
				loader:['style-loader','css-loader','sass-loader']
			},

			// 编译js
			{
				test:/\.js$/,
				include:path.join(__dirname,'./src'),
				exclude:/node_modules/,
				loader:['babel-loader']
			}
		]
	},

	// 插件
	plugins:[
		new CleanWebpackPlugin(['./dist']),
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		new VueLoaderPlugin(),
	]
}