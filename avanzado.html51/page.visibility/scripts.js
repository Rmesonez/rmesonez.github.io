var notificacion;
var arreglo_prefijos = getHiddenProp();
if (arreglo_prefijos) {
    var hidden = arreglo_prefijos[0], visibilityChange = arreglo_prefijos[1];// ,visibilityUnloaded = arreglo_prefijos[2];
}else{
    alert("Tu navegador no soporta notificaciones");
}

function setNotifications(){
    if (window.webkitNotifications)
    window.webkitNotifications.requestPermission();
    else{
        alert("Tu navegador no soporta notificaciones");
    }
}


window.addEventListener("load", init);
function init() {
    document.querySelector("#activar_notificacion").addEventListener("click", function(){
    if(window.webkitNotifications.checkPermission() != 0) window.webkitNotifications.requestPermission();
    },false);
    
document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

function handleVisibilityChange() {
    if (document[hidden]) {
        createNotification();
        return;
    }
    //if(document[unloaded]){
        notificacion.cancel();
    //}
}

function createNotification() {
    notificacion = window.webkitNotifications.createNotification("","Vuelve","Te Extrañamos");
    notificacion.show();
    notificacion.addEventListener('display',function(){
        document.querySelector('#aviso').innerHTML = "Notificación mostrada";
        },false);
    notificacion.addEventListener('close',function(){
        document.querySelector('#aviso').innerHTML = "Notificación cerrada";
        }
    ,false);
}
function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return ['hidden','visibilitychange'];
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
       var prefix = prefixes[i];
       var prop = prefix + 'Hidden';
       var prop_unloaded = prefix + 'Unloaded';
       var prop_vs = prefix + 'visibilitychange';
         if (prop in document) {
            return [prop,prop_vs,];//prop_unloaded];
         }
    }
    // otherwise it's not supported
    return null;
}

