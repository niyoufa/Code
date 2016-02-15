//评论模块

var commentView = {
	"get_comment_list" : function get_comment_list(req){
		result =  [
		{author: "倪有发", text: "原来社会没有公正的，我想知道如果受害人是律师的亲戚，他还会不会只在当事人 那边说话？这叫什么王法。心很痛。。",time:"02月01日 18:17:49"} , 
		{author: "倪有发", text: "律师就是给有钱人辩护的,没有正义。" , time:"02月01日 18:17:49"} , 
		{author: "倪有发", text: "主持正义不是律师的职责,毕竟除了当事人以外没有人知道真相是什么。律师的责任是保护委托人的利益，并实现利益最大化。律师不是魔鬼，也不是天使，它们只是运营自己的专业知识来帮助委托人取得他们法律上应得的权益。" ,time:"02月01日 18:17:49"} , 
		] ; 
		return result ; 
	}
}

module.exports = commentView ; 