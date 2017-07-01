requirejs.config({
	baseUrl: 'src',
	paths: {
		'jquery': 'lib/jquery-3.2.1.min',
		'addmore': 'js/addmore',
		'carousel': 'js/carousel',
		'gotop': 'js/gotop',
        'index':'js/index'
	}
})
requirejs(['js/main']);

//加载模块:决定加载哪一个模块,哪些文件,做一个配置
//逻辑:第二步
//1.找模块的路径
//2.加载requirejs对应的main文件
//3.为什么这里要重复配置一次文件路径?
//因为在build.js里对应模块的路径不同,要改