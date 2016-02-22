//返回状态码
Utils = require("../views/utils") ;     

var status_collection = {
    '1111':"服务器繁忙",
    '0000':"用户未登录",
    '0001':"正常",
    '0002':"用户不存在",
    '0003':"用户已存在",
    '0004':"用户密码错误",
    '0005':"用户注册失败",
    '0006':"邮箱密码格式错误",
    '0007':"密码格式错误",
    '0008':"邮件通知失败",
    '0009':"用户未登录",
    '0010':"上传图片失败",
    '0013':"修改密码失败",
}

function Status () {
     this.UNKNOWNERR                        = '1111'     ; 
     this.OK                                             = '0001'         ; 
     this.USERNOTEXIST                        = '0002' ; 
     this.USERHASEXIST                         = '0003' ; 
     this.PASSWORDERROR                   = '0004' ; 
     this.REGISTERERROR                      = '0005' ; 
     this.EMAILFORMATERROR             = '0006' ; 
     this.PASSWORDFORMATERROR     = '0007' ; 
     this.SENDEMAILERROR                   = '0008' ; 
     this.NOTLOGGEDIN                         = '0009'; 
     this.UPLOADIMAGEERROR              = '0010'; 
     this.GETCUSTOMERINFOERROR     = '0011'; 
     this.ALTERCUSTOMERERROR          = '0012'; 
     this.ALTERPASSWORDERROR          = '0013'; 

     this.getReason =  function(code,error) {
        if (error==undefined) {
                return status_collection[code]
        }
        else{
                return Utils.StringFormat("Info:{0},Error:{1}",status_collection[code],error)
        }
    } 
}
        

module.exports = new Status() ; 

