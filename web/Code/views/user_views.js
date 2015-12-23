//用户模块

var userView = {
	"login" :  function login (req,username,password) {
		return "登陆成功" ; 
	} , 
	"register" :  function register (req,username,password) {
		return "注册成功" ; 
	}
}

module.exports = userView ; 