(function(){
if(localStorage.agreeToTermsOfService||!new RegExp('zh-CN','i').test(navigator.language)) return false;
var a=document.createElement("div");
a.title="服务条款";
a.innerHTML=`请仔细阅读服务条款,然后选择是否同意条款。
<pre style="border:1px solid #ccc;overflow:auto;"><center><b>服务条款</b></center>
<b>第一条</b> 为保证您(以下简称“用户”)和"https://shc7432.github.io"网站(以下简称“本网站”)(包括其服务)的合法权益,防止不合法的情况发生,特制定本服务条款。
<b>第二条</b> 您可以选择拒绝本《服务条款》(以下简称“本条款”),但本网站(或其服务)可能无法使用。
<b>第三条</b> 您可以在<a href="https://shc7432.github.io/cdn/js/stools/~/termsofservice.html">https://shc7432.github.io/cdn/js/stools/~/termsofservice.html</a>随时查看本条款。
</pre><br><button onclick="">同意</button> &nbsp; <button onclick="">不同意</button>`

})()
