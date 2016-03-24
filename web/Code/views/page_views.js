// 页面

var fs = require("fs") ; 

//响应数据
var responseCallback = function(res,file_path) {
	var readStream = fs.createReadStream(file_path) ; 
	readStream.on("data",function(chunk){
		res.write( chunk.toString() ) ; 
	}) ;
	readStream.on("end",function(){
		res.end() ; 
	}) ; 
}

//请求html路由
var pageView = {
	"test_page" : function test_page(req,res,callback){
		try {
			responseCallback(res, "../templates/test.html") ; 
		}
		catch(e){
			console.log(e) ; 
			callback(e)
		}
	} , 
	"home_page" : function index_page(req,res,callback){
		try {
			responseCallback(res , "../templates/home.html") ; 
		}
		catch(e){
			console.log(e) ; 
			callback(e) ; 
		}
	} , 
	"login_page" : function login_page(req,res,callback){
		try {
			responseCallback(res , "../templates/login.html") ; 
		}catch(e) {
			console.log(e) ; 
			callback(e) ; 
		}
	},
	"register_page" : function login_page(req,res,callback){
		try {
			responseCallback(res , "../templates/register.html") ; 
		}catch(e) {
			console.log(e) ; 
			callback(e) ; 
		}
	},
	"register_success" : function register_success(req,res,callback) {
		try{
			responseCallback(res , "../templates/register_success.html") ; 
		}catch(e){
			console.log(e) ; 
			callback(e) ; 
		}
	}
}

module.exports = pageView ; 