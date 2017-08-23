// 轮播图
var t = 1;
var timer = setInterval(function(){
	if(t > 4){
		t = 1;
	}
	
	$(".banner img").attr({
		"src": "img/" + t + ".jpg"
	});
	t++;
},2000);
//banner中悬停的动画
// 列表1
$(".banner .list li:first-child a").mouseover(function(){
	$(".banner .list1").css("display","block");
	$(".banner .triSpan1").css("display","block");
});
$(".banner .list li:first-child a").mouseleave(function(){
	$(".banner .list1").css("display","none");
	// $(".banner .list1").fadeOut(1000);//动画???
	$(".banner .triSpan1").css("display","none");
});
$(".banner .list1").mouseover(function(){
	$(".banner .list1").css("display","block");
	$(".banner .triSpan1").css("display","block");
});
$(".banner .list1").mouseleave(function(){
	$(".banner .list1").css("display","none");
	$(".banner .triSpan1").css("display","none");
});
//列表2
$(".banner .list li:nth-child(2) a").mouseover(function(){
	$(".banner .list2").css("display","block");
	$(".banner .triSpan2").css("display","block");
});
$(".banner .list li:nth-child(2) a").mouseleave(function(){
	$(".banner .triSpan2").css("display","none");
	$(".banner .list2").css("display","none");
	// $(".banner .list1").fadeOut(1000);//动画???
});
$(".banner .list2").mouseover(function(){
	$(".banner .list2").css("display","block");
	$(".banner .triSpan2").css("display","block");
});
$(".banner .list2").mouseleave(function(){
	$(".banner .list2").css("display","none");
	$(".banner .triSpan2").css("display","none");
});
//列表3
$(".banner .list li:nth-child(3) a").mouseover(function(){
	$(".banner .list3").css("display","block");
	$(".banner .triSpan3").css("display","block");
});
$(".banner .list li:nth-child(3) a").mouseleave(function(){
	$(".banner .list3").css("display","none");
	// $(".banner .list1").fadeOut(1000);//动画???
	$(".banner .triSpan3").css("display","none");
});
$(".banner .list3").mouseover(function(){
	$(".banner .list3").css("display","block");
	$(".banner .triSpan3").css("display","block");
});
$(".banner .list3").mouseleave(function(){
	$(".banner .list3").css("display","none");
	$(".banner .triSpan3").css("display","none");
});
//列表4
$(".banner .list li:nth-child(4) a").mouseover(function(){
	$(".banner .list4").css("display","block");
	$(".banner .triSpan4").css("display","block");
});
$(".banner .list li:nth-child(4) a").mouseleave(function(){
	$(".banner .list4").css("display","none");
	// $(".banner .list1").fadeOut(1000);//动画???
	$(".banner .triSpan4").css("display","none");
});
$(".banner .list4").mouseover(function(){
	$(".banner .list4").css("display","block");
	$(".banner .triSpan4").css("display","block");
});
$(".banner .list4").mouseleave(function(){
	$(".banner .list4").css("display","none");
	$(".banner .triSpan4").css("display","none");
});