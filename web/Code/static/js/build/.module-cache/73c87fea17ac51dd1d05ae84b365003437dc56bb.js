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
        	React.createElement("div", {className: "commentLeft"}, 
        		React.createElement("img", {src: "/static/images/avart_image.jpg"})
        	), 
        	React.createElement("div", {className: "commentRight"}, 
        		React.createElement("div", {className: "commentIntr"}, 
        			React.createElement("span", {className: "commentAuthor"}, this.props.author), 
        			React.createElement("span", {className: "commentTime"}, this.props.time)
        		), 
        		React.createElement("p", {className: "commentContent"}, 
        			this.props.children
        		)
        	), 
        	React.createElement("div", {className: "clear"})
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
	render : function(){
		var commentNodes = this.props.data.map( function( comment ) {
			return ( React.createElement(Comment, {author: comment.author, time: comment.time}, 
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
		return {url : "/code/api/?action=get_comment_list&data={}" , data:[]} ; 
	} , 

	componentDidMount : function(){
		// $.ajax({
		// 	url : this.state.url , 
		// 	dataType : "json" , 
		// 	success : function(data){
		// 		this.setState({data:data}) ; 
		// 	}.bind(this) , 	
		// 	error : function(xhr , status , err){
		// 		console.error(this.props.url , status , err.toString() ) ; 
		// 	}.bind(this)  
		// }) ;
		$.get(this.state.url,function(data){
			this.setState({data: data});
		}.bind(this),"json") ; 
	} , 

	render : function(){
		return  ( React.createElement("div", {className: "commentBox"}, 
		React.createElement("span", null, "热门评论"), 
		React.createElement(CommentList, {data: this.state.data})
		) ) ; 
	}
}) ; 

// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('comment')
// );