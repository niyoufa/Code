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
	"login" : function login(req,params) {
		try {
			username = params["username"] ; 
			password = params["password"] ; 
		}catch(e){
			result = {"ret":"1111","info":"参数解析错误"} ; 
			return result ; 
		}
		
		return UserView.login(req,username,password) ;
	} , 
	//注册
	"register" : function register(req,params) {
		username = params["username"] ; 
		password = params["password"] ; 
		return UserView.register(req,username,password) ;
	} , 

	//评论页面
	"comment_page" : function comment_page(req){
		return PageView.comment_page(req) ; 
	} , 

	//获取评论列表
	"get_comment_list" : function get_comment_list (req,params){
		return CommentView.get_comment_list(req) ; 
	} , 
}


//根据action路由
var URLPatterns = {} ; 
URLPatterns["api"] = API ; 
URLPatterns["static"] = STATIC ; 

var STATIC = {
	
}

//路由函数
var Router = function(req) {
	var url_part = req.param("userid") ; 
	var params = req.query ; 
	try {
		var action = params["action"] ; 
		var data = params["data"] ; 
	}catch(e) {
		result = {"ret":"1111","info":"参数解析错误"} ;
		return result ; 
	}
	try {
		console.log("请求方法 : " + action) ; 
		console.log("请求参数 : ") ; 
		console.log(data) ; 
		result = URLPatterns[url_part][action](req,data) 
		return result ; 
	}catch(e) {
		result = {"ret":"1111","info":"没有匹配的路由"} ; 
		return result ; 
	}
}

module.exports = Router ; 
