const hamburger = document.querySelector(".nav__icon"); 
const menu = document.querySelector(".nav__list");
let openMenu = true;

    hamburger.addEventListener("click", (e) => {
        e.preventDefault();
        if(openMenu){
            openMenu = false;
            hamburger.src = "./images/icon-hamburger.svg";
            menu.classList.add("nav__list--show");
            hamburger.classList.add("nav__icon--show");
        } else {
            openMenu = true;
            hamburger.src = "./images/icon-close.svg";
            menu.classList.remove("nav__list--show");
            hamburger.classList.remove("nav__icon--show");
        }

        menu.classList.toggle("nav__list--show");
        
    });
    
    menu.classList.toggle("nav__list--show");