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

//终极命令行指令,作用输出上面out路径:node r.js -o build.js
//为什么这里要重复配置一次文件路径