function removeOpacity() {
    var e = document.getElementById("floating")
    e.style = "opacity:1;"
}
var timer = null;
document.addEventListener('scroll', function() {
    var e = document.getElementById("floating")
    e.style.opacity = "0.3";
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          removeOpacity()
    }, 150);
}, false);