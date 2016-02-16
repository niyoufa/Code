//评论模块
getCommetList = require("../Code/db_connect") ; 

var commentView = {
	"get_comment_list" : function get_comment_list(req,res,callback){
		getCommetList(req,res,callback)
	}
}

module.exports = commentView ; 