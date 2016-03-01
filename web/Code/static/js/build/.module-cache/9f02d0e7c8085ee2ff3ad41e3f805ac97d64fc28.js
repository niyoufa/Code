// 注册组件

// 注册组件容器
var RegisterUnit = React.createClass({displayName: "RegisterUnit",
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
			React.createElement("div", {className: "registerUnit"}, 
				React.createElement(RegisterNav, null), 
				"/*第一步 填写邮箱或手机号*/", 
				React.createElement(RegisterHead, null), 
				React.createElement(RegisterBody, null), 
				React.createElement(RegisterStatement, null), 
				"/*第二步 验证邮箱和手机号*/", 
				React.createElement(RegisterEmailValidate, null), 
				React.createElement(RegisterPhoneValidate, null), 
				"/*第三步 完善基本信息*/", 
				React.createElement(RegisterBasicInfo, null)
			)
		) ; 
	}
}) ; 

//注册页面导航部分
var RegisterNav = React.createClass({displayName: "RegisterNav",
	render : function(){
		return (
			React.createElement("div", {className: "registerNav"}, 
				React.createElement("div", {className: "registerNav"}, React.createElement("span", null, "取消")), 
				React.createElement("div", {className: "registerNavTitle"}, "注册新手编程"), 
				React.createElement("div", {className: "clear"})
			) 
		)
	}
}) ; 

//注册页面头部
var RegisterHead = React.createClass({displayName: "RegisterHead",
	render : function(){
		return ( React.createElement("div", {className: "registerHead"}, React.createElement("span", null, "欢迎加入新手编程")) ) 
	}
}) ; 

//注册页面主体部分
var RegisterBody = React.createClass({displayName: "RegisterBody",
	render : function() {
		return (
			React.createElement("div", {className: "registerBody"}, 
				React.createElement("div", {className: "registerBodyInput"}, 
					React.createElement("input", {type: "text", placeholder: "邮箱/手机号", className: "emailOrPhone"}), 
					React.createElement("input", {type: "password", placeholder: "密码", className: ""}), 
					React.createElement("input", {type: "text", placeholder: "昵称", className: "nick"})
				), 
				React.createElement("div", {className: "registerBodyButton"}, 
					React.createElement("button", null, "下一步")
				)
			)
		)
	}
}) ; 

//注册页面申明部分
var RegisterStatement = React.createClass({displayName: "RegisterStatement",
	render : function() {
		return (
			React.createElement("div", {className: "registerStatement"}, 
				React.createElement("span", {className: "statementDescription"}, "点击【下一步】代表你已阅读并同意"), 
				React.createElement("a", {href: "#"}, React.createElement("span", null, "用户使用协议"))
			)
		)
	}
}) ;

// 注册邮箱验证码部分
var RegisterEmailValidate = React.createClass({displayName: "RegisterEmailValidate",
	render : function() {
		return (
			React.createElement("div", {className: "registerEmailValidate"}
				
			)
		)
	}
})