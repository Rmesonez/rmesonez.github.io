const hamburger = document.querySelector(".nav__icon"); 
const menu = document.querySelector(".main__container");
let openMenu = true;

    hamburger.addEventListener("click", (e) => {
        e.preventDefault();
        if(openMenu){
            openMenu = false;
            hamburger.src = "./images/icon-hamburger.svg";
            menu.classList.add("main__container--show");
            hamburger.classList.add("nav__icon--show");
        } else {
            openMenu = true;
            hamburger.src = "./images/icon-close.svg";
            menu.classList.remove("main__container--show");
            hamburger.classList.remove("nav__icon--show");
        }

        menu.classList.toggle("main__container--show");
        
    });
    
    // menu.classList.toggle("main__container--show");