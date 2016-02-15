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
		return React.createElement("div", {className: "commentList"}

		)
	}
}) ; 

var CommentBox = React.createClass({displayName: "CommentBox",
	render : function(){
		return  ( React.createElement("div", {className: "commentBox"}, 
		React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, null)
		) ) ; 
	}
}) ; 




ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);