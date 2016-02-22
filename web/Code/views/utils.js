//格式化字符串
var StringFormat = function(src){
    if (arguments.length == 0) return null;
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function(m, i){
        return args[i];
    });
};

function Utils() {
	this.StringFormat = StringFormat  ;
}
module.exports = new Utils() ;