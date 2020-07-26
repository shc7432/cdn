(function(){
window.datas=[];
//Start push
datas.push(function(){
if(guv("filename")=="jsq2.25.zip"&guv("d")=="file"&guv("type")=="download"){ 
var href="/cdn/file/download/jsq2.25.zip";open(href);
document.documentElement.innerHTML="Downloading..."
setTimeout(function(){
sessionStorage.downloadhref=href;
sessionStorage.downloadname="jsq.zip"
location.href="file/download/success";
},1)
return "return";
}});
//END
})()
