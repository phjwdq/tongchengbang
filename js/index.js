// 轮播图
var timer = null;
var num = 0;//记录轮播图
var cir = 1;//记录圆点
timer = setInterval(function(){
	// console.log(num);
	if(num > 4){
		num = 1;//此时的num=1!!如果=0,显示有问题
		$(".imgDiv").css({
			'left' : '0px',
		});
	}
	if(cir > 4){
		cir = 1;
	}
	$(".imgDiv").animate({
		'left' : -num*1200 + 'px',
	},1500,"linear");
	$(".imgCir span").css({
		"backgroundColor" : "rgba(89,89,89,0.5)"
	});
	
	// console.log("mm",num);
	$(".imgCir .imgCir"+(cir)).css({
		"backgroundColor" : "#000"
	});
	num ++;
	cir ++;
},3000);  

// 轮播图
// var t = 1;//全局变量
// var timer = setInterval(function(){
// 	if(t > 4){
// 		t = 1;
// 	}
	
// 	$(".banner img").attr({
// 		"src": "img/" + t + ".jpg"
// 	});
// 	t++;
// },2000);

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
var objArr = [];//全局变量
var start = 0;//全局变量
$.ajax({
	type:"GET",
	url:"http://localhost:9999/data/1.json",
	success:function(res){
		objArr = res.shop_data;
		// setData(res.shop_data);
		
		// 传送数据 一定要将对象先转成字符串
		var objArrStr = JSON.stringify(objArr);
		// console.log(objArrStr);
		localStorage.setItem('shopData',objArrStr);
		localStorage.getItem('shopData');
		// var GetData = localStorage.getItem('shopData');
		// console.log(JSON.parse(GetData)[0]);


		// 地图mark;
		var map = new AMap.Map('mapCont',{
			zoom: 10,
	    	center: [116.39,39.9]//new AMap.LngLat(116.39,39.9)
		});
		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
		    function(){
		        map.addControl(new AMap.ToolBar());
		        map.addControl(new AMap.Scale());
		        map.addControl(new AMap.OverView({isOpen:true}));
		});
		for (var m = 0; m < objArr.length; m++) {
		    var marker = new AMap.Marker({
	   	 		position: [objArr[m].map_longitude, objArr[m].map_latitude],//marker所在的位置
	    		map:map,//,创建时直接赋予map属性
	    		// title:objArr[m].shop_name
	    		icon: new AMap.Icon({            
		            size: new AMap.Size(40, 50),  //图标大小
		            image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
		            // 需要自己找坐标！！
		            imageOffset: new AMap.Pixel(0, -60)
		        })  
			});
			function mapFun(marker){
				var infowindow = new AMap.InfoWindow({
				    content: '<div><h4>'+ objArr[m].shop_name +
				            '</h4><p>'+ objArr[m].addr_detail + '</p>' +
				            '<a target="_blank" href="' + objArr[m].shop_addr +'">点击查看店铺</a></div>',
				      offset: new AMap.Pixel(0, -30)
				    });
				var clickHandle = AMap.event.addListener(marker, 'click', function(){
				    	infowindow.open(map, marker.getPosition())
					});
			}
			mapFun(marker);
		}
		
		initData(start,5);
		$(".page a").on("click",function(){
			if(start == 0 && $(this).parent().index() == 0){
				alert("已经是首页！");
				return;
			}else if(start == 15 && $(this).parent().index() == 5){
				alert("已经是尾页！");
				return;
			}else if(start != 15 && $(this).parent().index() == 5){
				 $(".shopList ul").empty();
				start += 5;
				initData(start,5);
				return;
			}else if(start != 0 && $(this).parent().index() == 0){
				 $(".shopList ul").empty();
				start -= 5;
				initData(start,5);
				return;
			}else{
				 $(".shopList ul").empty();
				//记得是$(this),带有$符号的！！
				start = ($(this).parent().index()-1)*5;
				console.log("start1",start);
				initData(start,5);
			}
		});
	}
});

function initData(start,length){
	var strLi = "";
	for (var i = start; i < length + start; i++) {
		var objItem = objArr[i];
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
	$(".shopList ul").append(strLi);

	$(".shopList li").mouseover(function(){//
		//一定要用$(this)，一定记得有$符号！
		//或者用e.target
		// console.log($(this).index());
		// //$(this).css("background-color","#fafafa");//或C首字母大写
		$(this).css("backgroundColor","#fafafa");
		$(this).find(".shopOther").find("a").show();
	});
	$(".shopList li").mouseleave(function(){//
		$(this).css("backgroundColor","#fff");
		$(this).find(".shopOther").find("a").hide();
	});
}

// 地图
// 全局变量
// 在js文件中设置padding值
console.log($(window).height());//可视窗口的高
console.log($(document).height());//文档的总共高度，总的！
console.log($("body").scrollTop());//滚动条滚动的高，滚动的

// var heightPad = $(document).height()-$(".mapShop").height()*2-50;
$(".map a").on("click",function(){
	// $(".mapMap").css({
	// 	"height" : $(window).height(),
	// 	"width" : $(window).width()
	// });
	// $(".mapMap").height();
	$(".mapShop").css({
		"top" : $("body").scrollTop()
	});
	$(".mapSear").show();
	// $(".mapSear").css("paddingTop",heightPad);

});
$(".mapName button").on("click",function(){
	$(".mapSear").hide();
});

//回顶部
$(document).on("click",".toTop",function(){
	// 只能是window
	$("body").scrollTop(0);
});
$(document).on("scroll",function(){
//用document或者window
	$("body").scrollTop()>300 ? $(".toTop").fadeIn(2000) : $(".toTop").fadeOut(2000);
});

