// window.history.back();
// window.history.forward();
// window.history.go(-2);
// window.history.go('http://www.google.com');
// window.history.go(2);
window.pushState({pagina = 1 }, " ", "/cambiodeurl");//agregar un nuevo estado a la historia 
window.replaceState(null, " ", "/cambiodeurl");//reemplazar el estado actual de la historia
window.onpopstate = function(event) {//PERMITE RECUPERAR EL ESTADO ANTERIOR
    console.log(event.state);
}
