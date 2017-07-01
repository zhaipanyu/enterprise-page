define(['jquery','addmore','carousel','gotop'],
	function($,AddMore,Carousel,GoTop){
		Carousel.init($('.carousel'))
		GoTop.init()
		AddMore.init($('.btnMore'))
        // Fn.init();
})

//define:定义模块
//运行逻辑
//第三步
//define语法
// define([
// 	'require',
// 	'dependency'
// ], function(require, factory) {

// });
//定义app.js对应的模块名应该传入哪个参数,这个参数也是html里的对应标签的class名字
//提前定义好配置的路径,供app.js里调用.