//评论组件


var CommentForm = React.createClass({displayName: "CommentForm",
	render : function(){
		return React.createElement("div", {class: "commentForm"}, 
		"Hello, world! I am a CommentForm."
		)
	}
}) ; 

var CommentList = React.createClass({displayName: "CommentList",
	render : function(){
		return React.createElement("div", {className: "commentList"}, 
		React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
        		React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
		)
	}
}) ; 

var CommentBox = React.createClass({displayName: "CommentBox",
	render : function(){
		return  ( React.createElement("div", {className: "commentBox"}, 
		React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, null), 
		React.createElement(CommentForm, null)
		) ) ; 
	}
}) ; 




ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);