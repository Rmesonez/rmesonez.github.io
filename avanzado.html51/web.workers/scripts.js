window.addEventListener('load', init, false);
function init(){
    document.querySelector('#buscar').addEventListener('click', function(){
        var numero = document.querySelector('#numero').value;
        // var primosDe = buscarPrimos(numero);
        // console.log(primosDe);
        var worker = new Worker('web_worker.js');
        worker.addEventListener('message', function(e){
            console.log(e.data);
        });
        worker.postMessage(numero);
    }, false);
}
function buscarPrimos(n){
    if(n < 2 ) return [];
    console.log(n);
    var primos = [2];
    for(var i = 3; i <= n; i++){
        var bandera = false;
        for(var j = 0; j < primos.length; j++){
            if(i % primos[j] == 0){
                bandera = true;
                break;
            }
        }
        if(!bandera) primos.push(i);
        
        
        
    }
    return primos;
}
    

