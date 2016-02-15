// 页面

var fs = require("fs") ; 

pageView = {
	"index_page" : function index_page(req){
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
		return result ; 
	} , 
}

module.exports = pageView ; 