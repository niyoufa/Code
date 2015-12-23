//码农社交平台启动脚本
// node runserver.js

var express = require('express') ; 
var server = express() ; 
var port = 8085 ; 
server.listen(port) ; 

//路由配置
var api_router = require("./api_router") ; 

//GET请求
server.get('/',function(request,response){
	response.send("Hello Code !") ; 
}) ; 

//POST请求
server.post('/',function(){
	response.send("Hello Code !") ; 
}) ; 

//参数路由
server.param('param',function(req,res,next,value){
	result = api_router(req,value) ; 
	res.send(result)
}) ; 

console.log("Starting development server at http://127.0.0.1:%s/",port) ; 

