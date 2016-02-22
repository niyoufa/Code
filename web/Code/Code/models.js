//新手编程表结构定义初始化

//数据库连接
Mongo = require("../Code/db_connect") ; 
Utils = require("../views/utils") ; 

var True = true ; 
var False = false ;  

//字段基类
function Field(object) {
	var value = "" ; 
	if (object.hasOwnProperty("default")) {
		value = object.default ; 
	}
	return value 
}

//用户表
function User () {
	this.tableName = "code_user" ;  

	//用户sha1: 根据username计算
	this.sha1 = Field({max_lengt:40})  ;  

	//用户名
	this.username = Field({max_length:40}) ; 

	//微信openid，如果非空，username和phone也被设置为wechat_openid
	this.wechat_openid  = Field({max_length:128, db_index:True}) ; 

	//密码
	this.password  = Field({max_length:255}) ; 

	//支付密码
	this.pay_password  = Field({max_length:255}) ; 

	//用户类型 0表示普通用户，1: 微信用户 2:测试用户 3:企业管理员
	this.type  = Field({"default":0}) ; 

	//用户昵称
	this.nick  = Field({max_length:255,"default":""}) ; 

	//头像sha1
	this.avarta_sha1  =  Field({max_length:40})  ; 

	//注册时间
	this.signup_time  = Field({})  ; 

	//email帐号
	this.email = Field({})  ; 

	//积分
	this.score = Field({"default":0})  ; 

}

//标签
function Tag() {
	this.tableName = "code_tag" ;  

	//标签sha1
	this.tag_sha1 = Field({max_length:40}) ; 

	//标签名称
	this.name = Field({max_length:255}) ; 

}

//文章博客
function Article() {
	this.tableName = "code_article" ; 

	//文章sha1
	this.article_sha1 = Field({max_length:40}) ; 

	//文章标题
	this.title = Field({max_length:255}) ; 

	//文章链接
	this.url = Field({}) ; 

	//文章标签sha1
	this.tag_sha1 = Field({max_length:40}) ; 

	//文章来源主题sha1(第一个贡献该文章的用户的主题)
	this.source_theme_sha1 = Field({max_length:40}) ; 

	//文章创建日期
	this.creation_time = Field({})  ;
}

//主题表
function Theme() {
	this.tableName = "code_theme" ; 

	//主题sha1
	this.theme_sha1 = Field({max_length:40}) ; 

	//创建者sha1
	this.user_sha1 = Field({max_length:40}) ; 

	//创建时间
	this.creation_time = Field({}) 

	//主题名称（标题）
	name = Field({})

	//分享人数
	nb_share = Field({"defalt":0}) ; 

	//关注人数
	nb_follow = Field({"defalt":0}) ; 
} 

//主题与文章收藏关系表
function ArticleThemeRelation() {
	this.tableName = "code_article_theme_relation" ; 

	//文章sha1
	this.article_sha1 = Field({max_length:40}) ; 

	//主题sha1
	this.theme_sha1 = Field({max_length:40}) ; 

	//收藏时间
	this.collection_time = Field({}) 
}


//评论
function Comment() {
	this.tableName = "code_comment" ; 

	// #sha1: 由user_sha1, obj_sha1和time计算而成
	// sha1 = models.CharField(max_length=40,db_index=True)

	// #用户sha1
	// user_sha1 = models.CharField(max_length=40)

	// #行为对象sha1
	// obj_sha1 = models.CharField(max_length=40)

	// #行为对象类型
	// obj_type = models.IntegerField() 

	// #评论时间
	// time = models.DateTimeField() 

	// #评论内容
	// content = CompressedTextField(default="")

	// #类型 0:评论 1:回复 2: 点赞 3:吐槽
	// type = models.IntegerField(default=0) 

	// #状态 -1:删除  0: 创建
	// status = models.IntegerField(default=0)

	// #回复谁？
	// parent_sha1 = models.CharField(max_length=40)

	// #相关图片和文件的sha1列表
	// attachments=  CompressedTextField(default='[]')

	// #投票结果,缺省为-1表示未投票,数字1，2，3对应于选择题答案的ID
	// vote = models.IntegerField(default=-1) 
}

//用户的积分获取记录
function ScoreRecord() {
	this.tableName = "code_score_record" ;  
}

//联系人表
function ContactRelation() {
	this.tableName = "code_contact_relation" ;  
	//用户sha1
	this.user_sha1 = Field({max_length:40}) ; 

	//好友sha1
	this.contact_sha1 = Field({max_length:40}) ; 

	//备注
	this.comment = Field({max_length:255}) ; 

	//添加时间
	this.add_time = Field({}) ; 

}

//投票
function Vote() {
	this.tableName = "code_vote" ; 

	// //投票的sha1，由Topic sha1和作者sha1计算而成
	// sha1 = models.CharField(max_length=40)

	// // Topic的sha1
	// obj_sha1 = models.CharField(max_length=40)

	// //创建者sha1
	// creator_sha1 = models.CharField(max_length=40)

	// //创建时间
	// creation_time = models.DateTimeField(auto_now_add=True)
	
	// //投票人数
	// nb_votes = models.IntegerField(default=0)

	// //投票列表内容, json格式, {"1":"答案1","2":"答案2", "1-img":"ajhAksjd.jpg", "2-img":"aasad2.jpg"}
 //    	//1-img和2-img指的是附属图片的sha1
	// vote_content = CompressedTextField(default="{}")
    
	// //投票结果统计, json格式，{"1":6,"2":5}
	// vote_stat = CompressedTextField(default="{}")

	// //投票附属输入信息, json格式, 例如:［｛"title":"您的性别", "1":"男", "0":"女"｝，
 //    	//                            ｛“title”:"您的出身", "1":"城市","2":"县城和城镇"，“3”:“农村”｝，
 //    	//                            ｛“title”:"您的年薪阶层","1":"20万以上"｝］
 //    	// added by tao on Febr 11, 2016
	// vote_profile = CompressedTextField(default="[]")
    
	// //最近修改时间
	// lmt = models.DateTimeField(auto_now_add=True)
}

//投票记录
function VoteRecord() {
	this.tableName = "code_vote_record" ; 

	// #投票sha1
	// vote_sha1 = models.CharField(max_length=40)

	// #用户sha1
	// user_sha1 = models.CharField(max_length=40)

	// #投票选项
	// vote_option = models.IntegerField() 

 //    	#附属信息输入结果, json格式，例如[1,3,1], added by tao on Febr 11, 2016
 //    	vote_profile_result = CompressedTextField(default="[]")
    
	// #投票时间
	// vote_time = models.DateTimeField()
}

//存储图片
function FileImage() {
	this.tableName = "code_file_image" ; 

	// #sha1，由name和author_sha1及time计算而成
	// sha1 = models.CharField(max_length=50)

	// #图片和文件的内容压缩之后的base64，将来转移到HDFS中
	// content = CompressedTextField()

	// #内容sha1
	// content_sha1 =  models.CharField(max_length=40)

	// #名称
	// name = models.CharField(max_length=255)

	// #大小
	// size = models.IntegerField()

	// #类型：0为普通图片，1为用户头像，2为普通文件
	// type = models.IntegerField()

	// #上传者sha1
	// author_sha1 = models.CharField(max_length=40)

	// #上传时间
	// time = models.DateTimeField(auto_now_add=True)
}

function Message() {
	this.tableName = "code_message" ; 

	// # 消息的sha1: 由user_sha1, obj_sha1 加 creation_time 三者计算而成
	// sha1 = models.CharField(max_length=40)

	// # 收到消息的协力用户的sha1
	// user_sha1 = models.CharField(max_length=40,db_index=True)

	// # 相关的问题/活动/求助等的sha1，空表示系统消息
	// obj_sha1 = models.CharField(max_length=40)

	// # 消息类型: 0表示系统消息  1报名/参与  2 回复/评论  3 签到/完成任务   4审核消息/红包发放  5:个人认证审核消息   -1 移动端发的请求
	// type = models.IntegerField(default=0)

	// # 消息时间
	// creation_time = models.DateTimeField(auto_now_add=True)

	// # 消息内容：json内容zlib压缩之后的base64值
	// content = CompressedTextField()

	// # 用户是否已读 0 : :未读 1 : 已读 -1 : 删除
	// already_read = models.IntegerField(default=0)
} 


//数据库表格
var COLLECTIONS =  {
	User : new User() , 
	ContactRelation : new ContactRelation() , 
	Tag : new Tag() , 
	Article : new Article() , 
	Theme : new Theme() , 
	ArticleThemeRelation : new ArticleThemeRelation() , 
}

//数据库
function DATABASE() {
	this.name = "code" ; 
	this.collections = COLLECTIONS ; 
}

//初始化数据库定义
function syncdb(db) {
	var database = new DATABASE() ; 
	var databaseName = database.name ; 
	var collections = database.collections ; 
	console.log(Utils.StringFormat("Start Initial Database : {0}",database.name)) ; 
	var newDB = db.db(databaseName) ; 
	for(index in collections) {
		collection = collections[index] ; 
		var collectionName = collection.tableName ; 
		//创建集合
		try {
			newDB.createCollection(collectionName, function(err, collection) {
				if(!err) {
					console.log(Utils.StringFormat("Collection Created : {0}",collection.collectionName)) ; 
				}	
			} ) ; 
		}catch(e) {
			console.log(e) ; 
		}
	}

}

//执行初始化
// Mongo["getMongoSession"](syncdb) ; 

module.exports = COLLECTIONS ; 
