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

// 

