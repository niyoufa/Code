// 登录组件

//登录组件容器
var LoginUnit = React.createClass({
	// getInitialState : function() {
	// 	return {} ; 
	// } , 

	// componentDidMount : function() {
	// 	$.get(this.state.url,function(data){
	// 		this.setState({data: data});
	// 	}.bind(this),"json") ; 
	// } , 

	render : function() {
		return (
			<div className="loginUnit">
				<LoginNav></LoginNav>
				<LoginBody></LoginBody>
				<LoginForgetPassword></LoginForgetPassword> 
				<LoginThirdPlat></LoginThirdPlat>
			</div>
		) ; 
	}

}) ; 

//登录页面导航
var LoginNav = React.createClass({
	render : function() {
		return ( 
			<div className="loginNav">
				<div className="loginNavXPng"><img src="/static/images/x_black.png" /></div>
				<div className="loginNavTitle">登录</div>
				<div className="clear"></div>
			</div> 
		) ; 
	}
}) ; 

//用户名密码输入框与注册登陆按钮
var LoginBody = React.createClass({
	render : function() {
		return (
			<div className="loginBody">
				<div className="loginInput">
					<div className="loginInputUserName">
						<div style={{float:"left"}}>
							<img src="/static/images/user.png" />
						</div>
						<div style={{float:"left"}}>
							<input type="text" className="username" placeholder="用户名/手机号" />
						</div>
						<div style={{"float":"left","margin-left":"10px"}}>
						</div>
						<div className="clear"></div>
					</div>
					<div className="loginInputPassword">
						<div className="usernameList">
							<span>xiaofafa</span><img src="/static/images/delete.png" /><br/>
							<span>yanqing</span><img src="/static/images/delete.png" /><br/>
						</div>
						<div style={{float:"left"}}>
							<img src="/static/images/password.jpg" />
						</div>
						<div style={{float:"left"}}>
							<input type="text" className="password"  placeholder="密码"/>
						</div>
						<div className="clear"></div>
					</div>
				</div>
				<div className="loginButton">
					<button className="register">注册</button>
					<button className="login">登录</button>
				</div>
			</div>
		)
	}
}) ; 

//忘记密码
var LoginForgetPassword = React.createClass({
	render : function() {
		return (
			<div className="loginForgetPassword">
				<span>忘记密码</span>
			</div>
		) ; 
	}
}) ; 

//社交账户登陆
var LoginThirdPlat = React.createClass({
	render : function() {
		return ( <div className="loginThirdPlat">
			<div className="loginThirdPlatTitle"><span>使用社交账户登录 </span></div>
			<div className="platOptionList">
				<img src="/static/images/weixin.jpg" style={{"margin-left": "-5px"}}/>
				<img src="/static/images/weibo.jpg"/>
				<img src="/static/images/qq.jpg"/>
			</div>
		</div> )
	}
}) ; 

//加载登录组件
ReactDOM.render(
  <LoginUnit />,
  document.getElementById('login_page') 
);