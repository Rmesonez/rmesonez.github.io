window.addEventListener('load',init, false);
function init(){
    var box = document.getElementById('box');
    btn.addEventListener('dragover',function(e){e.preventdefautl(); return false},false);
    btn.addEventListener('drop',subirArchivo,false);
}
function subirArchivo(e){
    e.preventDefault();
    var files = e.dataTransfer.files;
    for(var i=0; i<files.length; i++){
        var file = files[i];
        var fD = new formData();
        fD.append('user_file',file);
        var ajax = new XMLHttpRequest();
        ajax.open('POST','upload.php',true);
        ajax.addEventListener('load',function(e){
            if(this.status == 200){
                box.innerHTML = "El Archivo se Subio Correctamente";
            }
            else{
                box.innerHTML = "Error al Subir el Archivo";
            }
        });
        box.innerHTML = "Subiendo el Archivo";
        ajax.upload.addEventListener('progress', function(e){
            if (e.lengthComputable){
                document.querySelector('#progreso').style.width = (e.loaded/e.total)*100 + '%';
            }
        });
        ajax.send(fD);
    }
    return false;
}