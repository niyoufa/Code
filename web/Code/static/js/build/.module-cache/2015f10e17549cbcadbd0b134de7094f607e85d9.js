// 注册组件

//注册页面导航部分
var RegisterNav = React.createClass({displayName: "RegisterNav",
	render : function(){
		return (
			React.createElement("div", {className: "registerNav"}, 
				React.createElement("div", {className: "registerNavBack"}, React.createElement("span", null, "取消")), 
				React.createElement("div", {className: "registerNavTitle"}, "注册新手编程"), 
				React.createElement("div", {className: "clear"})
			) 
		)
	}
}) ; 

//注册页面头部
var RegisterHead = React.createClass({displayName: "RegisterHead",
	render : function(){
		return ( 
			React.createElement("div", {className: "registerHead"}, 
				React.createElement("div", {className: "registerErrorInfo"}, 
					React.createElement("span", {className: "errorDescription"}, "密码强度过低")
				), 
				React.createElement("div", {className: "registerHeadTitle"}, 
					React.createElement("span", null, "欢迎加入新手编程")
				)
			) 
		) 
	}
}) ; 

//注册页面主体部分
var RegisterBody = React.createClass({displayName: "RegisterBody",
	render : function() {
		return (
			React.createElement("div", {className: "registerBody"}, 
				React.createElement("div", {className: "registerBodyInput"}, 
					React.createElement("div", {className: "registerBodyInputEmail"}, 
						React.createElement("input", {type: "text", placeholder: "邮箱"})
					), 
					React.createElement("div", {className: "registerBodyInputPassword"}, 
						React.createElement("input", {type: "password", placeholder: "密码"})
					), 
					React.createElement("div", {className: "registerBodyInputNick"}, 
						React.createElement("input", {type: "text", placeholder: "昵称"})
					)
					
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
				React.createElement("a", {href: "#", style: {"color":"red","margin-left":"2px;"}}, React.createElement("span", null, "用户使用协议"))
			)
		)
	}
}) ;

// 注册邮箱验证码部分
var RegisterEmailValidate = React.createClass({displayName: "RegisterEmailValidate",
	render : function() {
		return (
			React.createElement("div", {className: "registerEmailValidate"}, 
				React.createElement("div", {className: "registerEmailValidateTitle"}, "验证码也发送至", React.createElement("span", {className: "validateEmail"})), 
				React.createElement("div", {class: "registerEmailValidateCode"}, 
					React.createElement("div", {className: "registerEmailValidateInput"}, 
						React.createElement("input", {type: "text", placeholder: "验证码"})
					), 
					React.createElement("div", {className: "registerEmailValidateTime"}, 
						React.createElement("span", null, "10"), React.createElement("span", null, "后重新发送")
					), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("button", {className: "registerEmailValidateButton"}, "下一步")
			)
		)
	}
}) ; 

// 手机验证码部分
var RegisterPhoneValidate = React.createClass({displayName: "RegisterPhoneValidate",
	render : function() {
		return (
			React.createElement("div", {className: "registerPhoneValidate"}, 
				React.createElement("div", {class: "registerPhoneValidateCode"}, 
					React.createElement("div", {className: "registerPhoneValidateInput"}, 
						React.createElement("input", {type: "text", placeholder: "手机号"})
					), 
					React.createElement("div", {className: "registerPhoneValidateCodeInput"}, 
						React.createElement("input", {type: "text", placeholder: "验证码"})
					), 
					React.createElement("div", {className: "registerPhoneValidateTime"}, 
						React.createElement("span", null), React.createElement("span", null, "获取验证码")
					), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("button", {className: "registerEmailValidateButton"}, "完成"), 
				React.createElement("div", {className: "registerPhoneValidateDesc"}, 
					React.createElement("span", null, "用邮箱注册仍需绑定手机号,手机号可以重复使用")
				)
			)
		)
	}
}) ; 

// 注册成功

/*完善基本信息*/
//头像组件
var BasicInfoAvart = React.createClass({displayName: "BasicInfoAvart",
	render : function(){
		return (
			React.createElement("div", {className: "basicInfoAvart"}, 
				React.createElement("div", {className: "basicInfoAvartTitle"}, 
					React.createElement("span", null, "注册成功"), React.createElement("br", null), 
					React.createElement("img", {src: "/static/images/avart_image.jpg"})
				)
			)
		)
	}
}) ; 

//填写性别地址
var BasicInfoSEXANDADDR = React.createClass({displayName: "BasicInfoSEXANDADDR",
	render : function() {
		return (
			React.createElement("div", {className: "basicInfoSEXANDADDR"}, 
				React.createElement("div", {className: "basicInfoSEX"}, 
					React.createElement("div", {className: "sex"}, "性别", 
						React.createElement("select", null, 
							React.createElement("option", null), 
							React.createElement("option", null, "男"), 
							React.createElement("option", null, "女")
						)
					), 

					React.createElement("div", {className: "address"}, "地址", 
						React.createElement("select", null, 
							React.createElement("option", null), 
							React.createElement("option", null, "南京"), 
							React.createElement("option", null, "上海")
						)
					)
				)
			)
		)
	}
}) ; 

//地址组件

var  RegisterBasicInfo = React.createClass({displayName: "RegisterBasicInfo",
	render : function() {
		return (
			React.createElement("div", {className: "registerBasicInfo"}, 
				React.createElement(BasicInfoAvart, null), 
				React.createElement(BasicInfoSEXANDADDR, null), 
				React.createElement("div", {className: "registerBasicInfoButton"}, 
					React.createElement("button", null, "进入新手编程")
				)
			)
		)
	}
}) ; 


var RegisterSuccessUnit = React.createClass({displayName: "RegisterSuccessUnit",
	render : function(){
		return (
			React.createElement("div", {className: "registerSuccessUnit"}, 
				React.createElement(RegisterBasicInfo, null)
			)
		)
	}
}) ; 

// 注册组件容器
/*第一步 填写邮箱或手机号*/
/*第二步 验证邮箱和手机号*/
/*第三步 完善基本信息*/
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
				React.createElement(RegisterStatement, null), 
				
				React.createElement(RegisterEmailValidate, null), 
				React.createElement(RegisterPhoneValidate, null), 
				
				React.createElement(RegisterSuccessUnit, null)
			)
		) 
	}
}) ; 

//加载注册组件
ReactDOM.render(
  React.createElement(RegisterUnit, null),
  document.getElementById('register_page')
);





























