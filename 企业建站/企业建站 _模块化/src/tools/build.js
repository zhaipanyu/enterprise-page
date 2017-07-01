({
	baseUrl: '../',
	paths: {
		'jquery': 'lib/jquery-3.2.1.min',
		'addmore': 'js/addmore',
		'carousel': 'js/carousel',
		'gotop': 'js/gotop',
		// 'index':'js/index'
	},
	name: 'app',
	out: '../dist/merge.js' 
})



//终端定位到带有r.js文件,输入终极命令行指令,作用输出上面out路径:node r.js -o build.js

//逻辑:第一步
//1.确定路径,确定找name:app这个文件,通过name
//2.输出到out对应的文件