define(['jquery'], function () {
    Fn = (function () {

        fn = function () {
            this.bind();
            //    this.init()
        }
        fn.prototype = {
            bind: function () {
                var _this = this;
                $('.support').on('click', function (e) {
                    e.preventDefault();//不设置这个,会回到顶部,会跟随冒泡事件!
                    _this.x = $('.services').offset().top;//550
                    $(window).scrollTop(_this.x - 70);
                })
            }
        }

        $('.support').on('click', function (e) {
            e.preventDefault();//不设置这个,会回到顶部,会跟随冒泡事件!
            var x = $('.services').offset().top;//550
            $(window).scrollTop(x - 70);
        })

        $('.introduce').on('click', function (e) {
            e.preventDefault();//不设置这个,会回到顶部,会跟随冒泡事件!
            var x = $('.introduce1').offset().top;//550
            $(window).scrollTop(x - 70);
        })
        $('.about').on('click', function (e) {
            e.preventDefault();//不设置这个,会回到顶部,会跟随冒泡事件!
            var x = $('.about1').offset().top;//550
            $(window).scrollTop(x - 70);
        })
        $('.products').on('click', function (e) {
            e.preventDefault();//不设置这个,会回到顶部,会跟随冒泡事件!
            var x = $('.products1').offset().top;//550
            $(window).scrollTop(x - 70);
        })


        return {
            init: function () {
                new fn();
            }
        }

    })();

    return Fn;
})

//废弃文件