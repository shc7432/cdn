gadgetsInDomainShc7432.prototype.copytext=function(text){
if(typeof document.execCommand!=="function"){
//alert("复制失败，请长按复制");
return false;
}
var dom = document.createElement("textarea"); 
dom.value = text;
dom.setAttribute('style', 'position:absolute;top:-1000%;');
if(document.body){
document.body.appendChild(dom);
} else if(document.documentElement){
document.documentElement.appendChild(dom);
} else {
//alert("复制失败，请长按复制");
return false;
}
dom.select();
 var result = document.execCommand('copy');
if(document.body){
document.body.removeChild(dom);
} else if(document.documentElement){
document.documentElement.removeChild(dom);
} else {
//alert("复制失败，请长按复制");
return false;
}
if (result) {
//alert("复制成功");
return true;
}
if(typeof document.createRange!=="function"){
//alert("复制失败，请长按复制");
return false;
}
var range = document.createRange();
var div=document.createElement('div');
div.innerHTML=text;
div.setAttribute('style', 'position:absolute;top:-1000%;');
if(document.body){
document.body.appendChild(div);
} else if(document.documentElement){
document.documentElement.appendChild(div);
} else {
//alert("复制失败，请长按复制");
return false;
}
range.selectNode(div);
const selection = window.getSelection();
if (selection.rangeCount > 0){
selection.removeAllRanges();
}
selection.addRange(range);
document.execCommand('copy');
//alert("复制成功")
return true;
}
gadgetsInDomainShc7432.addItem('copytext',gadgetsInDomainShc7432.prototype.copytext)
