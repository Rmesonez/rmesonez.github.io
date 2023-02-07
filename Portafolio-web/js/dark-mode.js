//tema sin seleccionar=> darkmode
//configurado en darkmode => darkmode
//configurado en lightmode => lightmode
//tema seleccionado en darkmode => darkmode

let toggle = document.getElementById('dark-toggle');
let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


toggle.addEventListener('change',function(){
    if(darkMode){
        document.body.classList.toggle('force-light')
    }else{
        document.body.classList.toggle('force-dark')
    }
})




//funcion para cambiar el color rgb a hex
// function rgb2hex(rgb){
//     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//     function hex(x) {
//         return ("0" + parseInt(x).toString(16)).slice(-2);
//     }
//     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]).toUpperCase();
// }