(function(){
window.datas=[];
//Start push
datas.push(function(){
if(guv("filename")=="jsq2.25.zip"&guv("d")=="file"&guv("type")=="download") 
open("file/download/jsq2.25.zip");
document.documentElement.innerHTML="Downloading..."
setTimeout(function(){location.href="file/download/success"},5000)
return "return";
});
//END
})()
