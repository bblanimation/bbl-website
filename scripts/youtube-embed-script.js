// YouTube Player Script
DomReady.ready(function() {
    var v = document.getElementsByClassName("youtube_player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        var img = createImgElement(v[n].dataset.id, "/hqdefault.jpg");
        p.onclick = labnolIframe;
        p.appendChild(img);
        var div = createDivElement();
        p.appendChild(div);
        v[n].appendChild(p);
    }
});

DomReady.ready(function() {
    var v = document.getElementsByClassName("youtube_player_high");
    for (var i = 0; i < v.length; i++) {
        var p = document.createElement("div");
        var img = createImgElement(v[i].dataset.id, "/maxresdefault.jpg");
        p.onclick = labnolIframe;
        p.appendChild(img);
        var div = createDivElement();
        p.appendChild(div);
        v[i].appendChild(p);
    }
});

function createImgElement(id, type) {
  var img = new Image();
  img.className = "youtube-thumb";
  img.src = "//i.ytimg.com/vi/" + id + type;
  return img;
}

function createDivElement() {
  var div = document.createElement("div");
  div.className = "play-button";
  return div;
}

function labnolIframe() {
  if (window.screen.width > 550) {
    // desktop replaces HTML with embedded YouTube video
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?list=PLeXTJiny_fxFu_Jz0MKodZ2Wlb1nYGw8O&autoplay=1&autohide=2&border=0&fs=1&wmode=opaque&enablejsapi=1&controls=1&showinfo=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("allowfullscreen","");
    this.parentNode.replaceChild(iframe, this);
  } else {
    // mobile devices redirect to YouTube
    window.open("http://youtu.be/" + this.parentNode.dataset.id + "?list=PLeXTJiny_fxFu_Jz0MKodZ2Wlb1nYGw8O&autoplay=1", "_blank");
  }
}
