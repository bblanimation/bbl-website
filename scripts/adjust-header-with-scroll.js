// Begin HEADER ADJUSTMENT WITH SCROLL

var docEl = document.documentElement,
    $div = document.getElementById('SITE_HEADERscreenWidthBG-homepage');

var a = 0.45,
    b = 0.9,
    c = 0.25,
    maxOfScroll = 180;

window.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   v = Math.pow(Math.min(maxOfScroll,sTop)/maxOfScroll,c);
   $div.style.opacity =  (a + (b - a) * v).toString();
 };

// End HEADER ADJUSTMENT WITH SCROLL
