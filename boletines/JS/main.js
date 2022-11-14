console.log("Hola Mundo desde JS!!");


//DOM

//para buscar un elemento por su id solo da un elemento querySelector

/*let tabla = document.querySelector(".table");

console.log(tabla);

//para buscar un elemento por su clase da un array querySelectorAll

let parrafo = document.querySelectorAll(".paragraph");

parrafo.forEach((p) => {
    
    console.log(parrafo);
});
*/
//eventos en JS 

/*let celdas = document.querySelectorAll("td")
celdas.forEach((td) => {
    
    td.addEventListener("click", () => {//1 er argumento es el evento y el segundo la funcion
        console.log("click");//this nos retorna el elemento que esta disparando el evento
    })
});*/
//obtener elementos de clase close

/*let cerrar = document.querySelectorAll(".close");

//recorrerlos

cerrar.forEach((close) => {

//agregarles un evento click

cerrar.forEach((close) => {
    close.addEventListener("click", (evento) => {
        evento.preventDefault();

        return false;
    });
});
});   
    console.log("click");*/


   /* let content = document.querySelector(".content");
    
        content.classList.remove("animate__backInDown");//clase que se va a remover
        content.classList.remove("animate__animated");//clase que se va a agregar
        content.classList.add("animate__backOutUp");
        content.classList.add("animate__animated");
      
        setTimeout(() => {
        location.href = "/";
        }, 6000);

        setInterval(() => {
        location.href = "/boletines";
            }, 2000);*/