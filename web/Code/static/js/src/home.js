
var HomeTopNav = React.createClass({
	render : function(){
		return (
			<div className="homeTopNav">
				<div className="homeNavTitle">新手编程</div>
				<div className="homeNavAddIcon">
					<img src="/static/images/default.png" />
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}) ; 


var SearchUnit = React.createClass({
	render : function() {
		return (
			<div className="searchUnit">
				<div className="searchUnitBar">
					<div className="searchUnitBarIcon"></div>
					<div className="searchUnitBarInput">
						<input type="text" placeholder="主题/文章" />
					</div>
					<div className="searchUnitBarOperation">
						<button className="searchUnitBarButton">取消</button>
					</div>
					<div className="clear"></div>
				</div>
				<div className="searchUnitHistroyList">
					<div className="searchItem">python</div>
					<div className="searchItem">nodejs</div>
					<div className="searchItem">javascript</div>
				</div>
				<div className="searchUnitClearHistroy">清空搜索历史</div>
			</div>
		)
	}
}) ; 


var MyUnit = React.createClass({
	render : function(){
		return (
			<div className="myUnit">
				<div className="myNick">
					niyoufa
				</div>
				<div className="myLevel">
					<div className="mycontribution"><span>贡献值 :</span>3<span className="contribution"></span></div>
					<div className="mylevel"><span>等级 :</span><span className="level">L1</span></div>
					<div className="clear"></div>
				</div>
				<div className="myPublishList">
					<span className="publishCout">0</span><br/>
					<span>发布</span>
				</div>
				<div className="myCommentList">
					<span className="commentCout">0</span><br/>
					<span>评论</span>
				</div>
				<div className="myLikedList">
					<span className="likedCout">0</span><br/>
					<span>点赞</span>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}) ; 


var Blog = React.createClass({
	render : function(){
		return (
			<div className="blog">
				<div className="blogTitle">
					<p>不会Native，就不能开发app了?</p>
				</div>
				<div className="blogPublishAvart">
					<img  src="/static/images/default.png" />
				</div>
				<div className="clear"></div>

				<div className="blogOperate">
					<img src="/static/images/default.png" />
					<span className="likedCout">0</span>
					<img src="/static/images/default.png" />
					<span className="commentCout">0</span>
				</div>
				<div className="blogSource">来自 全栈工程师</div>
				<div className="clear"></div>
			</div>
		)
	}
}) ; 


var BlogList = React.createClass({
	render : function(){
		return (
			<div className="blogList">
				<Blog></Blog>
			</div>
		)
	}
}) ; 

var CodeNav = React.createClass({
	render : function(){
		return (
			<div className="codeNav">
				<div className="Home">
					<img src="/static/images/default.png" /><br/>
					<span>成长</span>
				</div>
				<div className="Find">
					<img src="/static/images/default.png" /><br/>
					<span>发现</span>
				</div>
				<div className="Setting">
					<img src="/static/images/default.png" /><br/>
					<span>设置</span>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
})

//成长页面
var HomeUnit = React.createClass({
	render : function() {
		return (
			<div className="homeUnit">
				<HomeTopNav></HomeTopNav>
				<SearchUnit></SearchUnit>
				<MyUnit></MyUnit>
				<BlogList></BlogList>
				<CodeNav></CodeNav>
			</div>
		)
	}
}) ; 

ReactDOM.render(
	<HomeUnit/> , 
	document.getElementById("home") 
)