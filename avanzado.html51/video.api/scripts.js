window.addEventListener('load', init);
var video, volumen, progreso;
function init (){
    video = document.getElementById('video');
    volumen = document.getElementById('volumen');
    document.getElementById('play').addEventListener('click', ponerPlay);
    document.getElementById('pausa').addEventListener('click', ponerPausa);
    document.getElementById('stop').addEventListener('click', ponerStop);
    volumen.addEventListener('change', cambiarVolumen);
    video.addEventListener('timeupdate', actualizarTiempo);
    video.addEventListener('loadmetadata', asignarDuracion);
    progreso = document.getElementById('progress');
}

function asignarDuracion(){
    //progreso.max = video.duration;
    console.log(video.duration);
}
function ponerPlay(){
    video.play();
}
function ponerPausa(){
    video.pause();
}
function ponerStop(){
    video.pause();
    video.currentTime = 0;
}
function actualizarTiempo(){
    document.querySelector('#tiempo').innerHTML = video.currentTime;
    //progreso.value = video.currentTime;

    var valor = (video.currentTime * 100) / video.duration;
    document.querySelector('#porcentaje').style.width = valor + '%';
    
}
function cambiarVolumen(){
    video.volume = volumen.value;
}
