//用户模块

var crypto = require('crypto') ; 

//数据库连接
var Mongo = require("../Code/db_connect") ; 
//数据库集合定义
var COLLECTIONS = require("../Code/models") ; 
var Status = require("./status") ; 

var userView = {
	"login" :  function login (req,res,username,password,callback) {
		var md5sum = crypto.createHash("md5");
		md5sum.update(password) ; 
		var password = md5sum.digest('hex');
		Mongo["getMongoSession"](function(db){
			console.log("Connection Via Client Object") ; 
			var collection = db.collection(COLLECTIONS["User"].tableName,function(err,collection){
				if(err) {
					console.log("Collection Error !") ; 
				} else {
					collection.find({username:username,password:password},function(error,cursor) {
							if(!error) {
								cursor.count(function(err,count) {
									if(count == 0) {
										var result = {} ; 
										result["ret"] = Status.USERNOTEXIST ; 
										result["info"] = Status.getReason(result["ret"] ) ; 
										Mongo["logout"](db) ; 
										callback(res,result) ; 
									}
									else {
										var result = {} ; 
										result["ret"] = Status.OK ; 
										result["info"] = Status.getReason(result["ret"] ) ; 
										Mongo["logout"](db) ; 
										callback(res,result) ; 
									}
								}) ; 
							}
						}) ; 
				}
			}); 
		}) ; 
	} , 
	"register" :  function register (req,res,username,password,email,nick,callback) {
		var md5sum = crypto.createHash("md5");
		md5sum.update(password) ; 
		var password = md5sum.digest('hex');
		Mongo["getMongoSession"](function(db){
			console.log("Connection Via Client Object") ; 
			var collection = db.collection(COLLECTIONS["User"].tableName,function(err,collection){
				if(err) {
					console.log("Collection Error !") ; 
				} else {

					collection.find({username:username},function(error,cursor) {
							if(!error) {
								cursor.count(function(err,count) {
									if(count != 0) {
										var result = {} ; 
										result["ret"] = Status.USERHASEXIST ; 
										result["info"] = Status.getReason(result["ret"] ) ; 
										Mongo["logout"](db) ; 
										callback(res,result) ; 
									}
									else {
										var result = {} ; 
										result["ret"] = Status.OK ; 
										result["info"] = Status.getReason(result["ret"] ) ; 

										var shasum = crypto.createHash("sha1");
										shasum.update(username);
										var user_sha1 =  shasum.digest('hex');

										var user = {
											sha1 : user_sha1 , 
											username : username , 
											password : password , 
											email : email , 
											nick : nick , 
										}
										collection.insert(user,function(err,data){
											Mongo["logout"](db) ; 
											callback(res,result) ; 
										}) ; 
									}
								}) ; 
							}
						}) ; 
				}
			}); 
		}) ; 
	}
}

module.exports = userView ; 