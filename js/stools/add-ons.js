gadgetsInDomainShc7432.addItem('open_url_in_blank',function(url, download = false){
    var a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.download = (download ? download : undefined);
    a.style.position = 'fixed !important';
    a.style.top = '-114514% !important';
    document.body.appendChild(a);
    a.click();
    a.remove();
});
