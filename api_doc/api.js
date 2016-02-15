/*
 名称: 码农社交平台api文档定义
 日期 : 2015-12-25
 作者 : 倪有发
 */

var api_data = [

    /*
     系统模块 (版本号 , csrf token , 图片上传下载)

     */
    {
        "name": " ==  系统模块 ==",
        "url": "http://dev.xielicheng.com:8000/api",
        "method": "POST",
        "type": 0,
        "params": {
            "type": "0,1,2",
            "type": "公用模块",
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {}
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------"
        }
    },

    //获取版本号
    {
        "name": "1.获取版本号",
        "url": "http://dev.xielicheng.com:8000/teamup/api",
        "method": "POST",
        "params": {
            "action": "get_service_version",
            "data": {
                "app_name": "xieli_app"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "version": "1.0"
            }
        },
        "note": {
            "请求参数": "-------------",
            "app_name": "app的名字，这个值固定",

            "返回参数": "-------------",
            "version": "服务器的版本号",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //获取csrf token
    {
        "name": "2.获取csrf token",
        "url": "http://dev.xielicheng.com:8000/teamup/api",
        "method": "GET",
        "params": {
            "action": "get_csrf_token",
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "csrf_token": "asldfjkalsjfsdfasdfa"
            }
        },
        "note": {
            "请求参数": "-------------",
            "app_name": "app的名字，这个值固定",

            "返回参数": "-------------",
            "csrf_token": "协力app csrf token ",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //上传图片
    {
        "name": "3.上传图片接口",
        "url": "http://dev.xielicheng.com:8000/xieli/upload/",
        "method": "POST",
        "params": {
            "注意": "这个请求没有参数，直接将图片的内容(二进制)放在http请求的body里面"
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "sha1": "415ab40ae9b7cc4e66d6769cb2c08106e8293b48"
            }
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "OK",
            "ret": "0001",
            "sha1": "图片上传成功，返回sha1"
        }
    },

    //下载图片(待定)
    {
        "name": "4.获取图片接口",
        "url": "http://dev.xielicheng.com:8000/xieli/get_image/?sha1=   ",
        "method": "GET",
        "params": {
            "注意": "这个是get请求，参数在url后面"
        },
        "response": {
            "注意": "返回一个httprespone对象"
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------"
        }
    },

    //删除已经上传的图片(待定)
    {
        "name": "5.删除已经上传的图片",
        "url": "/xieli/image_download/?sha1= ",
        "method": "POST",
        "params": {
            "image_sha1": "4768cedc0947e8192121143fd13e31682a438610"
        },
        "response": {
            "info": "OK",
            "ret": "0001"
        },
        "note": {
            "请求参数": "-------------",
            "image_sha1": "被删除图片的sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    /*
     用户模块
     py文件 : user_views.py
     */
    {
        "name": " ==  用户模块 (完成)==",
        "url": "http://dev.xielicheng.com:8000/api",
        "method": "POST",
        "type": 0,
        "params": {
            "type": "0,1,2",
            "type": "公用模块",
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {}
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
        }
    },
    // 注册
    {
        "name": "1.注册",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "register",
            "data": {
                "username": "niyoufa",
                "password": "***md5加密之后",
                "phone": "15996458299",
                "email": "niyoufa@tmlsystem.com" 
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {}
        },
        "note": {
            "请求参数": "-------------",
            "username": "用户名",
            "password": "密码 （ 至少6位 ）md5加密",
            "phone": "手机号 ",
            "email": "邮箱 ( 选填 )",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    // 登录
    {
        "name": "2.登录",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "login",
            "data": {
                "username": "15996458299",
                "password": "***md5加密的字符串"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "session_id": "lqb758drq6gk4dfagwut4hvl9k7q6myf",
            },
        },
        "note": {
            "请求参数": "-------------",
            "username": "用户名或手机号",
            "password": "密码 （ 至少6位 ）",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "username": "用户名",
            "session_id": "lqb758drq6gk4dfagwut4hvl9k7q6myf",
        }
    },

    //登出
    {
        "name": "3.登出",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "logout",
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    // 绑定头像上传
    {
        "name": "4.绑定用户头像",
        "url": "http://dev.xielicheng.com:8000/xieli/upload_headimage/",
        "method": "POST",
        "params": {
            "action": "bind_user_headimage",
            "data" : {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "image_sha1": "4768cedc0947e8192121143fd13e31682a438610"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "image_sha1": "头像的sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //更改密码
    {
        "name": "5.更改密码",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "alter_user_password",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "old_password": "123456",
                "new_password": "123456",
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "old_password": "旧的密码(***md5加密后的字符串)",
            "new_password": "新密码(***md5加密后的字符串)",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //手机号检查用户是否存在
    {
        "name": "6.手机号检查用户是否存在",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "check_user_exist",
            "data": {
                "phone": "15996458299"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "user_id_info": "用户身份证号",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //重置密码
    {
        "name": "7.重置密码",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "reset_user_password",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "new_password": "123456"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "new_password": "新密码(***md5加密后的字符串)",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //获取用户基本信息(个人中心页面)
    {
        "name": "8.获取用户基本信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_user_basic_information",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            'data': {
                "avarta_sha1": "",
                "username": "",
                "topic_count": "0",
                "compaign_count": "0",
                "assignment_count": "0",
                "score": "0",
                "balance": "",
                "user_id_info": "",
                "positive_image_sha1": "",
                "opposive_image_sha1": "",
                "is_pass_audit": "0",
                "phone": ""
            }
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "avarta_sha1": "头像sha1",
            "username": "用户名",
            "topic_count": "发布话题数量",
            "compaign_count": "发布活动数量",
            "assignment_count": "发布任务数量",
            "score": "积分",
            "balance": "余额",
            "user_id_info": "用户身份证",
            "positive_image_sha1": "身份证正面图片sha1",
            "opposive_image_sha1": "身份证反面图片sha1",
            "is_pass_audit": "是否通过认证信息审核 0 : 未设置 1: 审核中, 2: 通过审核 3:未通过",
            "phone": "用户手机号"
        }
    },

    // 编辑认证信息
    {
        "name": "9.修改认证信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "alter_auth_info",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "user_id_info": "320123199208164019",
                "positive_image_sha1": "",
                "opposive_image_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001"
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "user_id_info": "用户身份证",
            "positive_image_sha1": "身份证正面图片sha1",
            "opposive_image_sha1": "身份证反面图片sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //获取用户个人信息
    {
        "name": "10.获取用户个人信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_user_info",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "nick": "",
                "gender": "",
                "birth_date": "1992-08-16",
                "email": "",
                "phone": "",
                "address": "",
                "job_info": "0",
                "comp_info": "0",
                "income": '0',
                "education": "",
                "college_name": ""
            }
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "nick": "昵称",
            "gender": "性别(0:未设置 1:男 2:女)",
            "birth_date": "生日",
            "email": "邮箱",
            "phone": "电话",
            "address": "地址",
            "age": "年龄",
            "gender": "性别",
            "job_info": "工作描述",
            "education": "教育",
            "college_name": "学校",
        }
    },

    //修改用户个人信息
    {
        "name": "11.修改用户个人信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "alter_user_info",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "nick": "",
                "gender": "男",
                "birthday": "1992-08-16",
                "address": "",
                "job_info": "0",
                "comp_info": "",
                "income": "0",
                "education": "0",
                "college_name": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "nick": "昵称",
            "gender": "性别(0:未设置 1:男 2:女)",
            "birthday": "生日",
            "address": "地址",
            "job_info": "工作描述",
            "education": "教育",
            "college_name": "学校",
        }
    },

    //获取兴趣标签初始化信息列表
    {
        "name": "12.获取用户兴趣标签列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_user_tag_list",
            "data":{
                "user_sha1":"2ac4faaf5450043e4819d9142029dcf21758bfd4"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "tag_list": [
                    {
                        "tag_id": '1',
                        "tag_name": "标签1"
                    } ,
                    {
                        "tag_id": '3',
                        "tag_name": "标签2"
                    }
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1":"用户的sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "tag_id": "标签的id",
            "tag_description": "标签的内容"
        }
    },

    //用户编辑兴趣标签
    {
        "name": "13.编辑用户兴趣标签",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "edit_tag",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "tag_id_list": [6,7,8] 
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "tag_id_list": "标签id列表",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //获取用户联系人列表
    {
        "name": "14.获取用户联系人列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_friend_list",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "user_list": [
                    {
                        "friend_sha1": "",
                        "friend_name": "",
                        "username": "",
                        "description": "",
                        "avarta_sha1": "",
                    },
                    {
                        "friend_sha1": "",
                        "friend_name": "",
                        "username": "",
                        "description": "",
                        "avarta_sha1": "",
                    }
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "friend_name": "联系人名称",
            "username": "用户名",
            "description": "关系描述",
            "avarta_sha1": "联系人头像",
        }
    },

    //搜索协力用户帐号
    {
        "name": "15.搜索协力用户帐号",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "search_user",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "search_type": "0",
                "search_keyword": "ch",
                "page": "1"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "has_next": "true",
                "user_list": [
                    {
                        "search_user_sha1": "",
                        "username": "",
                        "avarta_sha1": "",
                    },
                    {
                        "search_user_sha1": "",
                        "username": "",
                        "avarta_sha1": "",
                    },
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "search_type": "搜索类型 0:搜索系统的用户 1:搜索自身的联系人",
            "search_keyword": "搜索关键字",
            "page": "获取数据标记",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "search_user_sha1": "搜索用户sha1",
            "username": "用户名",
            "avarta_sha1": "用户头像",
            "has_next": "是否还有数据",
        }
    },

    //添加联系人
    {
        "name": "16.添加联系人",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "add_friend",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "friend_sha1": "7033496b2a5468c85235fb2b4164ed24851ef891"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "friend_sha1": "联系人sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //修改联系人名称
    {
        "name": "17.修改联系人名称",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "alter_friend_name",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "friend_sha1": "7033496b2a5468c85235fb2b4164ed24851ef891",
                "friend_name": "小发发"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "friend_sha1": "联系人sha1",
            "friend_name": "联系人名称",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //删除联系人
    {
        "name": "18.删除联系人",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "delete_friend",
            "data": {
                "user_sha1": "2ac4faaf5450043e4819d9142029dcf21758bfd4",
                "friend_sha1": "7033496b2a5468c85235fb2b4164ed24851ef891"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "friend_sha1": "联系人sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //获取发票信息列表
    {
        "name": "19.获取发票信息列表(2015-12-21)",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_bill_info_list",
            "data": {
                "user_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "bill_info_list": [
                    {
                        "bill_sha1": " ",
                        "type" : "" , 
                        "type_info": "公司",
                        "buyer_name": "",
                        "mail_info" : {
                            "mail_sha1" : "" , 
                            "name": "",
                            "phone": "",
                            "address": ""
                        } , 
                        "value_add_tax_info" : {
                            "buyer_taxno" : "" , 
                            "buyer_contact" : "" , 
                            "buyer_bank" : "" 
                        }

                    },

                    {
                        "bill_sha1": " ",
                        "type" : "" , 
                        "type_info": "公司",
                        "buyer_name": "",
                        "mail_info" : {
                            "mail_sha1" : "" , 
                            "name": "",
                            "phone": "",
                            "address": ""
                        } , 
                        "value_add_tax_info" : {
                            "buyer_taxno" : "" , 
                            "buyer_contact" : "" , 
                            "buyer_bank" : "" 
                        }

                    }

                ]
            }

        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "bill_sha1": "发票 sha1",
            "type_info": "发票类型(0:普通发票 1:增值税发票 2:电子发票)",
            "buyer_name": "发票抬头",
            "buyer_taxno" : "纳税人识别号" , 
            "buyer_contact" : "地址和电话" , 
            "buyer_bank" : "开户行及账号" , 
            "mail_sha1" : "收货地址sha1" , 
            "name": "姓名",
            "phone": "电话",
            "address": "地址",
            "bill_info_list": "发票信息列表",
        }
    },

    //添加发票
    {
        "name": "20.添加发票(2015-12-21) ",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "add_bill_info",
            "data": {
                "user_sha1": "",
                "type": "0",
                "buyer_name": "",
                "mail_sha1" : "" , 
                "value_add_tax_info" : {
                        "buyer_taxno" : "" , 
                        "buyer_contact" : "" , 
                        "buyer_bank" : "" 
                }
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "bill_sha1": "",
            }
        },
        "note": {
            "请求参数": "-------------",
            "type": "发票类型(0:普通发票 1:增值税发票 2:电子发票 )",
            "user_sha1": "用户sha1",
            "buyer_name": "发票抬头",
            "mail_sha1":"收货地址sha1" , 
            "value_add_tax_info" : "增值税发票信息" , 
            "buyer_taxno" : "纳税人识别号" , 
            "buyer_contact" : "地址和电话" , 
            "buyer_bank" : "开户行及账号" , 
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "bill_sha1": ""
        }
    },

    //删除发票信息
    {
        "name": "21.删除发票信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "delete_bill_info",
            "data": {
                "user_sha1": "",
                "bill_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "bill_sha1": "发票sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    // 我的支付帐号
    {
        "name": "22.我的支付帐号",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_purchase_account_list",
            "data": {
                "user_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "account_info": {
                    "name": "",
                    "balance": ""
                },
                "account_list": [
                    {
                        "payment_type": '0',
                        "payment_description": "",
                        "payment_info": "",
                        "add_time": ""
                    },
                    {
                        "payment_type": '1',
                        "payment_description": "",
                        "payment_info": "",
                        "add_time": ""
                    },
                ],
                "statistics_info": {
                    "income_rate": 0.6,
                    "pay_rate": 0.4
                }
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "account_info": "帐号信息",
            "name": "用户名",
            "balance": "余额",
            "payment_type": "0:支付宝 1:微信",
            "payment_description": "帐号类型描述",
            "payment_info": "帐号信息",
            "account_list": "支付帐号列表",
            "statistics_info": "统计信息",
            "income_rate": "收入比例",
            "pay_rate": "支出比例"
        }
    },

    // 添加支付帐号
    {
        "name": "23.添加支付帐号",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "add_purchase_account",
            "data": {
                "user_sha1": "2bfda1f4f3b0bb6838c237dafde54ada7a87b0a5",
                "payment_type": "0",
                "payment_info": "fdsfs"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_type": '0',
            "payment_description": "帐号类型描述",
            "payment_info": "帐号信息",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //删除支付帐号
    {
        "name": "24.删除支付帐号",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "delete_purchase_account",
            "data": {
                "user_sha1": "",
                "payment_info": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_info": "帐号",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //我的订单列表
    {
        "name": "25.我的订单列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_order_list",
            "data": {
                "user_sha1": "",
                "page": "1"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "has_next": "true",
                "order_list": [
                    {
                        "order_sha1": "",
                        "username": "",
                        "behavior_type": '0',
                        "title": "",
                        "trans_type": '0',
                        "trans_type_info": "",
                        "money": '0.0',
                        "trans_time": "2015-12-10",
                        "trans_detials": "",
                        "bill_status_info": ""

                    },
                    {
                        "order_sha1": "",
                        "username": "",
                        "behavior_type": '0',
                        "title": "",
                        "trans_type": '0',
                        "trans_type_info": "",
                        "money": '0.0',
                        "trans_time": "2015-12-10",
                        "trans_detials": "",
                        "bill_status_info": ""

                    },
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "page": "获取数据标记",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "order_sha1": "订单sha1",
            "username": "用户名",
            "behavior_type": "",
            "title": "交易名称",
            "trans_type": "交易类型",
            "trans_type_info": "订单类型描述",
            "money": "金额",
            "trans_time": "交易时间",
            "trans_detials": "订单详情",
            "bill_status_info": "发票状态",
            "has_next": "数据是否加载完毕",
        }
    },

    //删除订单信息
    {
        "name": "26.删除订单信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "delete_order_info",
            "data": {
                "user_sha1": "",
                "order_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "order_sha1": "订单sha1",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //修改支付帐号
    {
        "name": "27.修改支付帐号",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "alter_purchase_account_info",
            "data": {
                "user_sha1": "",
                "payment_type": "0",
                "payment_info": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_type": "帐号信息类型",
            "payment_info": "帐号信息",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //我分享的列表
    {
        "name": "28.我分享的列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "my_share_list",
            "data": {
                "user_sha1": "",
                "page": "1"
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "has_next": "true",
                "share_list": [
                    {
                        "invitation_sha1": "",
                        "behavior_object_sha1": "",
                        "behavior_type_info": "",
                        "title": "",
                        "invitation_count": "邀请人数",
                        "complete_count": "完成人数"
                    } ,
                    {
                        "invitation_sha1": "",
                        "behavior_object_sha1": "",
                        "behavior_type_info": "",
                        "title": "",
                        "invitation_count": "邀请人数",
                        "complete_count": "完成人数"
                    }
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "page": "请求数据标记",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "has_next": "数据是否加载完毕",
            "share_list": "分享列表",
            "invitation_sha1": "邀请sha1",
            "behavior_object_sha1": "行为对象sha1",
            "behavior_type_info": "行为对象类型描述",
            "title": "分享标题",
            "invitation_count": "邀请人数",
            "complete_count": "完成人数"
        }
    },

    //分享详情
    {
        "name": "29.分享详情(待定)",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "my_share_detail",
            "data": {
                "user_sha1": "",
                "invitation_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {

            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_type": "帐号信息类型",
            "payment_info": "帐号信息",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //获取职业,学历,收入初始化数据
    {
        "name": "30.获取职业,学历,收入初始化数据",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_user_info_init_data"
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "job_list": [
                    {
                        "job_id": "0",
                        "job_info": "学生"
                    } ,
                    {
                        "job_id": "1",
                        "job_info": "教师"
                    }
                ],
                "education_list": [
                    {
                        "education_id": "0",
                        "education_info": "不限"
                    } ,
                    {
                        "education_id": "1",
                        "education_info": "小学毕业"
                    }
                ],
                "income_list": [
                    {
                        "income_id": "0",
                        "income_info": "不限"
                    } ,
                    {
                        "income_id": "1",
                        "income_info": "0-1500"
                    }
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_type": "帐号信息类型",
            "payment_info": "帐号信息",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "job_list": "职业分类列表",
            "job_id": "职业分类id",
            "job_info": "职业分类描述",
        }
    },
    //获取兴趣标签初始化信息列表
    {
        "name": "31.获取兴趣标签初始化信息列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_tag_list",
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "tag_list": [
                    {
                        "tag_info": "互联网",
                        "sub_tag_list": [
                            {
                                "sub_tag_id": '1',
                                "sub_tag_description": "",
                            } ,
                            {
                                "sub_tag_id": '3',
                                "sub_tag_description": "",
                            } ,
                        ],
                    } ,
                    {
                        "tag_info": "法律",
                        "sub_tag_list": [
                            {
                                "sub_tag_id": '1',
                                "sub_tag_description": "",
                            } ,
                            {
                                "sub_tag_id": '3',
                                "sub_tag_description": "",
                            } ,
                        ],
                    } ,
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "parent_tag_list": "一级标签列表",
            "sub_tag_list": "子标签列表",
            "sub_tag_id": "二级标签id",
            "sub_tag_description": "二级标签描述",
            "tag_info": "一级标签描述",
            "sub_tag_list": "子标签列表",
        }
    },

    //验证注册码
    {
        "name": "32.验证注册码",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "check_register_code",
            "data": {
                "register_code" : "123456" 
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {}
        },
        "note": {
            "请求参数": "-------------",
            "register_code":"注册邀请码 默认位123456",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //获取收货地址列表
    {
        "name": "33.获取收货地址列表",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_address_list",
            "data": {
                "user_sha1": "acdd6c3b14284cae21cd38feabf53b8151111f6a"  
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "address_list" : [
                    {
                        "mail_sha1" : "" , 
                        "username" : "" , 
                        "phone"  : "" ,
                        "address" : "" , 
                        "creation_time" : "" 
                    } , 
                     {
                        "mail_sha1" : "" , 
                        "username" : "" , 
                        "phone"  : "" ,
                        "address" : "" , 
                        "creation_time" : "" 
                    } 
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识" , 
            "mail_sha1" : "地址sha1" , 
            "username" : "收货人姓名" , 
            "phone" : "收货人电话" , 
            "address" : "收货人地址" , 
            "creation_time" : "地址添加时间" 
        }
    },
    //添加收货地址
    {
        "name": "34.添加收货地址",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "add_address",
            "data": {
                "user_sha1": "",
                "username" : "" , 
                "phone" : "" , 
                "address" : "" 
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "mail_sha1"  : "" 
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "username" : "收货人姓名" , 
            "phone" : "收货人电话" , 
            "address" : "收货人地址" , 
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识" , 
            "mail_sha1" : "收货地址sha1" 
        }
    },
    //获取收货地址信息
    {
        "name": "35.获取收货地址信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "get_address_info",
            "data": {
                "user_sha1": "",
                "mail_sha1" : ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "username" : "" , 
                "phone" : "" , 
                "address" : "" 
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "",
            "payment_type": "帐号信息类型",
            "payment_info": "帐号信息",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

    //删除收货地址信息
    {
        "name": "36.删除收货地址信息",
        "url": "http://dev.xielicheng.com:8000/teamup/api/",
        "method": "POST",
        "params": {
            "action": "delete_address_info",
            "data": {
                "user_sha1": "",
                "mail_sha1" : ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001", 
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户sha1",
            "mail_sha1" : "收货地址sha1" , 
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识"
        }
    },

        //获取评论列表接口
    {
        "name": "6.获取评论列表接口(完成)",
        "url": "http://dev.xielicheng.com:8000/api",
        "method": "POST",
        "params": {
            "action": "get_comment_list",
            "data": {
                "user_sha1": "936d3439f9208678de7358eda91c14c7cf1fa965",
                "behavior_sha1": "" , 
                "page" : "1" 
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "has_next" : "true" , 
                "comment_count": "",
                "comment_list": [
                    {
                        "creator_sha1" : "" , 
                        "comment_author_name": "",
                        "avarta_sha1": "",
                        "comment_sha1": "",
                        "comment_time": "",
                        "comment_info": "",
                        "image_sha1_list": [],
                    } ,
                    {
                        "creator_sha1" : "" , 
                        "comment_author_name": "",
                        "avarta_sha1": "",
                        "comment_sha1": "",
                        "comment_time": "",
                        "comment_info": "",
                        "image_sha1_list": [],
                    }
                ]
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户的sha1",
            "behavior_sha1": "行为对象的sha1",
            "page" : "数据标记" , 
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "has_next" : "数据是否加载完毕" , 
            "comment_count": "总评论条数",
            "comment_list": "评论列表",
            "comment_author_name": "评论作者名称",
            "avarta_sha1": "评论作者头像",
            "comment_time": "评论时间",
            "comment_info": "评论内容",
            "image_sha1_list": "图片sha1列表",

        }
    },

    //评论接口
    {
        "name": "7.评论接口(完成)",
        "url": "http://dev.xielicheng.com:8000/api",
        "method": "POST",
        "params": {
            "action": "comment_on",
            "data": {
                "user_sha1": "936d3439f9208678de7358eda91c14c7cf1fa965",
                "behavior_sha1": "",
                "comment_info": "",
                "image_sha1_list": []
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
            "data": {
                "comment_sha1": ""
            }
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户的sha1",
            "behavior_sha1": "行为对象的sha1",
            "comment_info": "评论信息",
            "image_sha1_list": "图片sha1列表",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
            "comment_sha1": "评论sha1",
        }
    },

    //删除评论
    {
        "name": "8.删除评论(完成)",
        "url": "http://dev.xielicheng.com:8000/api",
        "method": "POST",
        "params": {
            "action": "delete_comment",
            "data": {
                "user_sha1": "936d3439f9208678de7358eda91c14c7cf1fa965",
                "comment_sha1": ""
            }
        },
        "response": {
            "info": "OK",
            "ret": "0001",
        },
        "note": {
            "请求参数": "-------------",
            "user_sha1": "用户的sha1",
            "comment_sha1": "评论sha1",
            "image_sha1_list": "图片sha1列表",
            "返回参数": "-------------",
            "info": "请求成功或者失败的信息",
            "ret": "代表请求的信息一些标识",
        }
    },

    //状态码
    {
        "name": "状态码描述",
        "url": "http://wheel.marketcloud.com.cn/gcustomer/api",
        "method": "POST",
        "type": 0,
        "params": {
            '1111': "服务器繁忙",
            '0000': "用户未登录",
            '0001': "正常",
            '0002': "用户不存在",
            '0003': "用户已存在",
            '0004': "用户密码错误",
            '0005': "用户注册失败",
            '0006': "邮箱密码格式错误",
            '0007': "密码格式错误",
            '0008': "邮件通知失败",
            '0009': "用户未登录",
            '0010': "上传图片失败",
            '0013': "修改密码失败",
            '0014': "用户已离线",
            '0015': "参数解析错误",
            '0016': "用户已在其他地方登录",
            '0017': "删除图片失败",
            '0018': "解密失败",
        },
        "response": {

        },
        "note": {

        }
    },
]


