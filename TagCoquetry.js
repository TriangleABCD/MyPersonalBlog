// JavaScript Document


//以下用于设置标签的病娇效果
window.onblur = function(){
	var a = document.getElementsByTagName("title")[0];
	a.innerHTML = "亲,别走啊~";
};

var c = 0;
window.onfocus = function(){
	var b = document.getElementsByTagName("title")[0];
	var s = new Array("死鬼,想我啦 !","ΔABCD の 个人主页","你还知道回来 !","人家好想你呢~");
	b.innerHTML = s[c%4];
	c = c + 1;
	
};

//以下设置悬浮快的改变效果
var b = 0;
function f(){
	var a = document.getElementById("t");
	var s = new Array("Github2.png","Github3.png","Github4.png","Github1.png");
	var size = new Array("200","300","400","100");
	a.src = s[b%4];
	a.width = size[b%4];
	a.height = size[b%4];
	b=b+1;
}
