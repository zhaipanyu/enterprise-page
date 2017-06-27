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