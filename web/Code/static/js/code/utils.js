// 全局发送ajax请求的方法，callback为回调函数
var ajax_url = "/code/api/";
//var ajax_url = "http://dev.xielicheng.com:8000/teamup/api/";
var uncheck_action_list = ['login','register','check_register_code','send_message','receive_task','fast_login','init_reset_user_password',"reset_user_password_ver_code","invite_register"];
var need_basic_auth_list = ['participate_in','activity_assign','submit_task_complete_info','comment_on'];
var need_idno_auth_list = ['launch_topic','launch_activity','launch_assignment'];
var image_path = "/teamup/get_image?sha1=";
var setting_page_path = "/teamup/settings_page/?sha1=";
var default_image_path = "/teamup/static/teamup/images/head_image.png";
var default_head_image = "/teamup/static/images/default.jpg";
jQuery.extend({
    doPost: function(action,params,callback) {
        var post_data = {
            "action":action,
            "data":JSON.stringify(params)
        };
        $.get(ajax_url,post_data,function(data){
            if (data["ret"] != '0001'){
                alert(data["info"]);
                return;
            }
            var response_data = data["data"];
            return callback(response_data);
        },'json');
    }
});

// 设置用户的头像信息
$(function(){
    // var avarta_sha1 = sessionStorage.getItem("AVARTA_SHA1")||default_image_path;
    // $("#user_head_image").attr("src",image_path+avarta_sha1+"&mode=1");
    var avarta_sha1 = sessionStorage.getItem("AVARTA_SHA1")?image_path+sessionStorage.getItem("AVARTA_SHA1")+"&mode=1":default_head_image;
    $("#user_head_image").attr("src",avarta_sha1);
});

//  处理图片加载错误
function imageError(obj){
    $(obj).attr("src", "");
    $(obj).css("background-color","#ddd")
}


var gender_list = { 0 : "不限" , 1 : "男" , 2 : "女",3 : "其他" };
var job_list = { 0:"学生",1:"教师",2:"程序员"};
var education_list = ["不限","小学毕业","初中毕业","高中在读","高中毕业","大学在读","大学毕业","研究生在读","研究生毕业","博士生在读","其他"];
var income_list = { 0 : "不限" , 1 : "0-1500" , 2 : "1500-3000" , 3 : "3000-4500" ,
    4: "4500-7500" , 5 : "7500-10000" , 6 : "10000-15000"  , 7 : "15000+"};
var equipment_type_list = {0 : "不限" , 1 : "安卓手机" , 2 : "苹果电脑" , 3 : "苹果手机" ,4: "Windows电脑" , 5 : "安卓平板" , 6 : "Linux"  , 7 : "IPAD"};
var used_network_product_list = {0 : "不限" ,1 : "QQ" , 2 : "微博" , 3 : "微信" , 4 : "淘宝" ,5: "唱吧" , 6 : "酷狗音乐" , 7 : "百度搜索"  , 8 : "知乎"};
var type_info_list = {0:"公司" , 1:"个人"};
var payment_type_info_list = {0:"支付宝" , 1:"微信"};
var trans_type_info_list = {0:"充值" , 1:"提现" , 2:"活动订金" , 3:"活动报名费用" , 4:"求助费用" , 5:"求助红包"};


/*工具方法*/

//取得对象类型
function getTypeOf(x){
    if(x==null){
        return "null";
    }
    var t= typeof x;
    if(t!="object"){
        return t;
    }
    var c=Object.prototype.toString.apply(x);
    c=c.substring(8,c.length-1);
    if(c!="Object"){
        return c;
    }
    if(x.constructor==Object){
        return c
    }
    if("classname" in x.prototype.constructor
            && typeof x.prototype.constructor.classname=="string"){
        return x.constructor.prototype.classname;
    }
    return "<unknown type>";
}

//阻止事件传递
function preventDefault(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

//模态对话框
var modalhtml='<div class="modal fade">\
  <div class="modal-dialog">\
    <div class="modal-content">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
        <h4 class="modal-title" id="infoModal_header">Modal title</h4>\
      </div>\
      <div class="modal-body" id="infoModal_body">\
        <p>One fine body&hellip;</p>\
      </div>\
      <div class="modal-footer">\
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>\
      </div>\
    </div><!-- /.modal-content -->\
  </div><!-- /.modal-dialog -->\
</div><!-- /.modal -->';

///* 当有一个modal dialog已经显示时，我们必须将其它的modal dialog加入队列 */
var modal_dialogs=[];
var modal_dialog_shown=false;
var curr_modal_dialog_id=null;
var curr_modal_body=''
var nb_modal_dialogs=0;

///*Modal function*/
function infoModal(body,head,btn_text,callback){
    var body=body||'An error has occurred, Please try again.';
    //get modal and set info
    var modal_id=getModal();
    $(modal_id).find('#infoModal_header').text(head || 'Info');
    $(modal_id).find('#infoModal_body').attr('class',"modal-body alert-info").text(body);
    $(modal_id).find('#infoModal_footer').find('.chookka-ui-btn').text(btn_text || 'Close');
    $(modal_id).one('hidden.bs.modal.bs.modal', function () {
        if(callback)
            callback()
        modalHidden();
    });
    //check to show
    if(modal_dialog_shown){
        if(body!=curr_modal_body)
            modal_dialogs.push(modal_id);
    }
    else{
        modal_dialog_shown=true;
        curr_modal_dialog_id=modal_id;
        curr_modal_body=body
        $(modal_id).modal()
    }
}
function errorModal(body,head,callback){
    var body=body||'An error has occurred, Please try again.';
    //判断是否未登录
    if(body=='Not logged in' || body=='Cookie is expired'){
        body='Your session has expired, or you have logged in from another device.'
        infoModal(body,'Sorry',function(){
            if(callback){
                callback()
            }
            location.href="/chookka/logout";
        })
    }else{
        infoModal(body,'Sorry',callback)
    }
}
function warningModal(body,head,callback){
    var body=body||'An error has occurred, Please try again.';
    //get modal and set info
    var modal_id=getModal();
    $(modal_id).find('#infoModal_header').text(head || 'Warning');
    $(modal_id).find('#infoModal_body').attr('class',"modal-body alert").text(body);
    $(modal_id).one('hidden.bs.modal', function () {
        if(callback)
            callback()
        modalHidden();
    });
    //check to show
    if(modal_dialog_shown){
        if(body!=curr_modal_body)
            modal_dialogs.push(modal_id);
    }
    else{
        modal_dialog_shown=true;
        curr_modal_dialog_id=modal_id;
        curr_modal_body=body;
        $(modal_id).modal();
    }
}
function successModal(body,head,callback){
    var body=body||'Done.';
    //get modal and set info
    var modal_id=getModal();
    $(modal_id).find('#infoModal_header').text(head || 'Success');
    $(modal_id).find('#infoModal_body').attr('class',"modal-body alert-success").text(body);
    $(modal_id).one('hidden.bs.modal', function () {
        if(callback)
            callback()
        modalHidden();
    });
    //check to show
    if(modal_dialog_shown){
        if(body!=curr_modal_body)
            modal_dialogs.push(modal_id);
    }
    else{
        modal_dialog_shown=true;
        curr_modal_dialog_id=modal_id;
        curr_modal_body=body;
        $(modal_id).modal();
    }
}
function modalHidden(){
    modal_dialog_shown=false;
    //remove node
    $(curr_modal_dialog_id).remove();
    //check to show
    if(modal_dialogs.length>0){
        var id=modal_dialogs.shift();
        modal_dialog_shown=true;
        curr_modal_dialog_id=id;
        curr_modal_body=$(id).find('#infoModal_body').attr('class',"modal-body alert-success").text();
        $(id).modal();
    }
}
function getModal(){
    //add node and return id
    nb_modal_dialogs+=1;
    $_new=$(modalhtml);
    var now=new Date();
    var id=nb_modal_dialogs+'_opoa_infoModal_'+now.getTime();
    $_new.attr('id',id);
    $('body').append($_new);
    return '#'+id;
}

//字符串结尾判断
String.prototype.endWith=function(str){
    if(str==null||str==""||this.length==0||str.length>this.length){
        return false;
    }
    if(this.substring(this.length-str.length)==str){
        return true;
    }else{
        return false;
    }
    return true;
}

//字符串开始判断
String.prototype.startWith=function(str){
    if(str==null||str==""||this.length==0||str.length>this.length){
        return false;
    }
    if(this.substr(0,str.length)==str){
        return true;
    }else{
        return false;
    }
    return true;
}

//格式化字符串
String.format = function(src){
    if (arguments.length == 0) return null;
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function(m, i){
        return args[i];
    });
};

//字符串替换
String.prototype.replaceAll=function(src,des){
    var re=new RegExp(src.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"),"ig");
    return this.replace(re,des);
}

//resolve ajax post method csrf https://docs.djangoproject.com/en/dev/ref/contrib/csrf/
jQuery(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});


var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getKeyCode:function (event){
        return event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        var data='',data_type='insertHTML';
        try{
            data=clipboardData.getData("text/html");
        }catch(e){
            //ie
            data=clipboardData.getData("text");
            //使用pre保持格式
            data='<pre>'+data+'</pre>';
        }
        if(data==''){
            data=clipboardData.getData('text/plain')
            data_type='insertTEXT'
        }else{
            data=getCleanHtml(data)
        }
        return [data_type,data];
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};


// 获取cookie值
function getCookie(name) {  
    var cookieValue = null;  
    if (document.cookie && document.cookie != '') {  
        var cookies = document.cookie.split(';');  
        for (var i = 0; i < cookies.length; i++) {  
            var cookie = jQuery.trim(cookies[i]);  
            // Does this cookie string begin with the name we want?  
            if (cookie.substring(0, name.length + 1) == (name + '=')) {  
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
                break;  
            }  
        }  
    }  
    return cookieValue;  
}

// 获取csrf值
var csrftoken = getCookie('csrftoken');

function sameOrigin(url) {  
    // url could be relative or scheme relative or absolute  
    var host = document.location.host; // host + port  
    var protocol = document.location.protocol;  
    var sr_origin = '//' + host;  
    var origin = protocol + sr_origin;  
    // Allow absolute or scheme relative URLs to same origin  
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||  
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||  
        // or any other URL that isn't scheme relative or absolute i.e relative.  
        !(/^(\/\/|http:|https:).*/.test(url));  
}  
function csrfSafeMethod(method) {  
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));  
}

// ajax请求设置csrf
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
        $(".loading_fade_modal").show();
    },
    complete:function(){
        $(".loading_fade_modal").hide();
    },
    error: function(jqXHR, textStatus, errorMsg){ // 出错时默认的处理函数
        alert( '发送AJAX请求到"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg );
    }

});

// 验证字符串是否是汉字
function testChinese(word){
    var regu = "^[[A-Z|a-z|\u4e00-\u9fa5]+$";      
    // ^[A-Z|a-z|\u4e00-\u9fa5]*$
    var re = new RegExp(regu);   
    if (!re.test(word)) {   
        $("#alert_modal_body").html("主题或姓名不能输入数字");
        $("#alert_modal").modal("show");
        return false ; 
    } else {
        return true;
    }
}

// 调用系统的打印机
function printPage(area_id){
    if ($("#"+area_id).length){
        $("#"+area_id).printArea();
    }else{
        $("#alert_modal_body").html("暂无打印内容");
        $("#alert_modal").modal("show");
    }

}
//验证邮箱格式
function checkEmail(email){
    email_reg = /^[a-z0-9]+([+._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!email_reg.test(email)) {
        return false;
    }else{
        return true
    }
}

var publickey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn2I/gWid1LBz8wJ2kdjSBbxdA1y4qq+tpeAgHpo1I7XZyFQdTvsVLkjRhCxQY29yrtVzW9F9fevY7yQXHhFIMITMilB4NkkCUneFxj7odC2fTp48PPOj/nMxxW9IwMmlokJDVomq5RhPPCWxdlwW3znUN/phOyfUHf36qYOlDhQyU2/pIE9FYduYIzatTtHjsufEBape+VcPswOgmd8suWeU/kVjOLItBP/6MEzj50E1ms9Gbn5cDFkSDa9LTWQjGXM/W03VmAW61b9sp1chGDqrAuP+mDOhwMHZcxuollVpxjP+UR8jirTOkW0zq1uLtTzXgh3QxmRm4fFh+c5H/wIDAQAB-----END PUBLIC KEY-----" ; 

// RSA公钥加密字符串
function cryptoWord(word){ 
    var $key = RSA.getPublicKey(publickey);
    var pwd = RSA.encrypt(word, $key);
    return pwd;
}

/**
 * 时间对象的格式化;
 */
Date.prototype.format= function(format){
    /*
     * eg:format="YYYY-MM-dd hh:mm:ss";
     "yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+" :  this.getMonth()+1,  //month
        "d+" :  this.getDate(),     //day
        "h+" :  this.getHours(),    //hour
        "m+" :  this.getMinutes(),  //minute
        "s+" :  this.getSeconds(), //second
        "q+" :  Math.floor((this.getMonth()+3)/3),  //quarter
        "S"  :  this.getMilliseconds() //millisecond
    }

    if(/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};


// 更新用户的地理位置
function updateUserLocation(geo_x,geo_y,location,city){
    var params = {
        device:'协力Web端',
        x_axis:geo_x,
        y_axis:geo_y,
        loc:location,
        city:city,
        city_code:0
    };
    $.doPost('collect_geography',params,function(data){
        console.log(data);
        getNearbyObjects(geo_x,geo_y);
    });
}
// 获取用户的位置信息
function getUserLocation(is_update){

    $(".user_location").text("正在获取位置信息...");
    //判断本地 是否存有地址 且是当前用户地址
    if(sessionStorage.getItem('userLocation') && !is_update && sessionStorage.getItem("nearby_user_sha1") == sessionStorage.getItem("USER_SHA1")) {
        var user_location = JSON.parse(sessionStorage.getItem('userLocation'));
        writeLocationToPage(user_location, false);
        return;
    }
    // 百度地图API功能
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var geoc = new BMap.Geocoder();
            geoc.getLocation(r.point, function(rs){
                console.log(rs)
                var geo_x = rs.point.lat;
                var geo_y = rs.point.lng;
                var location = rs.address;
                var city = rs.addressComponents.city;
                var user_location = {
                    geo_x : geo_x,
                    geo_y : geo_y,
                    location : location,
                    city : city
                };
                sessionStorage.setItem('userLocation', JSON.stringify(user_location));
                clearNearbyObjects();
                sessionStorage.setItem("nearby_user_sha1", sessionStorage.getItem("USER_SHA1"));
                writeLocationToPage(user_location, true);
            });
        }
        else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true})
}



