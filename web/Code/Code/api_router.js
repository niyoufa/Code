//参数路由配置

var url = require("url") ; 
var UserView = require("../views/user_views") ; 
var CommentView = require("../views/comment_views") ; 
var Status = require("../views/status") ; 

function checkRequestMethod(req) {
	return ; 
}

var API = {
	//登陆
	"login" : function login(req,res,params) {
		debugger ; 
		try {
			username = params["username"] ; 
			password = params["password"] ; 
		}catch(e){
			var result = {} ; 
			result["ret"] = Status.UNKNOWNERR ; 
			result["info"] = Status.getReason(result["ret"] ) ; 
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
			email = params["email"] ; 
			nick = params["nick"] ; 
		}catch(e){
			var result = {} ; 
			result["ret"] = Status.UNKNOWNERR ; 
			result["info"] = Status.getReason(result["ret"] ) ; 
			res.send(result) ; 			
		}
		UserView.register(req,res,username,password,email,nick,function(res,result){
			console.log("返回参数 : ") ; 
			console.log(result) ; 
			res.send(result) ; 
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
		var result = {} ; 
		result["ret"] = Status.UNKNOWNERR ; 
		result["info"] = Status.getReason(result["ret"] ) ; 
		res.send(result) ; 
	}
	try {
		console.log("请求方法 : " + action) ; 
		console.log("请求参数 : ") ; 
		data = JSON.parse(data) ; 
		try {
			console.log(data) ; 
		}catch(e) {
			debugger ; 
			console.log(e) ; 
		}
		
		debugger ;
		URLPatterns[url_part][action](req,res,data) 
	}catch(e) {
		var result = {} ; 
		result["ret"] = Status.UNKNOWNERR ; 
		result["info"] = Status.getReason(result["ret"] ) ; 
		res.send(result) ; 
	}
}

module.exports = Router ; 
