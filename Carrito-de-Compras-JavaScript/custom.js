//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');
let stockCount = document.querySelector('.stock');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;
let stock = 10;

//functions
loadEventListeners();
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}
/*logica loadEventListeners
va a tener listeners en los items de carro (click para agregar)
y en el container de mi carrito(click para eliminar)*/

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
        stock--;
    }if (stock === 0){
        alert('No hay stock disponible');
        stockCount.innerHTML = 0;
    }else {
        stockCount.innerHTML = stock;
    }
}


/*logica addProduct va a tener un evento (e) quqe se previene
de su comportamiento habitual
y se condiciona
si el target (boton add to cart) contiene la clase (btn-add-cart)se crea una const selectProduct = al padre del boton
y se pasa una funcion que lea el contenido(del producto seleccionado)*/

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
        stock++;
    }

    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
        stock = 10;
    }
    loadHtml();
}
    /*la funcion deleteProduct va a tener un evento(e)
    y una condicion si el target (boton X cerrar) contiene la clase(delete-product) se crea una const donde se asigna 
    que el producto borrado = al producto que se le dio al boton para eliminar el cual se accedera a el por el atributo data-id 
    
    buyThings es un array vacio se hace un bucle y se pasa un callback con una condicion
    que si el valor del id = al producto borrado
    se hace una constante que = a la conversion del monto en string a numero del precio * la conversion de la cantidad de string a numero
    en donde totalCard = 0 
    = totalCard - la constante que acabamos de definir
    y le aplicamos un metodo para que de 2 decimales
    
    luego se filtra el arreglo obtenido con una validacion 
    si el producto => al id del seleccionado y este es diferente al producto que se llama con el data id
    disminuye la cuenta en uno
    
    y se hace otra en donde si las cosas añadidas al carro = 0
    el precio y la cantidad de producto que se cargaran sera 0*/

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1,
        stock: stock - 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
        stock--;
    }
    loadHtml();
    //console.log(infoProduct);
}
/*se crea una constante con un objeto que tendra las keys necesarias para que se muestren en mi carrito
y a cada una se le indica mediante un parametro de donde va a sacar la info
para que al momento de dar click en add to cart se agregue la descripcion del producto seleccionado
en donde la auenta va a ser al contrario de lo realizado en la funcion de delete 
por que la idea es que en vez de restar sume
y en la validacion generara un array con los productos agregados
y se iran concatenando uno despues de otro */

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
                <h6>Stock: ${stock}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;

        //stockCount.innerHTML = stock;


    });
}
/*se crea una funcion que cargara el html donde se hara un bucle que tendra un callback que tiene de parametros todos los keys declarados antes 
y se creara una estructura html que ira dentro de un contenedor ya hecho en el index 
*/
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }