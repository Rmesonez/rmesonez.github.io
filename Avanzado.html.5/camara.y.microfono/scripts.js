window.addEventListener('load', init);
function init(){
    var video = document.getElementById('video');
    navigator.getUserMedia = 
        navigator.getUserMedia 
    || navigator.webkitGetUserMedia 
    || navigator.mozGetUserMedia 
    || navigator.msGetUserMedia;
    
};
if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true, audio: true}, function(stream){
        video.srcObject = stream;
        video.play();
    },
    function(e) {
        console.log(e);
    }); 
}else{
    alert('Tu navegador no soporta getUserMedia');
}