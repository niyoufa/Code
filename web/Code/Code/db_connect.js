//从Node.js连接到数据库

var mongodb = require('mongodb') ; 
var MongoClient = mongodb.MongoClient ; 
var Server = mongodb.Server ; 
// var url = "mongodb://dbadmin:niyoufa@localhost:27017/admin" ; 
var url = "mongodb://localhost:27017/code" ; 
//object 
// var client = new MongoClient(new Server(
// 	'localhost' , 27017, {
// 		socketOptions : { connectTimeoutMS : 500 } , 
// 		poolSize : 5 , 
// 		auto_reconnect : true 
// 	}) , {
// 		numberOfRetries : 3 , 
// 		retryMilliSeconds : 500 
// 	}
// ) ; 

// client.open(function(err , client){
// 	debugger ; 
// 	if(err) {
// 		console.log("Connection Failed Via Client Object") ; 
// 	} else {
// 		//连接数据库
// 		var db = client.db("admin") ; 
// 		if(db) {
// 			console.log("Connection Via Client Object") ; 
// 			//用户认证
// 			db.authenticate("dbadmin","niyoufa",function(err,results) {
// 				if(err) {
// 					console.log("Authentication failed ") ; 
// 					client.close() ; 
// 					console.log("Connection Close") ; 
// 				} else {
// 					console.log("Authentication Via Client Object") ; 
// 					//注销数据库
// 					db.logout(function(err,results) {
// 						if(!err) {
// 							console.log("Logged out Via Client Object ...") ; 
// 						}
// 						client.close() ; 
// 						console.log("Connection closed ") ; 
// 					}) ; 
// 				}
// 			}) ; 
// 		}
// 	}
// } )

//string 


function logout(db) {
	//注销数据库
	db.logout(function(err,results) {
		if(!err) {
			console.log("Logged out Via Client Object ...") ; 
		}
		db.close() ; 
		console.log("Connection closed ") ; 
	}) ; 
}

function getCommetList(req,res,callback) {
	MongoClient.connect(url,{
		db : { w:1,native_parser:false } , 
		server : {
			socketOptions : { connectTimeoutMS : 500 } , 
			poolSize : 5 , 
			auto_reconnect : true 
		} , 
		replSet : {} , 
		mongo : {} 
	},function(err,db) {
		if(err) {
			console.log("Connection Failed Via Client Object") ; 
		} else {
			console.log("Connection Via Client Object") ; 
			var collection = db.collection("comment",function(err,collection){
				if(err) {
					console.log("Collection Error !") ; 
				} else {
					collection.find(function(error,cursor) {
							if(!error) {
								cursor.toArray(function(error,items){
									var result = items ; 
									logout(db) ; 
									callback(res,result) ; 
								})
							}
						}) ; 
				}
			}); 
		}
	}) ; 
}
// getCommetList() ; 
module.exports = getCommetList ; 