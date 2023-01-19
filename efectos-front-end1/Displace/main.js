"use strict"
const ul = document.querySelector('ul');

function frames() {
  const animacion = ul.animate([
    //keyframes
    {transform: 'translateY(0px)'},
    {transform: 'translateY(-100px)'}
  ],{
    //timing options
    easing: 'linear',
    iterations: 1,
    duration: 200 //milisegundos
  });
  return animacion.finished; //promesa finished
}

function displace(){
    frames().then((res) => {
        ul.appendChild(document.querySelectorAll('ul > li')[0]);
        ul.style.transform = 'translateY(0px)';
    });
}

setInterval(displace, 1000);