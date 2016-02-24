/*提供数据验证的接口*/

//验证是否是email格式
function checkEmail(email){
    var reg = /^([a-zA-Z0-9]+[_|\_|\.|\+|\-|=|%]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|\-|=|%]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(email) ; 
}

///验证是否含有中文值
function   isChinese(name){
	if(name.length   ==   0){
		return   false;
	}
	for(i   =   0;   i   <   name.length;   i++){  
		if(name.charCodeAt(i)   >   128){
			return   true;
		}
	}
	return   false;
}

///验证是否全是中文值
function   isChineseAll(name){
	if(name.length   ==   0){
		return   false;
	}
	for(i   =   0;   i   <   name.length;   i++){  
		if(name.charCodeAt(i)   <=  128){
			return   false;
		}
	}
	return   true;
}

///验证是否全是英文值
function   isEnglish(name) 
{  
	if(name.length   ==   0){
		return   false;
	}
	for(i   =   0;   i   <   name.length;   i++){  
		if(name.charCodeAt(i)   >   128){
			return   false;
		}
	}
	return   true;
}


//验证是否全是数字
function   isNumber(name){  
	if(name.length   ==   0){
		return   false;
	}
	for(i   =   0;   i   <   name.length;   i++){  
		if(name.charAt(i)   <   "0"   ||   name.charAt(i)   >   "9")
			return   false;
		}
	return   true;
}

//验证是否是小数
function   isDecimal(name){  
	if(name.length   ==   0){
		return   false;
	}
	if(name.charAt(0) == "0"){
		return   false;
	}
	name = name.replace(".","");
	var flag = false; 
	for(i   =   0;   i   <   name.length;   i++){  
		if(name.charAt(i)   <   "0"   ||   name.charAt(i)   >   "9" )
			return   false;
		}
		if(name.charCodeAt(i) == 46){
			flag = true ; 
		}
	return   true;
}

//验证是否是电话号码
function isPhone(phone){     
	if(phone.length == 0){
		return false ; 
	}
	var i,j,strTemp;
	strTemp="0123456789-()# ";     
	for (i=0;i<phone.length;i++){     
		j=strTemp.indexOf(phone.charAt(i));     
		if (j==-1){     
			return false;     
		}     
	}     
	return true ;     
}    

//验证是否是URL
function isURL(URL){
	var str=URL;
	//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
		return true;
	}else{
		return false;
	}
}

//验证是否是数字字母或下划线(密码判断)
function notchinese(str){ 
	var reg=/[^A-Za-z0-9@#$￥%^&*()_|<>?\,\.\/]/g  ; 
	if (reg.test(str)){ 
		return false ; 
	}
	else{ 
		return  true ; 
	} 
} 
