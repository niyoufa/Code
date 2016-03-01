// 注册组件

//注册页面导航部分
var RegisterNav = React.createClass({
	render : function(){
		return (
			<div className="registerNav">
				<div className="registerNavBack"><span>取消</span></div>
				<div className="registerNavTitle">注册新手编程</div>
				<div className="clear"></div>
			</div> 
		)
	}
}) ; 

//注册页面头部
var RegisterHead = React.createClass({
	render : function(){
		return ( 
			<div className="registerHead">
				<div className="registerErrorInfo">
					<span className="errorDescription">密码强度过低</span>
				</div>
				<div className="registerHeadTitle">
					<span>欢迎加入新手编程</span>
				</div>
			</div> 
		) 
	}
}) ; 

//注册页面主体部分
var RegisterBody = React.createClass({
	render : function() {
		return (
			<div className="registerBody">
				<div className="registerBodyInput">
					<div className="registerBodyInputEmail">
						<input type="text" placeholder="邮箱" />
					</div>
					<div className="registerBodyInputPassword">
						<input type="password" placeholder="密码" />
					</div>
					<div className="registerBodyInputNick">
						<input type="text" placeholder="昵称" />
					</div>
					
				</div>
				<div className="registerBodyButton">
					<button>下一步</button>
				</div>
			</div>
		)
	}
}) ; 

//注册页面申明部分
var RegisterStatement = React.createClass({
	render : function() {
		return (
			<div className="registerStatement">
				<span className="statementDescription">点击【下一步】代表你已阅读并同意</span>
				<a href="#" style={{"color":"red","margin-left":"2px;"}}><span>用户使用协议</span></a>
			</div>
		)
	}
}) ;

// 注册邮箱验证码部分
var RegisterEmailValidate = React.createClass({
	render : function() {
		return (
			<div className="registerEmailValidate">
				<div className="registerEmailValidateTitle">验证码也发送至<span className="validateEmail"></span></div>
				<div class="registerEmailValidateCode">
					<div className="registerEmailValidateInput">
						<input type="text" placeholder="验证码"/>
					</div>
					<div className="registerEmailValidateTime">
						<span>10</span><span>后重新发送</span>
					</div>
					<div className="clear"></div>
				</div>
				<button className="registerEmailValidateButton">下一步</button>
			</div>
		)
	}
}) ; 

// 手机验证码部分
var RegisterPhoneValidate = React.createClass({
	render : function() {
		return (
			<div className="registerPhoneValidate">
				<div class="registerPhoneValidateCode">
					<div className="registerPhoneValidateInput">
						<input type="text" placeholder="手机号"/>
					</div>
					<div className="registerPhoneValidateCodeInput">
						<input type="text" placeholder="验证码"/>
					</div>
					<div className="registerPhoneValidateTime">
						<span></span><span>获取验证码</span>
					</div>
					<div className="clear"></div>
				</div>
				<button className="registerEmailValidateButton">完成</button>
				<div className="registerPhoneValidateDesc">
					<span>用邮箱注册仍需绑定手机号,手机号可以重复使用</span>
				</div>
			</div>
		)
	}
}) ; 

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
					<div className="sex"><span>性别</span>
						<select>
							<option></option>
							<option value="0">男</option>
							<option value="1">女</option>
						</select>
					</div>

					<div className="address"><span>地址</span>
						<select>
							<option></option>
							<option value="0">南京</option>
							<option value="1">上海</option>
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

// 注册组件容器
/*第一步 填写邮箱或手机号*/
/*第二步 验证邮箱和手机号*/
/*第三步 完善基本信息*/
var RegisterUnit = React.createClass({
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
			<div className="registerUnit">
				<RegisterNav></RegisterNav>
				
				<RegisterHead></RegisterHead>
				<RegisterBody></RegisterBody>
				<RegisterStatement></RegisterStatement>
				
				<RegisterSuccessUnit></RegisterSuccessUnit>
			</div>
		) 
	}
}) ; 

//加载注册组件
ReactDOM.render(
  <RegisterUnit />,
  document.getElementById('register_page')
);





























