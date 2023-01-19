const arrow = document.querySelectorAll(".question__arrow");
const answer = document.querySelectorAll(".question__answer");
let openQuestion = true;

for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e) => {
        e.preventDefault();
        if(openQuestion){
            openQuestion = false;
            arrow[i].src = "./images/arrow-up-red.svg";
            answer[i].classList.add("question__answer--show");
        } else {
            openQuestion = true;
            arrow[i].src = "./images/arrow-down-blue.svg";
            answer[i].classList.remove("question__answer--show");
        }
    });
    arrow[i].classList.remove("question__answer--show");
    answer[i].classList.remove("question__answer--show");
}