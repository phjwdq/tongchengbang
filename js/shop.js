// 搜索
$(document).on("click",".searText a",function(){
	$(".searText a").css({
		"background-color":"#fff",
		"color":"#000"
	});
	$(this).css({
		"background-color":"#4bac20",
		"color":"#fff"
	});
	iptFun($(this).text());
});
function iptFun(str){
	switch(str){
		case "全部" : $("#iptSear").val("上门安装和调式路由");break;
		case "台式机" : $("#iptSear").val("台式机");break;
		case "笔记本" : $("#iptSear").val("笔记本");break;
		case "手机平板" : $("#iptSear").val("手机平板");break;
		case "办公设备" : $("#iptSear").val("办公设备");break;
		case "服务器" : $("#iptSear").val("服务器");break;
	}
}
//全局变量
// ???与下面的keyup的关系
var strIpt = "";
$(document).on("focus","#iptSear",function(){
	strIpt = $(this).val();
	$(this).val("");
	$(".iptSear1").show();
});
$(document).on("blur","#iptSear",function(){
	$(this).val(strIpt);
	$(".iptSear1").hide();
});
// 全局变量
var arrData = ["电脑","电脑清灰","路由","安装路由","安装系统","ssss","saa","sad","sade"];
function searList(arr){
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		var objLi = '<li>'+
		            	'<a href="javascript:void">'+arr[i]+'</a>'+
		            '</li>';
		str += objLi;
	}
	$(".iptSear2 ul").empty().append(str);
}
// 筛选数据
// 全局变量
function regData(arr){
	console.log($("#iptSear").val());
	var reg = new RegExp('^'+$("#iptSear").val());
	var arrTemp = [];
	for (var i = 0; i < arr.length; i++) {
		if(reg.test(arr[i])){
			arrTemp.push(arr[i]);
		}
	}
	console.log(arrTemp);
	searList(arrTemp);
}
$("#iptSear").on("keyup",function(){//???
	$(".iptSear1").hide();
	regData(arrData);
	// $(this).val(function(i,old){
	// 	return $(".iptSear2 ul li a").text()
	// })
	
});

// $(".iptSear2 ul li a").on("click",function(){
// 	console.log($(this).text());
// 	// $("#iptSear").val($(this).text());
// });//???
//全局变量
var flag = true;
$("#span000").on("click",function(){
	$(".iptSear1").toggle();
	if(flag){
		$(this).removeClass("spanTri").addClass("spanTri000");
		// $(".iptSear1").show();
		flag = false;
	}else{
		flag = true;
		$(this).removeClass("spanTri000").addClass("spanTri");
		// $(".iptSear1").hide();
	}
});

// 地图数据 怎么带数据到下一个页面？？？
// $.ajax({
// 	type: "GET",
// 	url: "http://localhost:9999/data/1.json",
// 	success: function(res){
// 		// console.log(res);
// 		var objArr = res.product;
// 		// 地图
// 		var map = new AMap.Map('shopMap',{
// 			zoom: 10,
// 	    	center: [116.39,39.9]//new AMap.LngLat(116.39,39.9)
// 		});
// 		AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
// 		    function(){
// 		        map.addControl(new AMap.ToolBar());
// 		        map.addControl(new AMap.Scale());
// 		        map.addControl(new AMap.OverView({isOpen:true}));
// 		});
// 		var marker = new AMap.Marker({
// 	   	 		position: [objArr.map_longitude, objArr.map_latitude],//marker所在的位置
// 	    		map:map//,创建时直接赋予map属性
// 	    		// title:objArr[m].shop_name
// 			});
// });


// 获取商品列表数据
var objArr = "";//全局变量
var start = 0;
var length = 5;
$.ajax({
	type: "GET",
	url: "http://localhost:9999/data/5.json",
	success: function(res){
		console.log(res);
		objArr = res.product;
		initData();

		// 地图
		// 接收主页面的数据
		var shopArr = JSON.parse(localStorage.getItem('shopData'))[0];
		// console.log(shopArr);
		var map = new AMap.Map('shopMap',{
			// 注意要以店铺的位置为中心
			zoom: 20,
	    	center:[shopArr.map_longitude,shopArr.map_latitude]
		});
		var marker = new AMap.Marker({
   	 		position: [shopArr.map_longitude, shopArr.map_latitude],//marker所在的位置
    		map:map,//,创建时直接赋予map属性
    		title:shopArr.shop_name,
    		icon: new AMap.Icon({            
	            size: new AMap.Size(40, 50),  //图标大小
	            image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
	            // 需要自己找坐标！！
	            imageOffset: new AMap.Pixel(0, -70)
	        })  
		});
		

	}
});
function initData(){
	var str = "";
	for (var i = 0; i < 5; i++) {
		var item = objArr[i];
		var objLi = '<li class="clearFix">' +
		                '<a class="imgA" href="' + item.goumai_order_url + '">' +
							'<img src="' + item.product_img +' " alt="图片">' + 
						'</a>' + 
						'<div class="goodsText">' + 
							'<a href="' + item.goumai_order_url + '">手机苹果iphone</a>' + 
							'<p>' + 
								'<span>服务内容：</span>' + 
								item.service_desc +
							'</p>' + 
						'</div>' +
						'<div class="price">' +
							'<span class="coin">&yen; </span>' +
							'<span>' + item.product_price + '</span>' +
							'<button>立即购买</button>' + 
						'</div>' +
					'</li>';
		str += objLi;
	}
	$(".goodsList").empty().append(str);
}
// 回顶部
$(document).on("click",".toTop",function(){
	// 只能是window
	$("body").scrollTop(0);
});
$(document).on("scroll",function(){
	// document或者window都可以
	$("body").scrollTop() > 300 ? $(".toTop").fadeIn(2000) : $(".toTop").fadeOut(2000);
});