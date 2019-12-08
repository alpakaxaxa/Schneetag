function toggleMenu() {
    var e = document.getElementsByClassName("mobile-background")[0]
    var b = document.getElementById("burger-menu")
    var c = document.getElementById("menu-close");
    if (e.style.opacity == 0) {
        e.style.visibility = "visible";
        e.style.opacity = 1;
        e.style.zIndex = "7";
        b.style.display = "none";
        c.style.display = "block";
    } else {
        e.style.opacity = 0;
        e.style.visibility = "hidden";
        e.style.zIndex = "0";
        b.style.display = "block";
        c.style.display = "none"
    }
}