"use strict"
const ul = document.querySelector('ul');

function frames() {
  const animacion = ul.animate([
    //keyframes
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-550px)'}
  ],{
    //timing options
    easing: 'linear',
    iterations: 1,
    duration: 500 //milisegundos
  });
  return animacion.finished; //promesa finished
}

function displace(){
    frames().then((res) => {
        ul.appendChild(document.querySelectorAll('ul > li')[0]);
        ul.style.transform = 'translateX(0px)';
    });
}

setInterval(displace, 1000);