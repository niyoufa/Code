// 页面

var fs = require("fs") ; 

pageView = {
	"test_page" : function test_page(req,callback){
		var result = "" ; 
		try {
			fd = fs.openSync("../templates/test.html","r") ; 
			do {
				var buf = new Buffer(1024) ; 
				buf.fill() ; 
				var bytes = fs.readSync(fd,buf,null,1024) ; 
				console.log("read %dbytes",bytes) ; 
				if (buf != "null") {
					result += buf.toString() ; 
				}
			} while (bytes > 0) ; 
			fs.closeSync(fd) ; 
		}
		catch(e){
			console.log(e) ; 
			return e ; 
		}
		callback(result) ; 
	} , 
	"index_page" : function index_page(req,callback){
		var result = "" ; 
		try {
			fd = fs.openSync("../templates/index.html","r") ; 
			do {
				var buf = new Buffer(1024) ; 
				buf.fill() ; 
				var bytes = fs.readSync(fd,buf,null,1024) ; 
				console.log("read %dbytes",bytes) ; 
				if (buf != "null") {
					result += buf.toString() ; 
				}
			} while (bytes > 0) ; 
			fs.closeSync(fd) ; 
		}
		catch(e){
			console.log(e) ; 
			return e ; 
		}
		callback(result) ; 
	} , 
	"login_page" : function login_page(req,callback){
		var result = "" ; 
		try {
			fd = fs.openSync("../templates/login.html","r") ; 
			do {
				var buf = new Buffer(1024) ; 
				buf.fill() ; 
				var bytes = fs.readSync(fd,buf,null,1024) ; 
				console.log("read %dbytes",bytes) ; 
				if (buf != "null") {
					result += buf.toString() ; 
				}
			} while (bytes > 0) ; 
			fs.closeSync(fd) ; 
		}catch(e) {
			console.log(e) ; 
			return e ; 
		}
		callback(result) ; 
	}
}

module.exports = pageView ; 