var navbarDash = document.getElementById("navbar-dash"),
    ListItem1 = document.getElementsByClassName("tab1"),
    ListItem2 = document.getElementsByClassName("tab2"),
    ListItem3 = document.getElementsByClassName("tab3"),
    ListItem4 = document.getElementsByClassName("tab4");

ListItem1.onHover = function() {
  console.log("success1")
  navbarDash.style.marginLeft = "93px";
  navbarDash.style.width = "48px";
}

ListItem2.onmouseover = function() {
  console.log("success2")
  navbarDash.style.marginLeft = "293px";
  navbarDash.style.width = "90px";
}

ListItem3.onHover = function() {
  console.log("success3")
  navbarDash.style.marginLeft = "493px";
  navbarDash.style.width = "70px";
}

ListItem4.onHover = function() {
  console.log("success4")
  navbarDash.style.marginLeft = "693px";
  navbarDash.style.width = "60px";
}

// Begin HEADER ADJUSTMENT WITH SCROLL

var docEl = document.documentElement,
    $div = document.getElementById('SITE_HEADERscreenWidthBG-homepage');

var a = 0.75,
    b = 0.9,
    c = 0.25,
    maxOfScroll = 180;

window.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   v = Math.pow(Math.min(maxOfScroll,sTop)/maxOfScroll,c);
   $div.style.opacity =  (a + (b - a) * v).toString();
 };

// End HEADER ADJUSTMENT WITH SCROLL
