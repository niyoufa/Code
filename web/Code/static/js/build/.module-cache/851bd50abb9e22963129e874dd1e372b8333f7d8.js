//评论组件
var comment_url = "http://127.0.0.1:8010/code/api/?action=get_comment_list&data={}"
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
          this.author
        ), 
        React.createElement("p", null, this.props.children)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
	render : function(){
		var commentNodes = this.props.data.map( function( comment ) {
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
		var data = [{author: "Pete Hunt", text: "This is one comment"}] ; 
		return {data:[]} ; 
	} , 

	componentDidMount : function(){
		$.ajax({
			url : this.props.url , 
			dataType : "json" , 
			success : function(data){
				this.setState({data:data}) ; 
			}.bind(this) , 
			error : function(xhr , status , err){
				console.error(this.props.url , status , err.toString() ) ; 
			}.bind(this)  
		}) ; 
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
  React.createElement(CommentBox, {url: "http://127.0.0.1:8010/code/api/?action=get_comment_list&data={}"}),
  document.getElementById('content')
);