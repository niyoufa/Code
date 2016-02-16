//参数路由配置

var url = require("url") ; 
var UserView = require("../views/user_views") ; 
var CommentView = require("../views/comment_views") ; 
var PageView = require("../views/page_views") ; 

function checkRequestMethod(req) {
	return ; 
}

var API = {
	//登陆
	"login" : function login(req,res,params) {
		try {
			username = params["username"] ; 
			password = params["password"] ; 
		}catch(e){
			result = {"ret":"1111","info":"参数解析错误"} ; 
			res.send(result) ; 
		}
		UserView.login(req,res,username,password,function(res,result){
			console.log("返回参数 : ") ; 
			console.log(result) ; 
			res.send(result) ; 
		}) ;
	} , 
	//注册
	"register" : function register(req,res,params) {
		try {
			username = params["username"] ; 
			password = params["password"] ; 
		}catch(e){
			result = {"ret":"1111","info":"参数解析错误"} ; 
			res.send(result) ; 			
		}
		UserView.register(req,res,username,password,function(res,result){
			console.log("返回参数 : ") ; 
			console.log(result) ; 
			res.send(result) ; 
		}) ;
	} , 

	//评论页面
	"comment_page" : function comment_page(req,res,params){
		PageView.comment_page(req,res,function(res,response){
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
	} , 

	//获取评论列表
	"get_comment_list" : function get_comment_list (req,res,params){
		CommentView.get_comment_list(req,res,function(res,result){
			console.log("返回参数 : ") ; 
			console.log(result) ; 
			res.send(result) ; 
		}) ; 
	} , 
}


//根据action路由
var URLPatterns = {} ; 
URLPatterns["api"] = API ; 
URLPatterns["static"] = STATIC ; 

var STATIC = {
	
}

//路由函数
var Router = function(req,res) {
	debugger ; 
	var url_part = req.param("userid") ; 
	var params = req.query ; 
	try {
		var action = params["action"] ; 
		var data = params["data"] ; 
	}catch(e) {
		result = {"ret":"1111","info":"参数解析错误"} ;
		res.send(result) ; 
	}
	try {
		console.log("请求方法 : " + action) ; 
		console.log("请求参数 : ") ; 
		console.log(data) ; 
		URLPatterns[url_part][action](req,res,data) 
	}catch(e) {
		result = {"ret":"1111","info":"没有匹配的路由"} ; 
		res.send(result) ; 
	}
}

module.exports = Router ; 
