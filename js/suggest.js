function Suggest(parent,arrData,regData){
	this.parent = parent;
	this.arrData = arrData;
	this.regData = regData;
}
Suggest.prototype.show = function(){
	var self = this;
	var iptStr = "";
	var tempStr = "";
	var flag = true;//初始是向上，arrList不显示
	// 创建搜索栏
	var objDiv = '<div class="searDad">'+
					'<div class="sear">'+
						'<input type="text" id="ipt" value="请输入"/>'+
						'<button id="btn">搜索</button>'+
						'<span class="imgSp"></span>'+
					'</div>'+
					'<div class="arrList">'+
						'<ul></ul>'+
					'</div>'+
					'<div class="regList">'+
						'<ul></ul>'+
					'</div>'+
				'</div>';
	// console.log($(objDiv));
	self.parent.append(objDiv);
	tempStr = $("#ipt").val();

	addArr(self.arrData);

	$("#ipt").on("focus",function(){//鼠标使文本框聚焦
		$(this).val("");
		iptStr = "";
		$(".arrList").show();
		flag = false;
		falgFun(flag);
	});

	$("#ipt").on("keyup",function(){//键盘
		$(".arrList").hide();
		flag = true;
		falgFun(flag);
		iptStr = $(this).val();
		addReg(self.regData);

	});

	$(document).on("mousedown",".arrList",function(e){//鼠标刚按下
		iptStr = $(e.target).text();
		$("#ipt").val($(e.target).text());
		$(".arrList").hide();
		flag = true;
		falgFun(flag);
	});

	$(document).on("mousedown",".regList",function(e){
		iptStr = $(e.target).text();
		$("#ipt").val($(e.target).text());
		$(".regList").hide();
	});

	$("#ipt").on("blur",function(e){//鼠标使文本框失焦
		var regIpt = /^\s*$/;//!!
		if(iptStr.length == 0 || regIpt.test(iptStr)){
			$(this).val(tempStr);
		}
		$(".regList").hide();
		$(".arrList").hide();
		flag = true;
		falgFun(flag);
	});

	$(".imgSp").on("click",function(){
		$(".regList").hide();
		$(".arrList").toggle();
		flag = !flag;
		falgFun(flag);
		if(!flag){
			$("#ipt").val("");
		}
	});

	function falgFun(flag){//判断arrList的状态，确定三角的显示状态
		$(".imgSp").css({
			backgroundPositionY : flag ? 0 : -20
		});
	}
	
	function addReg(arr){//删选数据，并且添加数据到列表
		var reg = new RegExp('^'+iptStr);
		var regStr = "";
		for (var i = 0; i < arr.length; i++) {
			if(reg.test(arr[i])){
				var objLi = '<li>' + arr[i] + '</li>';
				regStr += objLi;
			}
		}
		$(".regList ul").empty().append(regStr);
		if(regStr.length!=0){
			$(".regList").show();
		}
	}

	function addArr(arr){//为固定列表添加数据
		var arrStr = "";
		for (var i = 0; i < arr.length; i++) {
			var objLi = '<li>' + arr[i] + '</li>';
			arrStr += objLi;
		}
		$('.arrList').find('ul').append(arrStr);
	}
}