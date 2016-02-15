//评论组件

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is another comment"}
];

var CommentForm = React.createClass({displayName: "CommentForm",
	render : function(){
		return React.createElement("div", {className: "commentForm"}, 
		"Hello, world! I am a CommentForm."
		)
	}
}) ; 

// var converter = new Showdown.converter();
// var Comment = React.createClass({
//   render: function() {
//     var rawMarkup = converter.makeHtml(this.props.children.toString());
//     return (
//       <div className="comment">
//         <h2 className="commentAuthor">
//           {this.props.author}
//         </h2>
//        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
//       </div>
//     );
//   }
// });

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.x.author
        ), 
        React.createElement("p", null, this.props.children)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
	render : function(){
		var commentNodes = this.state.data.map( function( comment ) {
			return ( React.createElement(Comment, {author: comment.author}, 
				comment.text
				)
				 ) ; 
		}) ; 
		return ( 
			React.createElement("div", {className: "commentList"}, 
				commentNodes
			)
		 )
	}
}) ; 

var CommentBox = React.createClass({displayName: "CommentBox",
	getInitialState : function(){
		var data = {author: "Pete Hunt", text: "This is one comment"} ; 
		return data
	} , 

	render : function(){
		return  ( React.createElement("div", {className: "commentBox"}, 
		React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, {data: this.state.data}), 
		React.createElement(CommentForm, null)
		) ) ; 
	}
}) ; 

ReactDOM.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);