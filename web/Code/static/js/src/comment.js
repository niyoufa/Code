//评论组件

var CommentForm = React.createClass({
	render : function(){
		return <div className="commentForm">
		Hello, world! I am a CommentForm.
		</div>
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

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        	<div className ="commentLeft">
        		<img src="/static/images/avart_image.jpg" />
        	</div>
        	<div className ="commentRight">
        		<div className="commentIntr">
        			<span className="commentAuthor">{this.props.author}</span>
        			<span className="commentTime">{this.props.time}</span>
        		</div>
        		<p className="commentContent">
        			{this.props.children}
        		</p>
        	</div>
        	<div className="clear"></div>
      </div>
    );
  }
});

var CommentList = React.createClass({
	render : function(){
		var commentNodes = this.props.data.map( function( comment ) {
			return ( <Comment author={comment.author} time={comment.time} >
				{comment.text}
				</Comment>
				 ) ; 
		}) ; 
		return ( 
			<div className="commentList">
				{commentNodes}
			</div>
		 )
	}
}) ; 

var CommentBox = React.createClass({
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
		return  ( <div className="commentBox">
		<span>热门评论</span>
		<CommentList  data={this.state.data}/>
		</div> ) ; 
	}
}) ; 
