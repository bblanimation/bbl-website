// Insert footer to 'SITE_FOOTER' div elements
DomReady.ready(function() {
    var footer = document.getElementById("SITE_FOOTER");
    var p = document.createElement("div");
    p.id = "SITE_FOOTERcenteredcontent";

    var c1 = document.createElement("div");
    c1.className = "c1";
    c1.innerHTML = '<p class="footer-copyright-text">&#169; 2017 by Bricks Brought to Life.</p>'
    p.append(c1);

    var social = document.createElement("ul");
    social.className = "footer-social-icons"
    social.innerHTML += '<li><a href="https://www.facebook.com/bblanimation/" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'facebook\', \'1\']);" target="_blank"><img class="social-icons" src="/images/social/facebook.png" alt="Facebook"></a></li>';
    social.innerHTML += '<li><a href="https://plus.google.com/+bigbudlego/" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'google+\', \'1\']);" target="_blank"><img class="social-icons" src="/images/social/google+.png" alt="Google+"></a></li>';
    social.innerHTML += '<li><a href="https://www.youtube.com/c/bigbudlego" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'youtube\', \'1\']);" target="_blank"><img class="social-icons" src="/images/social/youtube.png" alt="YouTube"></a></li>';
    social.innerHTML += '<li><a href="https://www.linkedin.com/in/christopher-gearhart-16b902a3" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'linkedin\', \'1\']);" target="_blank"><img class="social-icons" src="/images/social/linkedin.png" alt="LinkedIn"></a></li>';
    p.append(social);

    footer.appendChild(p);
});
// STRUCTURE OF ABOVE HTML:
// <div id="SITE_FOOTERcenteredcontent">
//   <div class="c1">
//     <p class="footer-copyright-text">&#169; 2017 by Bricks Brought to Life.</p>
//   </div>
//   <ul class="footer-social-icons">
//     <li><a href="https://www.facebook.com/bblanimation/" target="_blank"><img class="social-icons" src="/images/social/facebook.png" alt="Facebook"></a></li>
//     <li><a href="https://plus.google.com/+bigbudlego/" target="_blank"><img class="social-icons" src="/images/social/google+.png" alt="Google+"></a></li>
//     <li><a href="https://www.youtube.com/c/bigbudlego" target="_blank"><img class="social-icons" src="/images/social/youtube.png" alt="YouTube"></a></li>
//     <li><a href="https://www.linkedin.com/in/christopher-gearhart-16b902a3" target="_blank"><img class="social-icons" src="/images/social/linkedin.png" alt="LinkedIn"></a></li>
//     ...etc
//   </ul>
// </div>

// Snap footer to bottom of screen if content is shorter than page height
// DomReady.ready(function() {
//   var content = document.getElementById("SITE_CONTENT");
//   var footer = document.getElementById("SITE_FOOTER");
//   footer.style.marginTop = (document.height - content.offsetHeight);
// });
