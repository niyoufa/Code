// 注册成功

/*完善基本信息*/
//头像组件
var BasicInfoAvart = React.createClass({displayName: "BasicInfoAvart",
	render : function(){
		return (
			React.createElement("div", {className: "basicInfoAvart"}, 
				React.createElement("div", {className: "basicInfoAvartTitle"}), 
				React.createElement("div", {className: "basicInfoAvartImg"}, React.createElement("img", {src: "/static/images/default.png"}))
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
					React.createElement("div", null, React.createElement("input", {type: "text", placeholder: "性别"})), 
					React.createElement("div", null, React.createElement("img", {src: "/static/images/default.png"})), 
					React.createElement("div", {className: "clear"}), 

					React.createElement("div", null, React.createElement("input", {type: "text", placeholder: "地址"})), 
					React.createElement("div", null, React.createElement("img", {src: "/static/images/default.png"})), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("div", {className: "basicInfoADDR"})
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
				React.createElement("div", {className: "registerSuccessTitle"}, 
					React.createElement("span", null, "注册成功")
				), 
				React.createElement(RegisterBasicInfo, null)
			)
		)
	}
}) ; 

ReactDOM.render(
	React.createElement(RegisterSuccessUnit, null) , 
	document.getElementById("register_success") 
)