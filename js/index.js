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
// 搜索城市
// 1省份
$(".province").on("click",function(){
	$(".shopSear1").css("display","block");
});
$(".shopSear1 button").on("click",function(){
	$(".shopSear1").css("display","none");
});
// 2县区

// 3输入搜索地区
$(".addrSear input").on("focus",function(){
	$(".shopSear3").css("display","block");
	$(".shopSear1").css("display","none");
});
$(".addrSear input").on("blur",function(){
	$(".shopSear3").css("display","none");
});
// 商铺数据
// 读取数据
$.ajax({
	type:"GET",
	url:"http://localhost:9999/data/1.json",
	success:function(res){
		setData(res.shop_data);
	}
});
//全局变量n
// var m = 0;
// var n = 5;
// // console.log($(".page li:nth-child(2) a").html());
// $(".page li:nth-child(2) a").on("click",function(){
// 	m = 5
// 	n = 10;
// });

function setData(item){
	var strLi = "";
	for (var i = 0; i < 5; i++) {
		var objItem = item[i];
		var objLi = "<li>" +
						"<div class='shopInfo'>" +
							"<a class='shopicoA' href='" + objItem.shop_addr + "'>" +
								"<img src='" + objItem.shop_ico + "'alt='shop_ico'>" +
							"</a>" +
							"<div class='shopInfoLeft'>" + 
								"<h4>" + 
									"<a href='" + objItem.shop_addr + "'>"+ objItem.shop_name +"</a>" +
								"</h4>" +
								"<p>主营：" + objItem.shop_desc + "</p>" +
								"<p>地址：" + objItem.addr_detail + "</p>" +
							"</div>" +
						"</div>" +
						"<div class='shopOther'>" +
							"<p>先行付款</p>" +
							"<p>同城帮认证</p>" +
							"<p class='shopPop'>人气：" +
							"<span>" + objItem.count + "</span>次浏览</p>" +
							"<a href='"+ objItem.shop_addr +"'>进入店铺</a>" +
						"</div>" +
					"</li>";
		strLi += objLi;
	}
	
	$(".shopList ul").empty().append(strLi);
	// console.log($(".shopList li"));
	// console.log($(".shopOther a").html());
	$(".shopList li").mouseover(function(){//??????
		// console.log($(".shopList li").index());
		// //$(".shopList li").css("background-color","#fafafa");//或C首字母大写
		// $(".shopList li").css("backgroundColor","#fafafa");
		// $(".shopList li .shopOther a").css("display","block");
	});
}

