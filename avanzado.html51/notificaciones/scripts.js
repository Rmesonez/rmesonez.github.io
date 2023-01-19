if(!window.webkitNotifications) {
    alert("Tu navegador no soporta notificaciones de escritorio");
}
window.addEventListener("load", init);
function init() {
    document.querySelector("#activar_notificacion").addEventListener("click", function(){
    if(window.webkitNotifications.checkPermission() == 0) createNotification(); 
    else window.webkitNotifications.requestPermission();
    },false);
}
function createNotification() {
    var notificacion = window.webkitNotifications.createNotification("","Notificación de escritorio",
    "Hola, esto es una notificación de escritorio"
    );
    notificacion.show();
    notificacion.addEventListener('display',function(){
        document.querySelector('#aviso').innerHTML = "Notificación mostrada";
        },false);
    notificacion.addEventListener('close',function(){
        document.querySelector('#aviso').innerHTML = "Notificación cerrada";
        },false);
    
}

      
