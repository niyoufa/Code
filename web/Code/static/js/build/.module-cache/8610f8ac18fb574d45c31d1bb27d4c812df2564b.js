
var HomeTopNav = React.createClass({displayName: "HomeTopNav",
	render : function(){
		return (
			React.createElement("div", {className: "homeTopNav"}, 
				React.createElement("div", {className: "homeNavTitle"}, "新手编程"), 
				React.createElement("div", {className: "homeNavAddIcon"}, 
					React.createElement("img", {src: "/static/images/default.png"})
				), 
				React.createElement("div", {className: "clear"})
			)
		)
	}
}) ; 


var SearchUnit = React.createClass({displayName: "SearchUnit",
	render : function() {
		return (
			React.createElement("div", {className: "searchUnit"}, 
				React.createElement("div", {className: "searchUnitBar"}, 
					React.createElement("div", {className: "searchUnitBarIcon"}), 
					React.createElement("div", {className: "searchUnitBarInput"}, 
						React.createElement("input", {type: "text", placeholder: "主题/文章"})
					), 
					React.createElement("div", {className: "searchUnitBarOperation"}, 
						React.createElement("button", {className: "searchUnitBarButton"}, "取消")
					), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("div", {className: "searchUnitHistroyList"}, 
					React.createElement("div", {className: "searchItem"}, "python"), 
					React.createElement("div", {className: "searchItem"}, "nodejs"), 
					React.createElement("div", {className: "searchItem"}, "javascript")
				), 
				React.createElement("div", {className: "searchUnitClearHistroy"}, "清空搜索历史")
			)
		)
	}
}) ; 


var MyUnit = React.createClass({displayName: "MyUnit",
	render : function(){
		return (
			React.createElement("div", {className: "myUnit"}, 
				React.createElement("div", {className: "myNick"}, 
					"niyoufa"
				), 
				React.createElement("div", {className: "myLevel"}, 
					React.createElement("div", {className: "mycontribution"}, React.createElement("span", null, "贡献值 :"), "3", React.createElement("span", {className: "contribution"})), 
					React.createElement("div", {className: "mylevel"}, React.createElement("span", null, "等级 :"), React.createElement("span", {className: "level"}, "L1")), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("div", {className: "myPublishList"}, 
					React.createElement("span", {className: "publishCout"}, "0"), React.createElement("br", null), 
					React.createElement("span", null, "发布")
				), 
				React.createElement("div", {className: "myCommentList"}, 
					React.createElement("span", {className: "commentCout"}, "0"), React.createElement("br", null), 
					React.createElement("span", null, "评论")
				), 
				React.createElement("div", {className: "myLikedList"}, 
					React.createElement("span", {className: "likedCout"}, "0"), React.createElement("br", null), 
					React.createElement("span", null, "点赞")
				), 
				React.createElement("div", {className: "clear"})
			)
		)
	}
}) ; 


var Blog = React.createClass({displayName: "Blog",
	render : function(){
		return (
			React.createElement("div", {className: "blog"}, 
				React.createElement("div", {className: "blogTitle"}, 
					React.createElement("p", null, "不会Native，就不能开发app了?")
				), 
				React.createElement("div", {className: "blogPublishAvart"}, 
					React.createElement("img", {src: "/static/images/default.png"})
				), 
				React.createElement("div", {className: "clear"}), 

				React.createElement("div", {className: "blogOperate"}, 
					React.createElement("img", {src: "/static/images/default.png"}), 
					React.createElement("span", {className: "likedCout"}, "0"), 
					React.createElement("img", {src: "/static/images/default.png"}), 
					React.createElement("span", {className: "commentCout"}, "0")
				), 
				React.createElement("div", {className: "blogSource"}, "来自 全栈工程师"), 
				React.createElement("div", {className: "clear"})
			)
		)
	}
}) ; 


var BlogList = React.createClass({displayName: "BlogList",
	render : function(){
		return (
			React.createElement("div", {className: "blogList"}, 
				React.createElement(Blog, null), 
				React.createElement(Blog, null), 
				React.createElement(Blog, null)
			)
		)
	}
}) ; 

var CodeNav = React.createClass({displayName: "CodeNav",
	render : function(){
		return (
			React.createElement("div", {className: "codeNav"}, 
				React.createElement("div", {className: "Home"}, 
					React.createElement("img", {src: "/static/images/default.png"}), React.createElement("br", null), 
					React.createElement("span", null, "成长")
				), 
				React.createElement("div", {className: "Find"}, 
					React.createElement("img", {src: "/static/images/default.png"}), 
					React.createElement("span", null, "发现")
				), 
				React.createElement("div", {className: "Setting"}, 
					React.createElement("img", {src: "/static/images/default.png"}), 
					React.createElement("span", null, "设置")
				), 
				React.createElement("div", {className: "clear"})
			)
		)
	}
})

//成长页面
var HomeUnit = React.createClass({displayName: "HomeUnit",
	render : function() {
		return (
			React.createElement("div", {className: "homeUnit"}, 
				React.createElement(HomeTopNav, null), 
				React.createElement(SearchUnit, null), 
				React.createElement(MyUnit, null), 
				React.createElement(BlogList, null), 
				React.createElement(CodeNav, null)
			)
		)
	}
}) ; 

ReactDOM.render(
	React.createElement(HomeUnit, null) , 
	document.getElementById("home") 
)