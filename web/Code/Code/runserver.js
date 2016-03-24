//码农社交平台启动脚本
// node runserver.js

//全局对象
var EventEmitter = require("events").EventEmitter ; 
global.eventEmitter = new EventEmitter()  ;
eventEmitter.on("error",function(e){
	console.log(e)
}) ;

var express = require('express') ; 
var fs = require("fs") ; 
var server = express() ; 

var querystring = require("querystring") ; 

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
//  /page/index_page/
server.get(/^\/page/,function(req,res){
	res.set({
		"Content-Type" : "text/html" 
	}) ; 
	path = req.path ; 
	urlpattern = path.split("/")[2] ; 
	PageView[urlpattern](req,res,function(response){
		res.send(response) ;
	}) ; 
}) ; 

//GET请求
server.get('/code/:userid',function(req,res){
	APIRouter(req,res) ; 
}) ; 

//POST请求
server.post('/code/:userid',function(req,res){
	var list = [] ; 
	var post = "" ; 
	req.on("data" , function(chunk){
		list.push(chunk) ; 
	}) ; 
	req.on("end" , function(){
		// debugger ; 	
		post = Buffer.concat(list).toString() ; 
		//解析post请求数据
		post = querystring.parse(post) ; 
		action = post["action"] ; 
		data = post["data"] ;
		APIRouter(req,res,action,data) ; 
	}) ; 
}) ;

//参数路由
server.param('param',function(req,res,next,value){
	
}) ; 

console.log("Starting development server at http://0.0.0.0:%s/",port) ; 

