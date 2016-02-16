//评论模块

//数据库连接
Mongo = require("../Code/db_connect") ; 

var commentView = {
	"get_comment_list" : function get_comment_list(req,res,callback){
		Mongo["getMongoSession"](function(db){
			console.log("Connection Via Client Object") ; 
			var collection = db.collection("comment",function(err,collection){
				if(err) {
					console.log("Collection Error !") ; 
				} else {
					collection.find(function(error,cursor) {
							if(!error) {
								cursor.toArray(function(error,items){
									var result = items ; 
									Mongo["logout"](db) ; 
									callback(res,result) ; 
								})
							}
						}) ; 
				}
			}); 
		}) ; 
	}
}


module.exports = commentView ; 