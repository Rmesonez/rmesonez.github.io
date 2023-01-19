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

    var sr = new webkitSpeechRecognition();
    sr.continuous = true;
    sr.interimResults = true;
    sr.lang = 'es-ES, eng-ENG';

    sr.start();
    //sr.stop();
    sr.onresult = function(e){
        for(var i = e.resultIndex; i < e.results.length; i++){
            if(e.results[i].isFinal){
                var texto = e.results[i][0].transcript.replace(/\s/g, '');
                console.log(texto);
                if(texto == 'play'){
                    ponerPlay();
                }else if(texto == 'pause'){
                    ponerPausa();
                }else if(texto == 'stop'){
                    ponerStop();
                }else if(texto == 'subir volumen'){
                    volumen.value = parseInt(volumen.value) + 10
                    cambiarVolumen();
                }else if(texto == 'bajar volumen'){
                    volumen.value = parseInt(volumen.value) - 10
                    cambiarVolumen();
                }else if(texto == 'adelantar'){
                    video.currentTime = video.currentTime + 10;
                }else if(texto == 'retroceder'){
                    video.currentTime = video.currentTime - 10;
                }else if (texto == 'silenciar'){
                    volumen.value = 0;
                    cambiarVolumen();
                }
            }
        }
    }
}

       // var texto = e.results[e.results.length - 1][0].transcript;
       // console.log(texto);

function asignarDuracion(){
    
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
    var valor = (video.currentTime * 100) / video.duration;
    document.querySelector('#porcentaje').style.width = valor + '%';
}
function cambiarVolumen(){
    video.volume = volumen.value;
}