var ctx, canvas, bandera = false;

window.addEventListener('load', init);
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame 
    || window.mozRequestAnimationFrame 
    || window.webkitRequestAnimationFrame 
    || window.msRequestAnimationFrame
    || function(f){
        window.setTimeout(f, 1000/60);
        };
    })();
function init() {
    var video = document.getElementById('video');
    var boton = document.getElementById('tf');
    boton.addEventListener('click', tomarFoto);

    navigator.getUserMedia = (
    navigator.getUserMedia 
    || navigator.webkitGetUserMedia 
    || navigator.mozGetUserMedia 
    || navigator.msGetUserMedia
    || navigator.oGetUserMedia
    );

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, function(stream) {
            video.srcObject = stream;//window.URL.createObjectURL(stream);
            video.play();
    },
    function(err) {
        console.log(err);
    });
    } else {
        alert("getUserMedia not supported");
    }
    canvas = document.getElementById('c')
    ctx = canvas.getContext('2d');
    video.addEventListener('loadedmetadata', function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        bandera = true
        draw();
    }, false);
}

function draw () {
    // var imagen = new Image();
    // imagen.src = 'img/imagen.jpg';
    // imagen.onload = function() {
    //     ctx.drawImage(this, 0, 0);
    // }
    ctx.drawImage(video, 0, 0);
    //invertirColores(canvas, ctx);
    requestAnimationFrame(draw);

}
function tomarFoto() {
    if(!bandera){
        alert('No puedes tomar fotos');
        return;
    }
    var imgData = canvas.toDataURL('image/png');
    document.getElementById('foto').setAttribute('src', imgData);
}

// function invertirColores() {
//     var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     var data = imgData.data;
//     for (var i = 0; i < data.length; i += 4) {
//         data[i] = 255 - data[i];
//         data[i + 1] = 255 - data[i + 1];
//         data[i + 2] = 255 - data[i + 2];
//     }
//     ctx.putImageData(imgData, 0, 0);
// }
// function aSepia() {
//     var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     var data = imgData.data;
//     for (var i = 0; i < data.length; i += 4) {
//         var r = data[i];
//         var g = data[i + 1];
//         var b = data[i + 2];
//         data[i] = (r * .393) + (g *.769) + (b * .189);
//         data[i + 1] = (r * .349) + (g *.686) + (b * .168);
//         data[i + 2] = (r * .272) + (g *.534) + (b * .131);
//     }
//     ctx.putImageData(imgData, 0, 0);
// }
// function aNegativo() {
//     var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     var data = imgData.data;
//     for (var i = 0; i < data.length; i += 4) {
//         var r = data[i];
//         var g = data[i + 1];
//         var b = data[i + 2];
//         data[i] = 255 - r;
//         data[i + 1] = 255 - g;
//         data[i + 2] = 255 - b;
//     }
//     ctx.putImageData(imgData, 0, 0);
// }




