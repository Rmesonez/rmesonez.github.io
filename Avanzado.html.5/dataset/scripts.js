window.addEventListener('load', init);
function init(){
    var elementos_data_a = document.querySelectoral('[data-a]');
    var el = document.getElementById('elemento');
    
    el.dataset.a = 'nuevo ejemplo';
    console.log(el.dataset.a);
}