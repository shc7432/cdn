gadgetsInDomainShc7432.addItem('open_url_in_blank', function (url, download = false) {
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

gadgetsInDomainShc7432.addItem('toFullScreen', function (elem) {
    if (elem.requestFullscreen) {
        return elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
        return elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
        return elem.mozRequestFullScreen();
    } else {
        return elem.msRequestFullscreen();
    }
});
gadgetsInDomainShc7432.addItem('unFullScreen', function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
});
