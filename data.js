(function(){
window.datas=[];
/****
====Operation instruction====
#Start note#====Usage method====
Ordinary method:
datas.push({To be perfected})
Advanced method:
datas.push({function:function(){}})
====Description====
Method for passing in data(@data "The data you want to enter"):
[1]https://shc7432.github.io/cdn/get?
--------
Description of ordinary method:
@name "Url Data" 
@url "Redirect to Url" 
Description of advanced method:
[1]The function can customize the judgment according to the data in the url.
[2]#End note#Return "break" can stop judging.
====Simple explanation====
datas.push(function(){

})
====The end====
****/
//Start the ordinary method
datas.push(function(){
if(guv("filename")=="jsq.zip"&guv("type")=="download"){
location.href="file/download/jsq.zip";
//documentdocumentElementinnerHTML
}
})

//Stop the ordinary method and start the advanced method

//End
})()
