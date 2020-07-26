(function(){
window.datas=[];
//Start push
datas.push(function(){
if(guv("filename")=="jsq2.25.zip"&guv("d")=="file"&guv("type")=="download"){ 
var href="file/download/jsq2.25.zip";open(href);
document.documentElement.innerHTML="Downloading..."
setTimeout(function(){
location.href="file/download/success?"+encodeURIComponent(href);
},5000)
return "return";
}});
//END
})()
