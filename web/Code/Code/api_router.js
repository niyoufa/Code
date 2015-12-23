//参数路由配置

var url = require("url") ; 
var UserView = require("../views/user_views") ; 

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
	}
}
var URLPatterns = {} ; 
URLPatterns["api"] = API ; 

//路由函数
var APIRouter = function(req) {
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
		return URLPatterns[url_part][action](req,data) ; 
	}catch(e) {
		result = {"ret":"1111","info":"没有匹配的路由"} ; 
		return result ; 
	}
	
}

module.exports = APIRouter ; 
