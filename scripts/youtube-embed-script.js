// YouTube Player Script
DomReady.ready(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
});

DomReady.ready(function() {
    var v = document.getElementsByClassName("youtube-player-high");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb2(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
});

function labnolThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

function labnolThumb2(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/maxresdefault.jpg"><div class="play-button"></div>';
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?list=PLeXTJiny_fxFu_Jz0MKodZ2Wlb1nYGw8O&autoplay=1&autohide=2&border=0&fs=1&wmode=opaque&enablejsapi=1&controls=1&showinfo=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("allowfullscreen","");
    this.parentNode.replaceChild(iframe, this);
}
