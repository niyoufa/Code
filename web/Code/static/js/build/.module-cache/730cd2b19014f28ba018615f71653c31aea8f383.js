//评论组件

var CommentBox = React.createClass({displayName: "CommentBox",
	render : function(){
		return  React.createElement("div", {className: "commentBox", style: {"border":"solid 1px;"}}, 
		"Hello! I am a CommentBox ." 
		) ; 
	}
})


ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);