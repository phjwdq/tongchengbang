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

// 大地区的悬浮，出现小区域
$(".aeraList").hover(function(){
	$(".showList").show();
},function(){
	$(".showList").hide();
});
$(".showList").hover(function(){
	$(".showList").show();
},function(){
	$(".showList").hide();
});

// 有关搜索
var arrData = ['是','是电脑','电脑','电脑清灰','电','s','sa','sad','sadf'];
var strLi = "";
var reg = /^\s*$/;
var str = "请输入附近";
var iptStr = "";
iptStr = $("#iptAeraSear").val();
// console.log(iptStr);
$("#iptAeraSear").on("focus",function(){
	$(this).val("");
	iptStr = "";
	$(".aeraSear1").show();

	$(this).on("keyup",function(){
		$(".aeraSear1").hide();
		iptStr = $(this).val();
		strLi = "";
		var regArr = new RegExp('^'+iptStr);
		for (var i = 0; i < arrData.length; i++) {
			if(regArr.test(arrData[i])){
				var objLi = '<li>'+ arrData[i] +'</li>';
				strLi += objLi;
			}
		}
		$(".sear2List").empty().append(strLi);
		if(strLi!=""){
			$(".aeraSear2").show();
		}
		
	});
});

$(document).on("mousedown",".sear2List",function(e){
	// onmousedown的事件比onclick事件优先测试！！！
		$("#iptAeraSear").val($(e.target).text());
		flag = true;
		$(".aeraSear2").hide();
	});

$("#iptAeraSear").on("blur",function(e){
	$(".aeraSear1").hide();
	$(".aeraSear2").hide();
	
	if(reg.test(iptStr)||iptStr.length == 0){
		$(this).val(str);
	}
	e.preventDefault();
});

//搜索插件
var suggest = new Suggest($(".trySear"),['电脑','清灰','系统'],['a','as','asd','asdf','电','电脑']);
suggest.show();

// 回顶部
$(document).on("click",".toTop",function(){
	// 只能是window
	$("body").scrollTop(0);
});
$(window).on("scroll",function(){
	// 用document或者window
	$("body").scrollTop()>300 ? $(".toTop").fadeIn(2000) : $(".toTop").fadeOut(2000); 
});
