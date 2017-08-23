
var express = require("express");
var app = express();

app.get("*",function(req,res){//!!
	res.sendFile(__direname+req.url);
});
app.listen(9999,"localhost",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("服务器开启成功");
	}
});