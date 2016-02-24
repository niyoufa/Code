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
				React.createElement(RegisterHead, null), 
				React.createElement(RegisterBody, null), 
				React.createElement(RegisterStatement, null)
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
		React.createElement("div", {className: "registerHead"}, React.createElement("span", null, "欢迎加入新手编程"))
	}
}) ; 

//注册页面主体部分
var RegisterBody = React.createClass({displayName: "RegisterBody",
	render : function() {
		React.createElement("div", {className: "registerBody"}, 
			React.createElement("div", {className: "registerBodyInput"}, 
				React.createElement("input", {type: "text", placeholder: "邮箱/手机号", className: "emailOrPhone"}), 
				React.createElement("input", {type: "text", placeholder: "邮箱/手机号", className: ""}), 
				React.createElement("input", {type: "text", placeholder: "邮箱/手机号"})
			)
		)
	}
}) ; 

