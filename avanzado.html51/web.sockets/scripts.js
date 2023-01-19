var host = "ws://localhost:5500/web.sockets/server.php";
var socket;

window.addEventListener('load', init, false);

function init() {
    var socket = new WebSocket(host);

    socket.addEventListener('open', function (e) {
        console.log("Conexión establecida");
        document.getElementById("enviar_mensaje").addEventListener('click', function(){
            socket.send(document.getElementById("mensaje").value);
        },false);
    }, false);

    socket.addEventListener('message', function (msg) {
        console.log(msg.data);
    },false);
}
