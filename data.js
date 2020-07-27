(function(){
window.datas=[];
//Start push
datas.push(function(){
if(guv("filename")=="jsq2.24.zip"&guv("d")=="file"&guv("type")=="download"){ 
var href="/cdn/file/download/jsq2.25.zip";var atag=document.createElement("a");
atag.href=href;atag.target="_blank";atag.hidden=1;atag.download="jsq.zip";
document.documentElement.appendChild(atag);atag.click();
document.documentElement.innerHTML="Downloading..."
setTimeout(function(){
location.href="file/download/success?dname=jsq.zip&durl="+encodeURIComponent(href);
},1)
return "return";
}});
//END
})()
