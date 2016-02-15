//评论组件

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentForm = React.createClass({displayName: "CommentForm",
	render : function(){
		return React.createElement("div", {className: "commentForm"}, 
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
var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
       React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

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