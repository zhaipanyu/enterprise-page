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

//node r.js -o build.js