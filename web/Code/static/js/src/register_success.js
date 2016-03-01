// 注册成功

/*完善基本信息*/
//头像组件
var BasicInfoAvart = React.createClass({
	render : function(){
		return (
			<div className="basicInfoAvart">
				<div className="basicInfoAvartTitle">
					<span>注册成功</span><br />
					<img src="/static/images/avart_image.jpg"/>
				</div>
			</div>
		)
	}
}) ; 

//填写性别地址
var BasicInfoSEXANDADDR = React.createClass({
	render : function() {
		return (
			<div className="basicInfoSEXANDADDR">
				<div className="basicInfoSEX">
					<div className="sex">性别
						<select>
							<option></option>
							<option>男</option>
							<option>女</option>
						</select>
					</div>

					<div className="address">地址
						<select>
							<option></option>
							<option>南京</option>
							<option>上海</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}) ; 

//地址组件

var  RegisterBasicInfo = React.createClass({
	render : function() {
		return (
			<div className="registerBasicInfo">
				<BasicInfoAvart></BasicInfoAvart>
				<BasicInfoSEXANDADDR></BasicInfoSEXANDADDR>
				<div className="registerBasicInfoButton">
					<button>进入新手编程</button>
				</div>
			</div>
		)
	}
}) ; 


var RegisterSuccessUnit = React.createClass({
	render : function(){
		return (
			<div className="registerSuccessUnit">
				<RegisterBasicInfo></RegisterBasicInfo>
			</div>
		)
	}
}) ; 

ReactDOM.render(
	<RegisterSuccessUnit /> , 
	document.getElementById("register_success") 
)