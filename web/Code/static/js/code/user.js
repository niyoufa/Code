/*新手编程   用户登录注册*/

//用户注册
function register(){
    var email = $(".registerBodyInputEmail input").val() ;
    var password = $(".registerBodyInputPassword input").val() ;
    var nick = $(".registerBodyInputNick input").val() ;

    //检查邮箱
    if(email == "") {
        $(".registerHead  .registerErrorInfo").html("请输入邮箱") ; 
        $(".registerHead  .registerErrorInfo").show() ; 
        return ;  
    }
    else if ( !checkEmail(email) ) {
        $(".registerHead  .registerErrorInfo").html("邮箱格式错误") ; 
        $(".registerHead  .registerErrorInfo").show() ; 
        return ;  
    }

    //检查密码
    if(password == ""){
        $(".registerHead  .registerErrorInfo").html("请输入密码") ; 
        $(".registerHead  .registerErrorInfo").show() ; 
        return ;  
    }

      //检查昵称
    if(nick == ""){
        $(".registerHead  .registerErrorInfo").html("请输入昵称") ; 
        $(".registerHead  .registerErrorInfo").show() ; 
        return ;  
    }

    // //密码md5加密
    // password = $.md5(password);
    // // RSA公钥加密密码
    // password = cryptoWord(password);
    // var register_code = $("#invitation_code").val();

     var params = {
        "email" : email ,
        "password" : password , 
        "nick" : nick , 
    };
    $.doGET('register',params,function(data) {
                $(".registerNav").hide()
                $(".registerHead").hide() ; 
                $(".registerBody").hide() ; 
                $(".registerStatement").hide() ; 

                $(".registerBasicInfo").show() ; 
    });
}

//登录
function login(){
    var username = $(".username").val() ;
    var password = $(".password").val() ;
    // var service_terms = $("input[type='checkbox']:checked") ;

    //检查用户名
    if(username == ""){
        alert("请输入用户名") ; 
        return ;
    }
    //检查密码
    if(password == ""){
        alert("请输入密码") ; 
        return ;
    }

    // //密码md5加密
    // password = $.md5(password);
    // // RSA公钥加密密码
    // password = cryptoWord(password);

    var params = {
        "username" : username ,
        "password" : password
    };

    $.doGET('login',params,function(data){
       console.log(data) ; 
       window.location.href = "/page/index_page/" ; 
    });
}


// 发送短信的功能
function sendSMSMessage() {
    var phone = $("#phone").val() ;
    if (!isPhone(phone)){
        alert("你输入的手机号不正确！");
        return
    }
    $.doPost('send_message',{"phone" : phone},function(data){
        alert("验证码发送成功，请注意查收！");
    });
}

$(function(){
	$(".login").click(function(){
                        login() ; 
	}) ; 
                $(".register").click(function(){
                        location.href = "/page/register_page/" ; 
                }) ; 
                $(".registerNavBack").click(function(){
                        $(".registerNavBack").css("color","gainsboro") ; 
                        location.href = "/page/login_page/" ; 
                }) ; 
                $(".registerBodyButton").click(function(){
                        register() ; 
                }) ;
	$(".loginNavXPng").click(function(){
		window.location.href = "/page/index_page/" ; 
	}) ; 
}) ; 