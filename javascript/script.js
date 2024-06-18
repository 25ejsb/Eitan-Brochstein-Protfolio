var navbar = document.querySelector(".header__nav");
var navchildren = document.querySelectorAll("#navchild");

navchildren.forEach(nav => {
    $(nav).hover(function(){
        navbar.style = "background-color: black; box-shadow: 0 1rem 1rem rgb(0, 0, 0);"
        if (navbar.classList.contains("sticky-nav")) {
            navbar.querySelectorAll("ul li a").forEach(e=>e.style.color = "white")
        }
    }, function(){
        navbar.style = "box-shadow: none;"
        if (navbar.classList.contains("sticky-nav")) {
            navbar.querySelectorAll("ul li a").forEach(e=>e.style="")
        }
    });
});
