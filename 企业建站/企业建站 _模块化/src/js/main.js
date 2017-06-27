define(['jquery','addmore','carousel','gotop'],
	function($,AddMore,Carousel,GoTop){
		Carousel.init($('.carousel'))
		GoTop.init()
		AddMore.init($('.btnMore'))
        // Fn.init();
})

//define:定义模块