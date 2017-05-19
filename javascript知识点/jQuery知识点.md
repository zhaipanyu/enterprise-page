```
为什么学习jQuery?
0.jQuery 由 John Resig 创建，是继 Prototype 之后又一个优秀的 Javascript 库,其宗旨是「写更少的代码，做更多的事情」
1.通过js原生语法如:document.getElementById等方法获取DOM对象,方法名称长，使用不方便.
2.jQuery定义了一套选择器规则，和CSS选择器目的一样，都是为了选择出符合特定规则的元素,代码简洁.
3.jQuery选择器方便使用者jQuery刻意和CSS选择器使用相同的语法，几乎支持所有类型的CSS3选择器
```



## 1： 说说库和框架的区别？

- 库的英语为 Library，框架的英语为 Framework
`库`是将代码集合成的一个产品，供程序员调用。面向过程的代码组织形式而成的库也叫函数库。

- `框架`则是为解决一个(一类)问题而开发的产品，框架用户一般只需要使用框架提供的类或函数，即可实现全部功能。可以说，框架是库的升级版。
开发者在使用框架的时候，必须使用这个框架的全部代码。

- `库只管引进来使用，除了库接口，没有其他约束`，
`而框架则有着各种各样的严格约束`。例如bootstrap，约束了DOM结构。例如AnglarJS，也对DOM结构有约束。这些都是框架。框架就像一门语言，有自己的世界。用了什么框架，就得按照这个框架世界里的规则行事编码

## 2： jquery 能做什么？
- `jQuery` 是一个高效、精简并且功能丰富的 JavaScript `工具库`。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单


## 3： jquery 对象和 DOM 原生对象有什么区别？如何转化？
- 区别
jQuery对象就是通过jQuery包装DOM对象后产生的对象(集合对象)。jQuery对象是jQuery独有的，可以使用jQuery里的方法。
因此jQuery对象和DOM对象是不一样的，不能调用对方定义的方法。
dom对象须使用dom方法，jq对象需使用jq方法
`$(‘#test’).innerHTML会报错，document.getElementById(‘#test’)[0].html()也会报错。`

- 2者转换：

普通的DOM对象可以用$()包装起来`转换为jQuery对象`：$(document.getElementById(‘#test’)).html();//正常

jQuery对象本身是一个集合，要`转换为DOM对象`，可通过数组索引取出：
第一种方式：$(‘#test’)[0]
第二种方式：$(‘#test’).get(0)
注： eq(0)返回的还是jQuery对象,eq(0)[0]是DOM对象。



## 4：jquery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
- 绑定事件
on，bind，delegate，live，unbind，trigger


- on
自 jQuery 版本 1.7 起，**on() 方法**是 bind()、live() 和 delegate() 方法的新的替代品,我们**推荐使用on()方法**
on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
使用 on() 方法添加的事件处理程序适用于当前及未来的元素
如需添加只运行一次的事件然后移除，请使用 one()
语法
`$(*selector*).on(*event,childSelector,data,function,map*)`


- bind() 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数
`$(selector).bind(event,data,function)`

- unbind() 方法移除被选元素的事件处理程序。
该方法能够移除所有的或被选的事件处理程序，或者当事件发生时终止指定函数的运行。
`$(selector).unbind(event,function)`

- delegate
delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。
语法
`$(selector).delegate(childSelector,event,data,function)`


- live
ive() 方法为被选元素附加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
通过 live() 方法附加的事件处理程序适用于匹配选择器的当前及未来的元素（比如由脚本创建的新元素）。
语法
`$(selector).live(event,data,function)`


- off
off() 方法通常用于移除通过 on()方法添加的事件处理程序。
自 jQuery 版本 1.7 起，off() 方法是 unbind()、die() 和 undelegate() 方法的新的替代品,**推荐使用off()该方法**



## 5：jquery 如何展示/隐藏元素？

- 使用 hide() 和 show() 方法来隐藏和显示 HTML 元素：

```
//隐藏元素
$("#hide").click(function(){
  $("p").hide();
});

//显示元素
$("#show").click(function(){
  $("p").show();
});
```

- 改变元素的css中的display属性

```
$(".box").css("display", "block");
    //设置元素的display为block
$(".box").css("display", "none");
    //设置元素的display为none
```


- 用jQuery的fadeIn()、fadeOut()方法

```
$(".box").fadeIn();
   //fadeIn() 方法使用淡入效果来显示被选元素，假如该元素是隐藏的。
$(".box").fadeOut();
   //fadeOut() 方法使用淡出效果来隐藏被选元素，假如该元素是隐藏的。
```




## 6： jquery 动画如何使用？
- animate() 方法执行 CSS 属性集的自定义动画。
该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。
注释：使用 "+=" 或 "-=" 来创建相对动画（relative animations）。

>语法1:
`$(selector).animate(styles,speed,easing,callback)`

styles:  必需,规定产生动画效果的 CSS 样式和值。
speed:可选,规定动画的速度
easing:可选,规定在不同的动画点中设置动画速度的 easing 函数
callback:可选,animate 函数执行完之后，要执行的函数。

> 语法 2
`$(selector).animate(styles,options)`

styles:  必需,规定产生动画效果的 CSS 样式和值。
options:可选,规定动画的额外选项

## 7：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

- 获取元素内部 HTML 内容
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val() - 设置或返回表单字段的值

```
$(".box").html() //获取元素内部的html内容，类似于innerHTML
$(".box").text() //获取元素内部的text文本，类似于innerText
```

- 设置元素内部 HTML 内容和内部文本

```
$(".box").html("<p>设置了一个段落</p>")//设置了元素内部的html内容,标签生效
$(".box").text("设置了一个文本")//设置了元素内部的text文本，标签不生效
```


## 8：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

```
//获取
$(selectorOfFormData).val()//不加参数即可获取用户输入或选择的内容
//设置
$(selectorOfFormData).val(modifiedVal)//加参数即可设置用户输入或选择的内容
```

```
//获取
$(selector).attr(attributeName)//传入元素属性名即可获取元素的属性值

//设置单个属性
$(selector).attr(attributeName,attributeVal)//传入元素属性名和要设置的属性值即可完成对元素的属性设置

//用key:value的形式设置多个属性的值:
$( "img" ).attr({
  src: "/resources/hat.gif",
  title: "jQuery",
  alt: "jQuery Logo"
});

```






## 9： 使用 jquery实现如下效果

![1.gif](http://upload-images.jianshu.io/upload_images/735918-c86c27a944e1d62e.gif?imageMogr2/auto-orient/strip)

[预览代码](http://js.jirengu.com/kite/102/edit)
- index() 方法返回指定元素相对于其他指定元素的 index 位置。

## 10： 使用 jquery 实现如下效果


![2.gif](http://upload-images.jianshu.io/upload_images/735918-0b8bbbb81d8c91c2.gif?imageMogr2/auto-orient/strip)

[预览代码](http://js.jirengu.com/kite/120/edit)

## 11： 实现如下效果


[预览代码](http://js.jirengu.com/kite/120/edit)