
let miniMenu = document.getElementById("mini-menu");
let navbar = document.getElementById("navbar");
let hiddenMenu = document.getElementById("hidden-menu");
let logoContainer = document.getElementById("logo");
let isOpen = false;

miniMenu.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    if(!isOpen){
        navbar.classList.remove("close");
        navbar.classList.add("open");
        hiddenMenu.style.width = `${logoContainer.offsetWidth }px`;
        hiddenMenu.style.transform  = "translate(0, 0)";
        isOpen= true;
    }else if(isOpen){
        navbar.classList.remove("open");
        navbar.classList.add("close");
        hiddenMenu.style.transform  = "translate(-600px, 0)";
        isOpen = false;
    }
})

