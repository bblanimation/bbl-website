// Insert footer to 'SITE_FOOTER' div elements
DomReady.ready(function() {
    var footer = document.getElementById("SITE_FOOTER");
    var p = document.createElement("div");
    p.id = "SITE_FOOTERcenteredcontent";

    var c1 = document.createElement("div");
    c1.className = "c1";
    c1.innerHTML = '<p class="footer_copyright_text">&#169; 2017 by Bricks Brought to Life.</p>'
    p.append(c1);

    var social = document.createElement("ul");
    social.className = "footer_social_icons"
    social.innerHTML += '<li><a href="https://www.youtube.com/c/bblanimation?sub_confirmation=1" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'youtube\', \'1\']);" target="_blank"><img src="/images/social/youtube.png" alt="YouTube"></a></li>';
    social.innerHTML += '<li><a href="https://www.facebook.com/bblanimation/" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'facebook\', \'1\']);" target="_blank"><img src="/images/social/facebook.png" alt="Facebook"></a></li>';
    social.innerHTML += '<li><a href="https://www.instagram.com/christopher.gearhart/" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'instagram\', \'1\']);" target="_blank"><img src="/images/social/instagram.png" alt="Instagram"></a></li>';
    social.innerHTML += '<li><a href="https://www.twitter.com/bblanimation/" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'twitter\', \'1\']);" target="_blank"><img src="/images/social/twitter.png" alt="Twitter"></a></li>';
    social.innerHTML += '<li><a href="https://www.linkedin.com/in/christopher-gearhart-16b902a3" onClick="_gaq.push([\'_trackEvent\', \'social_links\', \'click_link\', \'linkedin\', \'1\']);" target="_blank"><img src="/images/social/linkedin.png" alt="LinkedIn"></a></li>';
    p.append(social);

    footer.appendChild(p);
});
