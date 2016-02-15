//码农社交平台启动脚本
// node runserver.js

var express = require('express') ; 
var fs = require("fs") ; 
var server = express() ; 

var PageView = require("../views/page_views") ; 

var config = require("./config") ; 
var port = config["server_config"]["port"] ; 
server.listen(port) ; 

//路由配置
var APIRouter = require("./api_router") ; 

//静态文件
server.get(/^\/static/,function(req,res){
	path = req.path ; 
	file_path = ".." + path ; 
	res.download(file_path) ; 
}) ; 

//html文件
server.get(/^\/page/,function(req,res){
	res.set({
		"Content-Type" : "text/html" 
	}) ; 
	path = req.path ; 
	urlpattern = path.split("/")[2] ; 
	response = PageView[urlpattern](req) ; 
	res.send(response) ;
}) ; 

//GET请求
server.get('/code/:userid',function(req,res){
	var response = APIRouter(req) ; 
	if ( req.query["action"].match("page") != null ) {
		res.set({
			"Content-Type" : "text/html" , 
			"Content-Length" : response.length 
		}) ; 
		res.send(response) ; 
	}else {
		console.log("返回参数 : ") ; 
		console.log(response) ; 
		res.send(response) ; 
	}
}) ; 

//POST请求
server.post('/',function(){
	response.send("Hello Code !") ; 
}) ; 

//参数路由
server.param('param',function(req,res,next,value){
	
}) ; 

console.log("Starting development server at http://0.0.0.0:%s/",port) ; 

