window.addEventListener('load', init, false);
function init() {
    var inputfile= document.getElementById('archivo');
    inputfile.addEventListener('change', crearBlob, false);
}
function crearBlob(e) {
    var archivos = e.target.files;
    for (var i = 0; i < archivos.length; i++) {
        var archivo = archivos[i];
        var lector = new FileReader();
        lector.addEventListener('load', function(){display(e,archivo);},false);
        var blob = archivo.slice(0,1000);
        lector.readAsBinaryString(blob);
}
function display(e,archivo) {
    console.log (e);
    console.log(archivo);
}
}

