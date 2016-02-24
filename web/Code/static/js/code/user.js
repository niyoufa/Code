/*新手编程   用户登录注册*/

//用户注册
function register(){
    var username = $("#username").val() ;
    var password = $("#password").val() ;
    var confirm_password = $("#confirm_password").val() ;
    var phone = $("#phone").val() ;
    var email = $("#email").val() ;
    var service_terms = $("input[type='checkbox']:checked") ;

    //检查用户名
    if(username == ""){
        $("#username_error_info").html("请输入用户名") ;
        $("#username_error_info").show() ;
        $("#username_error_info").css("color","red") ;
        $("#username").focus(function(){
            $("#username_error_info").html("") ;
            $("#username_error_info").css("color","black") ;
            $("#username_error_info").hide() ;
        }) ;
        return ;
    }

    //检查密码
    if(password == ""){
        $("#password_error_info").html("请输入密码") ;
        $("#password_error_info").show() ;
        $("#password_error_info").css("color","red") ;
        $("#password").focus(function(){
            $("#password_error_info").hide() ;
            $("#password_error_info").html("请输入密码") ;
            $("#password_error_info").css("color","black") ;
        }) ;
        return ;
    }

    //检查二次输入密码
    if(confirm_password == ""){
        $("#confirm_password_error_info").html("请再次输入密码") ;
        $("#confirm_password_error_info").show() ;
        $("#confirm_password_error_info").css("color","red") ;
        $("#confirm_password").focus(function(){
            $("#confirm_password_error_info").hide() ;
            $("#confirm_password_error_info").html("") ;
            $("#confirm_password_error_info").css("color","black") ;
        }) ;
        return ;
    }
    else if (confirm_password != password) {
        $("#confirm_password_error_info").html("两次输入密码不一致") ;
        $("#confirm_password_error_info").show() ;
        $("#confirm_password_error_info").css("color","red") ;
        $("#confirm_password").focus(function(){
            $("#confirm_password_error_info").hide() ;
            $("#confirm_password_error_info").html("") ;
            $("#confirm_password_error_info").css("color","black") ;
        }) ;
        return ;
    }

    //检查电话
    if(phone == ""){
        $("#phone_error_info").html("请输入电话") ;
        $("#phone_error_info").show() ;
        $("#phone_error_info").css("color","red") ;
        $("#phone").focus(function(){
            $("#phone_error_info").html("") ;
            $("#phone_error_info").show() ;
            $("#phone_error_info").css("color","black") ;
        }) ;
        return ;
    }

    //检查是否同意协议条款
    if(service_terms.length == 0) {
        $("#service_terms_error_info").html("您还未同意协议条款") ;
        $("#service_terms_error_info").show() ;
        $("#service_terms_error_info").css("color","red") ;
        $("#service_terms").change(function(){
            $("#service_terms_error_info").html("") ;
            $("#service_terms_error_info").hide() ;
            $("#service_terms_error_info").css("color","black") ;
        }) ;
        return ;
    }

    //密码md5加密
    password = $.md5(password);
    // RSA公钥加密密码
    password = cryptoWord(password);
    var register_code = $("#invitation_code").val();
    $.doPost('check_register_code',{register_code:register_code},function(data) {
        postRegister(username, password, phone, "");
    });
}

function postRegister(username, password, phone, email) {
    var params = {
        "username": username,
        "password": password,
        "phone": phone,
        "email": email
    };
    var action = 'register';
    if($("#invi_code").length != 0){
        action = 'invite_register';
        params['invitation_sha1'] = $("#invi_code").val();
    }
    $.doPost(action,params,function(data){
        //注册成功
        $("#invitation_code").val("");
        $("#username").val("");
        $("#password").val("");
        $("#confirm_password").val("");
        $("#phone").val("");
        $("#email").val("");
        // confirm("注册成功，现在去登录!").on(function (e) {
        confirm("注册成功!").on(function (e) {
            if (e) {
                // window.location.href = "/teamup/login/";
                var user_sha1 = data["user_sha1"];
                sessionStorage.setItem("AVARTA_SHA1",'');
                sessionStorage.setItem("USER_SHA1",user_sha1);
                sessionStorage.setItem("idno_is_audit",'0');
                sessionStorage.setItem("basic_is_audit",'0');
                window.location.href = "/teamup/task/" ;
            }
        });
    });
}

//登录
function login(){
    var username = $(".username").val() ;
    var password = $(".password").val() ;
    // var service_terms = $("input[type='checkbox']:checked") ;

    //检查用户名
    if(username == ""){
        // $("#username_error_info").html("请输入用户名") ;
        // $("#username_error_info").show() ;
        // $("#username_error_info").css("color","red") ;
        // $("#username").focus(function(){
        //     $("#username_error_info").html("") ;
        //     $("#username_error_info").css("color","black") ;
        //     $("#username_error_info").hide() ;
        // }) ;
        alert("请输入用户名") ; 
        return ;
    }
    //检查密码
    if(password == ""){
        // $("#password_error_info").html("请输入密码") ;
        // $("#password_error_info").show() ;
        // $("#password_error_info").css("color","red") ;
        // $("#password").focus(function(){
        //     $("#password_error_info").hide() ;
        //     $("#password_error_info").html("请输入密码") ;
        //     $("#password_error_info").css("color","black") ;
        // }) ;
        alert("请输入密码") ; 
        return ;
    }

    //检查是否同意协议条款
    // if(service_terms.length == 0) {
    //     $("#service_terms_error_info").html("您还未同意协议条款") ;
    //     $("#service_terms_error_info").show() ;
    //     $("#service_terms_error_info").css("color","red") ;
    //     $("#service_terms").change(function(){
    //         $("#service_terms_error_info").html("") ;
    //         $("#service_terms_error_info").hide() ;
    //         $("#service_terms_error_info").css("color","black") ;
    //     }) ;
    //     return ;
    // }

    // //密码md5加密
    // password = $.md5(password);
    // // RSA公钥加密密码
    // password = cryptoWord(password);

    var params = {
        "username" : username ,
        "password" : password
    };

    $.doPost('login',params,function(data){
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

//找回密码
//第一步 填写用户名和身份证号码
function retrievePasswordInit() {
    var username = $("#username").val();
    var user_idno = $("#user_idno").val();
    //检查用户名
    if(username == ""){
        $("#username_error_info").html("请输入用户名") ;
        $("#username_error_info").show() ;
        $("#username_error_info").css("color","red") ;
        $("#username").focus(function(){
            $("#username_error_info").html("") ;
            $("#username_error_info").css("color","black") ;
            $("#username_error_info").hide() ;
        }) ;
        return ;
    }

    //检查用户名
    if(user_idno == ""){
        $("#user_idno_error_info").html("请输入身份证号") ;
        $("#user_idno_error_info").show() ;
        $("#user_idno_error_info").css("color","red") ;
        $("#user_idno").focus(function(){
            $("#user_idno_error_info").html("") ;
            $("#user_idno_error_info").css("color","black") ;
            $("#user_idno_error_info").hide() ;
        }) ;
        return ;
    }
    $.doPost('init_reset_user_password',{"username" : username, "user_idno" : user_idno},function(data){
        $("#form1").hide();
        $("#form2").show();
        $("#user_sha1").val(data.user_sha1);
    });
}
//第二步 设置新密码
function retrievePasswordFinish() {
    var new_password = $("#new_password").val();
    var new_password_again = $("#new_password_again").val();
    var ver_code = $("#ver_code").val();
    var user_sha1 = $("#user_sha1").val();
    if(user_sha1 == "") {
        return;
    }
    //检查密码
    if(ver_code == ""){
        $("#ver_code_error_info").html("请输入短信验证码") ;
        $("#ver_code_error_info").show() ;
        $("#ver_code_error_info").css("color","red") ;
        $("#ver_code").focus(function(){
            $("#ver_code_error_info").html("") ;
            $("#ver_code_error_info").css("color","black") ;
            $("#ver_code_error_info").hide() ;
        }) ;
        return ;
    }

    //检查密码
    if(new_password == ""){
        $("#new_password_error_info").html("请输入密码") ;
        $("#new_password_error_info").show() ;
        $("#new_password_error_info").css("color","red") ;
        $("#new_password").focus(function(){
            $("#new_password_error_info").html("") ;
            $("#new_password_error_info").css("color","black") ;
            $("#new_password_error_info").hide() ;
        }) ;
        return ;
    }

    //检查二次输入密码
    if(new_password_again == ""){
        $("#new_password_again_error_info").html("请再次输入密码") ;
        $("#new_password_again_error_info").show() ;
        $("#new_password_again_error_info").css("color","red") ;
        $("#new_password_again").focus(function(){
            $("#new_password_again_error_info").hide() ;
            $("#new_password_again_error_info").html("") ;
            $("#new_password_again_error_info").css("color","black") ;
        }) ;
        return ;
    }
    else if (new_password_again != new_password) {
        $("#new_password_again_error_info").html("两次输入密码不一致") ;
        $("#new_password_again_error_info").show() ;
        $("#new_password_again_error_info").css("color","red") ;
        $("#new_password_again").focus(function(){
            $("#new_password_again_error_info").hide() ;
            $("#new_password_again_error_info").html("") ;
            $("#new_password_again_error_info").css("color","black") ;
        }) ;
        return ;
    }

    //密码md5加密
    new_password = $.md5(new_password);
    // RSA公钥加密密码
    new_password = cryptoWord(new_password);
    $.doPost('reset_user_password_ver_code',{"sha1" : user_sha1, "new_password" : new_password, "ver_code":ver_code},function(data){
        alert("密码重置成功!");
        setTimeout('window.location.href="/teamup/login/"', 1000);
    });

}


$(function(){
	//登录
	$(".login").click(function(){
		login() ; 
	}) ; 
	//返回首页
	$(".loginNavXPng").click(function(){
		window.location.href = "/page/index_page/" ; 
	}) ; 
}) ; 