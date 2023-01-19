const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamanoIndicador = menu.querySelector('a').offsetWidth;
// console.log(tamanoIndicador)
indicador.style.width = tamanoIndicador + 'px';

let indexSeccionActiva;


//observador
const observer = new IntersectionObserver((entradas) => {  
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            //obtenemos la sseccion que esta en pantalla
            // console.log(entrada.target);
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            //convertimos en arreglo [] las secciones y pedimos el indice de c/ elemento
            //console.log(indexSeccionActiva);
            indicador.style.transform = `translateX(${tamanoIndicador * indexSeccionActiva}px)`;

            
        }
    })
},{
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2  //permite ejecutar la funcion en cierto % del vh
});

//observador al hero
observer.observe(document.getElementById('hero'));

//asignamos el observador
secciones.forEach(seccion => observer.observe(seccion));

// evento para identificar cuando la pantalla cambie de tamano
const onResize = () =>{
//calculamos el nuevo tamaño del indicador
    tamanoIndicador =  menu.querySelector('a').offsetWidth;

//cambiamos el tamano
    indicador.style.width = tamanoIndicador + 'px';

    //volver a posicionar
    indicador.style.transform = `translateX(${tamanoIndicador * indexSeccionActiva}px)`;

}
window.addEventListener('resize', onResize);



