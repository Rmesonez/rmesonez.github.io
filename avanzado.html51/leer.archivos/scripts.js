window.addEventListener('load', init);
function init() {
    // Path: leer archivos\scripts.js
    var inputData = document.getElementById('archivos');
    inputData.addEventListener('change', leerArchivos, false);
}
function leerArchivos(e) {
    var archivos = e.target.files;
   // var archivo = archivos[0];
    var lector = new FileReader();
    lector.addEventListener('load', mostrar, false);
    for (var i = 0; i < archivos.length; i++) {
        var archivo = archivos[i];
        document.getElementById('nombre').innerHTML = archivo.name;
        document.getElementById('size').innerHTML = archivo.size;

        if(archivo.type.match(/image.*/i)){
            lector.readAsDataURL(archivo);
            continue;
        }

        lector.readAsText(archivo);
    }
}
function mostrar(e) {
    var resultado = e.target.result;
    var target = document.getElementById('contenido');
    if(resultado.indexOf(' ') < 1){
        var imagen = document.createElement('img');
        imagen.setAttribute('src', resultado);
        target.appendChild(imagen);
        return;
    }
    target.innerHTML = resultado;
}
