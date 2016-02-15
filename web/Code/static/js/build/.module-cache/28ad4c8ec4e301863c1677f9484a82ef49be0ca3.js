//评论组件

var CommentBox = React.createClass({displayName: "CommentBox",
	render : function(){
		return 
		React.createElement("div", {className: "commentBox"}, 
			"Hello! I am a CommentBox ." 
		)
	}
})


React.render(
  React.createElement("h1", null, "Hello niyoufa!"),
  document.getElementById('content')
);