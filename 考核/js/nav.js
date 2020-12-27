function showmenu1(obj) {
    var submenu = obj.getElementsByTagName("ul")[0];
    submenu.style.display = "block";
}

function hidemenu1(out) {
    var submenu = out.getElementsByTagName("ul")[0];
    submenu.style.display = "none";
}

function showmenu2(obj) {
    var submenu = obj.getElementsByClassName("secnav-rightul")[0];
    submenu.style.display = "block";
}

function hidemenu2(out) {
    var submenu = out.getElementsByClassName("secnav-rightul")[0];
    submenu.style.display = "none";
}