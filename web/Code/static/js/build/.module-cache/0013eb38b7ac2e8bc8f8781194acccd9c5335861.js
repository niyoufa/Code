// 登录组件

//登录组件容器
var LoginUnit = React.createClass({displayName: "LoginUnit",
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
			React.createElement("div", {className: "loginUnit"}, 
				React.createElement(LoginNav, null), 
				React.createElement(LoginBody, null), 
				React.createElement(LoginForgetPassword, null), 
				React.createElement(LoginThirdPlat, null)
			)
		) ; 
	}

}) ; 

//登录页面导航
var LoginNav = React.createClass({displayName: "LoginNav",
	render : function() {
		return ( 
			React.createElement("div", {className: "loginNav"}, 
				React.createElement("div", {className: "loginNavXPng"}, React.createElement("img", {src: "/static/images/x_black.png"})), 
				React.createElement("div", {className: "loginNavTitle"}, "登录"), 
				React.createElement("div", {className: "clear"})
			) 
		) ; 
	}
}) ; 

//用户名密码输入框与注册登陆按钮
var LoginBody = React.createClass({displayName: "LoginBody",
	render : function() {
		return (
			React.createElement("div", {className: "loginBody"}, 
				React.createElement("div", {className: "loginInput"}, 
					React.createElement("div", null, 
						React.createElement("img", {src: "/static/images/default.png"})
					), 
					React.createElement("div", null, 
						React.createElement("input", {type: "text", className: "username", value: "niyoufa"})
					), 
					React.createElement("div", null, 
						React.createElement("img", {src: "/static/images/default.png"})
					), 
					React.createElement("div", {className: "usernameList"}, 
						React.createElement("span", null, "xiaofafa"), React.createElement("img", {src: "/static/images/delete.png"}), React.createElement("br", null), 
						React.createElement("span", null, "yanqing"), React.createElement("img", {src: "/static/images/delete.png"}), React.createElement("br", null)
					), 
					React.createElement("div", null, 
						React.createElement("img", {src: "/static/images/default.png"}), 
						React.createElement("input", {type: "text", className: "password", value: "123456"})
					)
				), 
				React.createElement("div", {className: "loginButton"}, 
					React.createElement("button", {className: "register"}, "注册"), 
					React.createElement("button", {className: "login"}, "登录")
				)
			)
		)
	}
}) ; 

//忘记密码
var LoginForgetPassword = React.createClass({displayName: "LoginForgetPassword",
	render : function() {
		return (
			React.createElement("div", {className: "loginForgetPassword"}, 
				React.createElement("span", null, "忘记密码")
			)
		) ; 
	}
}) ; 

//社交账户登陆
var LoginThirdPlat = React.createClass({displayName: "LoginThirdPlat",
	render : function() {
		return ( React.createElement("div", {className: "loginThirdPlat"}, 
			React.createElement("div", {className: "loginThirdPlatTitle"}, React.createElement("span", null, "使用社交账户登录 ")), 
			React.createElement("div", {className: "platOptionList"}, 
				React.createElement("img", {src: "/static/images/default.png"}), 
				React.createElement("img", {src: "/static/images/default.png"}), 
				React.createElement("img", {src: "/static/images/default.png"})
			)
		) )
	}
}) ; 

//加载登录组件
ReactDOM.render(
  React.createElement(LoginUnit, null),
  document.getElementById('login_page') 
);