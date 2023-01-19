if(window.EventSource) {
    var server_listener = new EventSource('server.php');
    server_listener.addEventListener('open', function(e) {
        console.log("Connection to server opened.");
    }, false);
    server_listener.addEventListener('error', function(e){
        if(e.readyState == EventSource.CLOSED) {
            console.log("Connection to server closed.");
        }
        else console.log(e);
    }, false);
    server_listener.addEventListener('message', function(e) {
        console.log(e.data);
    }, false);
    server_listener.addEventListener('evento', function(e) {
        console.log(e.data);
    }, false);


}